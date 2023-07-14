import React from 'react'
import styled from 'styled-components'
import { Text, Heading, BaseLayout, Button, LinkExternal, Flex, Image } from '@pancakeswap-libs/uikit'
import { ifosConfig } from 'config/constants'
import useI18n from 'hooks/useI18n'
import IfoCard from './components/IfoCard'
import Title from './components/Title'
import IfoCards from './components/IfoCards'

const LaunchIfoCallout = styled(BaseLayout)`
  border-top: 2px solid ${({ theme }) => theme.colors.textSubtle};
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 32px;
  margin: 0 auto;
  padding: 32px 0;

  ${({ theme }) => theme.mediaQueries.sm} {
    grid-template-columns: 1fr 1fr;
  }
`

const List = styled.ul`
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 16px;

  & > li {
    line-height: 1.4;
    margin-bottom: 8px;
  }
`

/**
 * Note: currently there should be only 1 active IFO at a time
 */
const activeIfo = ifosConfig.find((ifo) => ifo.isActive)

const Ifo = () => {
  const TranslateString = useI18n()

  return (
    <div>
      <IfoCards isSingle>
        <IfoCard ifo={activeIfo} />
      </IfoCards>
      <LaunchIfoCallout>
        <div>
          <Title as="h2">{TranslateString(592, 'How to take part')}</Title>
          <Heading mb="16px">{TranslateString(594, 'Before Sale')}:</Heading>
          <List>
            <li>{TranslateString(596, 'Get some WPLS tokens from any exchange (such as PulseX')}</li>
            <li>{TranslateString(999999999999, 'Use the WPLS tokens to purchase an allocation of the $CARROT tokens!')}</li>
          </List>
          <Flex mb="16px">
            <LinkExternal href="https://app.pulsex.com/swap" mr="16px">
              {TranslateString(999, 'Buy WPLS from PulseX')}
            </LinkExternal>            
          </Flex>
          <Heading mb="16px">{TranslateString(600, 'During Sale')}:</Heading>
          <List>
            <li>{TranslateString(999999999999, 'While the sale is live, commit your WPLS tokens to buy the CARROT tokens')}</li>
          </List>
          <Heading mb="16px">{TranslateString(604, 'After Sale')}:</Heading>
          <List>
            <li>{TranslateString(9999999999999, 'Claim the tokens you bought, along with any unspent funds.')}</li>
            <li>{TranslateString(9999999999999, 'ALL funds will be used to add initial CARROT liquidity for farming.')}</li>
            <li>{TranslateString(608, 'Done!  Stay tuned to Telegram and Twitter for updates!')}</li>
          </List>
          <Text as="div" pt="16px"/>
        </div>
        <div>
          <Image src="/images/ifo-bunny.png" alt="ifo bunny" width={436} height={406} responsive />
          <div>
            <Title as="h2"/>
            <Text mb={3}/>
          </div>
        </div>
      </LaunchIfoCallout>
    </div>
  )
}

export default Ifo
