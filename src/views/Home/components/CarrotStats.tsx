import React from 'react'
import { Card, CardBody, Heading, Text } from '@pancakeswap-libs/uikit'
import BigNumber from 'bignumber.js/bignumber'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import useI18n from 'hooks/useI18n'
import { getCarrotAddress } from 'utils/addressHelpers'
import CardValue from './CardValue'
import { useFarms, usePriceCarrotDai } from '../../../state/hooks'

const StyledCarrotStats = styled(Card)`
  margin-left: auto;
  margin-right: auto;
`

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 8px;
`

const CarrotStats = () => {
  const TranslateString = useI18n()
  const totalSupply = useTotalSupply()
  const burnedBalance = useBurnedBalance(getCarrotAddress())
  const farms = useFarms();
  const carrotPrice = usePriceCarrotDai();
  const circSupply = totalSupply ? totalSupply.minus(burnedBalance) : new BigNumber(0);
  const carrotSupply = getBalanceNumber(circSupply);
  const marketCap = carrotPrice.times(circSupply);

  let carrotPerSecond = 0;
  if(farms && farms[0] && farms[0].carrotPerSecond){
    carrotPerSecond = new BigNumber(farms[0].carrotPerSecond).div(new BigNumber(10).pow(18)).toNumber();
  }

  return (
    <StyledCarrotStats>
      <CardBody>
        <Heading size="xl" mb="24px">
          {TranslateString(534, 'Carrot Stats')}
        </Heading>
        <Row>
          <Text fontSize="14px">{TranslateString(10005, 'Market Cap')}</Text>
          <CardValue fontSize="14px" value={parseFloat(getBalanceNumber(marketCap))} decimals={0} prefix="$" />
        </Row>
        <Row>
          <Text fontSize="14px">{TranslateString(536, 'Total Minted')}</Text>
          {totalSupply && <CardValue fontSize="14px" value={parseFloat(getBalanceNumber(totalSupply))} decimals={0} />}
        </Row>
        <Row>
          <Text fontSize="14px">{TranslateString(538, 'Total Burned')}</Text>
          <CardValue fontSize="14px" value={parseFloat(getBalanceNumber(burnedBalance))} decimals={0} />
        </Row>
        <Row>
          <Text fontSize="14px">{TranslateString(10004, 'Circulating Supply')}</Text>
          {circSupply && <CardValue fontSize="14px" value={parseFloat(getBalanceNumber(circSupply))} decimals={0} />}
        </Row>
        <Row>
          <Text fontSize="14px">{TranslateString(540, 'New CARROT/second')}</Text>
          <Text bold fontSize="14px">{carrotPerSecond}</Text>
        </Row>
      </CardBody>
    </StyledCarrotStats>
  )
}

export default CarrotStats
