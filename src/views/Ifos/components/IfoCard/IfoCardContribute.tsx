import React, { useState, useEffect } from 'react'
import { useModal, Button, Text } from '@pancakeswap-libs/uikit'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import BigNumber from 'bignumber.js'
import { Contract } from 'web3-eth-contract'
import { useERC20 } from 'hooks/useContract'
import { useIfoAllowance } from 'hooks/useAllowance'
import { useIfoApprove } from 'hooks/useApprove'
import { IfoStatus } from 'config/constants/types'
import { getBalanceNumber } from 'utils/formatBalance'
import LabelButton from './LabelButton'
import ContributeModal from './ContributeModal'

export interface Props {
  address: string
  currency: string
  currencyAddress: string
  contract: Contract
  status: IfoStatus
  raisingAmount: BigNumber
  tokenDecimals: number
}

const IfoCardContribute: React.FC<Props> = ({
  address,
  currency,
  currencyAddress,
  contract,
  status,
  raisingAmount,
  tokenDecimals,
}) => {
  const [pendingTx, setPendingTx] = useState(false)
  const [offeringTokenBalance, setOfferingTokenBalance] = useState(new BigNumber(0))
  const [userInfo, setUserInfo] = useState<{ amountPools: number; statusPools: boolean }>({
    amountPools: 0,
    statusPools: false,
  })

  const { account } = useWallet()
  const contractRaisingToken = useERC20(currencyAddress)
  const allowance = useIfoAllowance(contractRaisingToken, address, pendingTx)
  const onApprove = useIfoApprove(contractRaisingToken, address)
  const [onPresentContributeModal] = useModal(
    <ContributeModal currency={currency} contract={contract} currencyAddress={currencyAddress} />
  )

  useEffect(() => {
    const fetchData = async () => {
      const userOfferingAndRefundAmounts = await contract.methods.viewUserOfferingAndRefundingAmountsForPools(
        account,
        [0]
      ).call()
      const balancePaymentToken = new BigNumber(userOfferingAndRefundAmounts[0])
      const userInformationResponse: [number[], boolean[]] = await contract.methods.viewUserInfo(account, [0]).call()

      const amountPools = userInformationResponse[0]
      const statusPools = userInformationResponse[1]

      if (amountPools.length > 0 && statusPools.length > 0) {
        const userInformation = {
          amountPools: amountPools[0],
          statusPools: statusPools[0],
        }
        setUserInfo(userInformation)
      }
      setOfferingTokenBalance(balancePaymentToken)
    }

    if (account) {
      fetchData()
    }
  }, [account, contract.methods, pendingTx])

  if (allowance === null) {
    return null
  }

  const claim = async () => {
    setPendingTx(true)
    await contract.methods.harvest().send({ from: account })
    setPendingTx(false)
  }
  const isFinished = status === 'finished'
  const percentOfUserContribution = (userInfo.amountPools / 125000000000000000000000000) * 100;
  

  if (allowance <= 0) {
    return (
      <Button
        fullWidth
        disabled={pendingTx || isFinished}
        onClick={async () => {
          try {
            setPendingTx(true)
            await onApprove()
            setPendingTx(false)
          } catch (e) {
            setPendingTx(false)
            console.error(e)
          }
        }}
      >
        Approve
      </Button>
    )
  }

  return (
    <>
      <LabelButton
        disabled={pendingTx || userInfo.statusPools}
        buttonLabel={isFinished ? 'Claim' : 'Contribute'}
        label={isFinished ? 'Your tokens to claim' : `Your contribution (${currency})`}
        value={
          // eslint-disable-next-line no-nested-ternary
          isFinished
            ? userInfo.statusPools
              ? 'Claimed'
              : parseFloat(getBalanceNumber(offeringTokenBalance, tokenDecimals)).toFixed(4)
            : parseFloat(getBalanceNumber(new BigNumber(userInfo.amountPools))).toFixed(4)
        }
        onClick={isFinished ? claim : onPresentContributeModal}
      />
      <Text fontSize="14px" color="textSubtle">
        {isFinished
          ? `You'll be refunded any excess tokens when you claim`
          : `${percentOfUserContribution.toFixed(5)}% of total`}
      </Text>
    </>
  )
}

export default IfoCardContribute