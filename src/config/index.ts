import BigNumber from 'bignumber.js/bignumber'

BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
})

export const CARROT_PER_SECOND = new BigNumber(1)
export const SECONDS_PER_YEAR = new BigNumber(31540000)
export const PLS_SECONDS_TIME = 10

export const CARROT_POOL_PID = 1
