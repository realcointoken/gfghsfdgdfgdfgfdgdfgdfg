import React from 'react'
import { useTotalClaim } from 'hooks/useTickets'
import { getBalanceNumber } from 'utils/formatBalance'
import CardValue from './CardValue'

const CarrotWinnings = () => {
  const { claimAmount } = useTotalClaim()
  return <CardValue value={parseFloat(getBalanceNumber(claimAmount))} />
}

export default CarrotWinnings
