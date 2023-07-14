import poolsConfig from 'config/constants/pools'
import sousChefABI from 'config/abi/sousChef.json'
import carrotABI from 'config/abi/carrot.json'
import wplsABI from 'config/abi/weth.json'
import { QuoteToken } from 'config/constants/types'
import multicall from 'utils/multicall'
import { getWplsAddress } from 'utils/addressHelpers'
import BigNumber from 'bignumber.js'

const CHAIN_ID = process.env.REACT_APP_CHAIN_ID

export const fetchPoolsBlockLimits = async () => {
  const poolsWithEnd = poolsConfig.filter((p) => p.sousId !== 0)
  const callsStartBlock = poolsWithEnd.map((poolConfig) => {
    return {
      address: poolConfig.contractAddress[CHAIN_ID],
      name: 'startBlock',
    }
  })
  const callsEndBlock = poolsWithEnd.map((poolConfig) => {
    return {
      address: poolConfig.contractAddress[CHAIN_ID],
      name: 'bonusEndBlock',
    }
  })

  const starts = await multicall(sousChefABI, callsStartBlock)
  const ends = await multicall(sousChefABI, callsEndBlock)

  return poolsWithEnd.map((carrotPoolConfig, index) => {
    const startBlock = starts[index]
    const endBlock = ends[index]
    return {
      sousId: carrotPoolConfig.sousId,
      startBlock: new BigNumber(startBlock).toJSON(),
      endBlock: new BigNumber(endBlock).toJSON(),
    }
  })
}

export const fetchPoolsTotalStatking = async () => {
  const nonPlsPools = poolsConfig.filter((p) => p.stakingTokenName !== QuoteToken.WPLS)
  const plsPool = poolsConfig.filter((p) => p.stakingTokenName === QuoteToken.WPLS)

  const callsNonPlsPools = nonPlsPools.map((poolConfig) => {
    return {
      address: poolConfig.stakingTokenAddress,
      name: 'balanceOf',
      params: [poolConfig.contractAddress[CHAIN_ID]],
    }
  })

  const callsPlsPools = plsPool.map((poolConfig) => {
    return {
      address: getWplsAddress(),
      name: 'balanceOf',
      params: [poolConfig.contractAddress[CHAIN_ID]],
    }
  })

  const nonPlsPoolsTotalStaked = await multicall(carrotABI, callsNonPlsPools)
  const plsPoolsTotalStaked = await multicall(wplsABI, callsPlsPools)

  return [
    ...nonPlsPools.map((p, index) => ({
      sousId: p.sousId,
      totalStaked: new BigNumber(nonPlsPoolsTotalStaked[index]).toJSON(),
    })),
    ...plsPool.map((p, index) => ({
      sousId: p.sousId,
      totalStaked: new BigNumber(plsPoolsTotalStaked[index]).toJSON(),
    })),
  ]
}
