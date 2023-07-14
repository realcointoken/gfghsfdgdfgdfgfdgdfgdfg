import { usePriceCarrotDai } from 'state/hooks'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalRewards } from './useTickets'

const useLotteryTotalPrizesUsd = () => {
  const totalRewards = useTotalRewards()
  const totalCarrot = getBalanceNumber(totalRewards)
  const carrotPriceDai = usePriceCarrotDai()

  return parseFloat(totalCarrot) * carrotPriceDai.toNumber()
}

export default useLotteryTotalPrizesUsd
