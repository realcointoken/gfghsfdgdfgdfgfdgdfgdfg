import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'CARROT-DAI LP',
    lpAddresses: {
      97: '',
      56: '0x19e7cbecdd23a16dfa5573df54d98f7caae03019',
      369: '0x9Cdee06ab35C0b283Fa47230C94007AadB3A552b'
    },
    tokenSymbol: 'CARROT',
    tokenAddresses: {
      97: '',
      56: '0xf952fc3ca7325cc27d15885d37117676d25bfda6',
      369: '0x1F0FF02C26EF3f02E77C2F446405a089C40E5E6c'
    },
    quoteTokenSymbol: QuoteToken.DAI,
    quoteTokenAdresses: contracts.dai,
  },
  {
    pid: 1,
    risk: 5,
    lpSymbol: 'CARROT-WPLS LP',
    lpAddresses: {
      97: '',
      56: '0xd1b59d11316e87c3a0a069e80f590ba35cd8d8d3',
      369: '0x4efFE5963E8F50919b91eD5E3134206C031e2D8c'
    },
    tokenSymbol: 'CARROT',
    tokenAddresses: {
      97: '',
      56: '0xf952fc3ca7325cc27d15885d37117676d25bfda6',
      369: '0x1F0FF02C26EF3f02E77C2F446405a089C40E5E6c'
    },
    quoteTokenSymbol: QuoteToken.WPLS,
    quoteTokenAdresses: contracts.wpls,
  }, 
  {
    pid: 3,
    risk: 5,
    lpSymbol: 'CARROT-ETH LP',
    lpAddresses: {
      97: '',
      56: '0xa527a61703d82139f8a06bc30097cc9caa2df5a6',
      369: '0xD74e91D2249e766190A9412F3B2071480d39aB5e'
    },
    tokenSymbol: 'ETH',
    tokenAddresses: {
      97: '',
      56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
      369: '0x02DcdD04e3F455D838cd1249292C58f3B79e3C3C'
    },
    quoteTokenSymbol: QuoteToken.CARROT,
    quoteTokenAdresses: contracts.carrot,
  },
  {
    pid: 4,
    risk: 5,
    lpSymbol: 'CARROT-USDC LP',
    lpAddresses: {
      97: '',
      56: '0xa527a61703d82139f8a06bc30097cc9caa2df5a6',
      369: '0x26b6AF6B674271247bBdCAAd985bdAdF1a5AffcD'
    },
    tokenSymbol: 'USDC',
    tokenAddresses: {
      97: '',
      56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
      369: '0x15D38573d2feeb82e7ad5187aB8c1D52810B1f07'
    },
    quoteTokenSymbol: QuoteToken.CARROT,
    quoteTokenAdresses: contracts.carrot,
  },
  {
    pid: 5,
    risk: 5,
    lpSymbol: 'CARROT-USDT LP',
    lpAddresses: {
      97: '',
      56: '0xa527a61703d82139f8a06bc30097cc9caa2df5a6',
      369: '0x0dEceA26CA7dd0e9FBb5Da1CF0DB3B161dEc1fd4'
    },
    tokenSymbol: 'USDT',
    tokenAddresses: {
      97: '',
      56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
      369: '0x0Cb6F5a34ad42ec934882A05265A7d5F59b51A2f'
    },
    quoteTokenSymbol: QuoteToken.CARROT,
    quoteTokenAdresses: contracts.carrot,
  },
  {
    pid: 2,
    risk: 3,
    lpSymbol: 'WPLS-DAI LP',
    lpAddresses: {
      97: '',
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f',
      369: '0xbbe6fbD141A593af6FfD8c7f492906F0D9E99b97'
    },
    tokenSymbol: 'PLS',
    tokenAddresses: {
      97: '',
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
      369: '0xA1077a294dDE1B09bB078844df40758a5D0f9a27'
    },
    quoteTokenSymbol: QuoteToken.DAI,
    quoteTokenAdresses: contracts.dai,
  },
   {
    pid: 6,
    risk: 4,
    lpSymbol: 'ETH-DAI LP',
    lpAddresses: {
      97: '',
      56: '0x0ed8e0a2d99643e1e65cca22ed4424090b8b7458',
      369: '0x4A0d02428C3502d6Ba2F8F421b35438470fF7d5b'
    },
    tokenSymbol: 'ETH',
    tokenAddresses: {
      97: '',
      56: '0x02DcdD04e3F455D838cd1249292C58f3B79e3C3C',
      369: '0x02DcdD04e3F455D838cd1249292C58f3B79e3C3C'
    },
    quoteTokenSymbol: QuoteToken.DAI,
    quoteTokenAdresses: contracts.dai,
  },
  {
    pid: 7,
    risk: 1,
    lpSymbol: 'USDT-DAI LP',
    lpAddresses: {
      97: '',
      56: '0xc15fa3e22c912a276550f3e5fe3b0deb87b55acd',
      369: '0x6c4Ec723e23B235613Fb30d3EEAC9B2d47D5C8f8'
    },
    tokenSymbol: 'USDT',
    tokenAddresses: {
      97: '',
      56: '0x55d398326f99059ff775485246999027b3197955',
      369: '0x0Cb6F5a34ad42ec934882A05265A7d5F59b51A2f'
    },
    quoteTokenSymbol: QuoteToken.DAI,
    quoteTokenAdresses: contracts.dai,
  },
  {
    pid: 8,
    risk: 1,
    lpSymbol: 'USDC-DAI LP',
    lpAddresses: {
      97: '',
      56: '0x680dd100e4b394bda26a59dd5c119a391e747d18',
      369: '0x9B29b714917178227Ce6eE774CFf47D012860f11'
    },
    tokenSymbol: 'USDC',
    tokenAddresses: {
      97: '',
      56: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
      369: '0x15D38573d2feeb82e7ad5187aB8c1D52810B1f07'
    },
    quoteTokenSymbol: QuoteToken.DAI,
    quoteTokenAdresses: contracts.dai,
  },

   {
    pid: 9,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'CARROT',
    lpAddresses: {
      97: '',
      56: '0x19e7cbecdd23a16dfa5573df54d98f7caae03019',
      369: '0x9Cdee06ab35C0b283Fa47230C94007AadB3A552b' // CARROT-DAI LP
    },
    tokenSymbol: 'CARROT',
    tokenAddresses: {
      97: '',
      56: '0xf952fc3ca7325cc27d15885d37117676d25bfda6',
      369: '0x1F0FF02C26EF3f02E77C2F446405a089C40E5E6c'
    },
    quoteTokenSymbol: QuoteToken.DAI,
    quoteTokenAdresses: contracts.dai,
  },
  {
    pid: 10,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'WPLS',
    lpAddresses: {
      97: '',
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f',
      369: '0xbbe6fbD141A593af6FfD8c7f492906F0D9E99b97' // PLS-DAI LP
    },
    tokenSymbol: 'WPLS',
    tokenAddresses: {
      97: '',
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
      369: '0xA1077a294dDE1B09bB078844df40758a5D0f9a27'
    },
    quoteTokenSymbol: QuoteToken.DAI,
    quoteTokenAdresses: contracts.dai,
  },
  {
    pid: 11,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'PLSX',
    lpAddresses: {
      97: '',
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f',
      369: '0xd4a30E7612B82152E1674f170149433Cfc2E2F9a' // PLSX-PLS LP
    },
    tokenSymbol: 'PLSX',
    tokenAddresses: {
      97: '',
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
      369: '0x95B303987A60C71504D99Aa1b13B4DA07b0790ab'
    },
    quoteTokenSymbol: QuoteToken.WPLS,
    quoteTokenAdresses: contracts.wpls,
  },
  // {
  //   pid: 4,
  //   risk: 2,
  //   lpSymbol: 'BTCB-PLS LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x7561eee90e24f3b348e1087a005f78b4c8453524',
  //     369: ''
  //   },
  //   tokenSymbol: 'BTCB',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
  //     369: ''
  //   },
  //   quoteTokenSymbol: QuoteToken.WPLS,
  //   quoteTokenAdresses: contracts.wpls,
  // },
  
  // {
  //   pid: 6,
  //   risk: 1,
  //   lpSymbol: 'DAI-DAI LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x3ab77e40340ab084c3e23be8e5a6f7afed9d41dc',
  //     369: ''
  //   },
  //   tokenSymbol: 'DAI',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3',
  //     369: ''
  //   },
  //   quoteTokenSymbol: QuoteToken.DAI,
  //   quoteTokenAdresses: contracts.dai,
  // },
  
  // {
  //   pid: 9,
  //   risk: 3,
  //   lpSymbol: 'DOT-PLS LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xbcd62661a6b1ded703585d3af7d7649ef4dcdb5c',
  //     369: ''
  //   },
  //   tokenSymbol: 'DOT',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x7083609fce4d1d8dc0c979aab8c869ea2c873402',
  //     369: ''
  //   },
  //   quoteTokenSymbol: QuoteToken.WPLS,
  //   quoteTokenAdresses: contracts.wpls,
  // },
 
  
 
  // {
  //   pid: 13,
  //   risk: 1,
  //   isTokenOnly: true,
  //   lpSymbol: 'DAI',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x19e7cbecdd23a16dfa5573df54d98f7caae03019',
  //     369: '' // CARROT-DAI LP (DAI-DAI will ignore)
  //   },
  //   tokenSymbol: 'DAI',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
  //     369: ''
  //   },
  //   quoteTokenSymbol: QuoteToken.DAI,
  //   quoteTokenAdresses: contracts.dai,
  // },
  // {
  
  // {
  //   pid: 15,
  //   risk: 1,
  //   isTokenOnly: true,
  //   lpSymbol: 'USDT',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xc15fa3e22c912a276550f3e5fe3b0deb87b55acd',
  //     369: '' // USDT-DAI LP
  //   },
  //   tokenSymbol: 'USDT',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x55d398326f99059ff775485246999027b3197955',
  //     369: ''
  //   },
  //   quoteTokenSymbol: QuoteToken.DAI,
  //   quoteTokenAdresses: contracts.dai,
  // },
  // {
  //   pid: 16,
  //   risk: 2,
  //   isTokenOnly: true,
  //   lpSymbol: 'BTCB',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xb8875e207ee8096a929d543c9981c9586992eacb',
  //     369: '' // BTCB-DAI LP
  //   },
  //   tokenSymbol: 'BTCB',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
  //     369: ''
  //   },
  //   quoteTokenSymbol: QuoteToken.DAI,
  //   quoteTokenAdresses: contracts.dai,
  // },
  // {
  //   pid: 17,
  //   risk: 2,
  //   isTokenOnly: true,
  //   lpSymbol: 'ETH',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xd9a0d1f5e02de2403f68bb71a15f8847a854b494',
  //     369: '' // ETH-DAI LP
  //   },
  //   tokenSymbol: 'ETH',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
  //     369: ''
  //   },
  //   quoteTokenSymbol: QuoteToken.DAI,
  //   quoteTokenAdresses: contracts.dai,
  // },
  // {
  //   pid: 18,
  //   risk: 1,
  //   isTokenOnly: true,
  //   lpSymbol: 'DAI',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x3ab77e40340ab084c3e23be8e5a6f7afed9d41dc',
  //     369: '' // DAI-DAI LP
  //   },
  //   tokenSymbol: 'DAI',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3',
  //     369: ''
  //   },
  //   quoteTokenSymbol: QuoteToken.DAI,
  //   quoteTokenAdresses: contracts.dai,
  // },
  // {
  //   pid: 19,
  //   risk: 1,
  //   isTokenOnly: true,
  //   lpSymbol: 'USDC',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x680dd100e4b394bda26a59dd5c119a391e747d18',
  //     369: '' // USDC-DAI LP
  //   },
  //   tokenSymbol: 'USDC',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
  //     369: ''
  //   },
  //   quoteTokenSymbol: QuoteToken.DAI,
  //   quoteTokenAdresses: contracts.dai,
  // },
  // {
  //   pid: 20,
  //   risk: 3,
  //   isTokenOnly: true,
  //   lpSymbol: 'DOT',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x54c1ec2f543966953f2f7564692606ea7d5a184e',
  //     369: '' // DOT-DAI LP
  //   },
  //   tokenSymbol: 'DOT',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x7083609fce4d1d8dc0c979aab8c869ea2c873402',
  //     369: ''
  //   },
  //   quoteTokenSymbol: QuoteToken.DAI,
  //   quoteTokenAdresses: contracts.dai,
  // },
  // {
  //   pid: 21,
  //   risk: 4,
  //   isTokenOnly: true,
  //   lpSymbol: 'CARROT',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x0ed8e0a2d99643e1e65cca22ed4424090b8b7458',
  //     369: '' // CARROT-DAI LP
  //   },
  //   tokenSymbol: 'CARROT',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
  //     369: ''
  //   },
  //   quoteTokenSymbol: QuoteToken.DAI,
  //   quoteTokenAdresses: contracts.dai,
  // },
  // {
  //   pid: 22,
  //   risk: 3,
  //   isTokenOnly: true,
  //   lpSymbol: 'BSCX',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xa32a983a64ce21834221aa0ad1f1533907553136',
  //     369: '' // BSCX-DAI LP
  //   },
  //   tokenSymbol: 'BSCX',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x5ac52ee5b2a633895292ff6d8a89bb9190451587',
  //     369: ''
  //   },
  //   quoteTokenSymbol: QuoteToken.DAI,
  //   quoteTokenAdresses: contracts.dai,
  // },
  // {
  //   pid: 23,
  //   risk: 3,
  //   isTokenOnly: true,
  //   lpSymbol: 'AUTO',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x4d0228ebeb39f6d2f29ba528e2d15fc9121ead56',
  //     369: '' // AUTO-PLS LP
  //   },
  //   tokenSymbol: 'AUTO',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0xa184088a740c695e156f91f5cc086a06bb78b827',
  //     369: ''
  //   },
  //   quoteTokenSymbol: QuoteToken.WPLS,
  //   quoteTokenAdresses: contracts.wpls,
  // },
]

export default farms
