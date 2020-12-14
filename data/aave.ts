const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000'

export const aaveUnderlyingByNetwork: { [network: string]: string[] } = {
  kovan: [
    ZERO_ADDRESS, // ETH
    "0xb597cd8d3217ea6477232f9217fa70837ff667af", // AAVE,
    "0x2d12186Fbb9f9a8C28B3FfdD4c42920f8539D738", // BAT,
    "0x4c6E1EFC12FDfD568186b7BAEc0A43fFfb4bCcCf", // BUSD,
    "0xFf795577d9AC8bD7D90Ee22b6C1703490b6512FD", // DAI,
    "0xC64f90Cd7B564D3ab580eb20a102A8238E218be2", // ENJ,
    "0x3F80c39c0b96A0945f9F0E9f55d8A8891c5671A8", // KNC,
    "0xAD5ce863aE3E4E9394Ab43d4ba0D80f419F61789", // LINK,
    "0x738Dc6380157429e957d223e6333Dc385c85Fec7", // MANA,
    "0x61e4CAE3DA7FD189e52a4879C7B8067D7C2Cc0FA", // MKR,
    "0x5eebf65A6746eed38042353Ba84c8e37eD58Ac6f", // REN,
    "0x260071C8D61DAf730758f8BD0d6370353956AE0E", // REP,
    "0x7FDb81B0b8a010dd4FFc57C3fecbf145BA8Bd947", // SNX,
    "0x99b267b9D96616f906D53c26dECf3C5672401282", // SUSD,
    "0x016750AC630F711882812f24Dba6c95b9D35856d", // TUSD,
    "0x075A36BA8846C6B6F53644fDd3bf17E5151789DC", // UNI,
    "0xe22da380ee6B445bb8273C81944ADEB6E8450422", // USDC,
    "0x13512979ADE267AB5100878E2e0f485B568328a4", // USDT,
    "0xD1B98B6607330172f1D991521145A22BCe793277", // WBTC,
    // "0xd0a1e359811322d97991e03f863a0c30c2cf029c", // WETH,
    "0xb7c325266ec274fEb1354021D27FA3E3379D840d", // YFI,
    "0xD0d76886cF8D952ca26177EB7CfDf83bad08C00C", // ZRX,
  ],
  mainnet: [
    ZERO_ADDRESS, // ETH
    "0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9", // AAVE,
    "0x0d8775f648430679a709e98d2b0cb6250d2887ef", // BAT,
    "0x4Fabb145d64652a948d72533023f6E7A623C7C53", // BUSD,
    "0x6B175474E89094C44Da98b954EedeAC495271d0F", // DAI,
    "0xF629cBd94d3791C9250152BD8dfBDF380E2a3B9c", // ENJ,
    "0xdd974D5C2e2928deA5F71b9825b8b646686BD200", // KNC,
    "0x514910771AF9Ca656af840dff83E8264EcF986CA", // LINK,
    "0x0F5D2fB29fb7d3CFeE444a200298f468908cC942", // MANA,
    "0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2", // MKR,
    "0x408e41876cCCDC0F92210600ef50372656052a38", // REN,
    "0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F", // SNX,
    "0x57Ab1ec28D129707052df4dF418D58a2D46d5f51", // SUSD,
    "0x0000000000085d4780B73119b644AE5ecd22b376", // TUSD,
    "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984", // UNI,
    "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48", // USDC,
    "0xdAC17F958D2ee523a2206206994597C13D831ec7", // USDT,
    "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599", // WBTC,
    // "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2", // WETH,
    "0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e", // YFI,
    "0xE41d2489571d322189246DaFA5ebDe1F4699F498", // ZRX,
  ],
}

export const aaveATokensByNetwork: { [network: string]: string[] } = {
  kovan: [
    "0x76c6D190639a946E894D4A480806EB1D18391E01", // AAVE
    "0xed031FdC13F3f67a775fb19c00c182C47ee511AF", // BAT
    "0x3339427d5861622fce62D5ca58E88f6d7caD6f61", // BUSD
    "0x6dDFD6364110E9580292D9eCC745F75deA7e72c8", // DAI
    "0xB24DB16C14465E7377e1aE9cf9B6a7334102042A", // ENJ
    "0x01ca219371C81BBA3155075CF6aB4033b1C237aa", // KNC
    "0x9246CF386f1D38b80C92245c1bA2A3d0a013ceE0", // LINK
    "0xec7648149030E49274a266084521A9c250c7eEAe", // MANA
    "0xa650A060cb8dB872c4B06F70b04EA9f83BcDA3D5", // MKR
    "0x463B87AF7CF88D5bA6e20A71a3457B8Ab84dE0a5", // REN
    "0xbd7c46C5274495C872f75641E69f4dd10c8d2082", // REP
    "0x918e8867964c373D33328561dCF1554D7CfeA6FA", // SNX
    "0x7C10bD739C8B638C48Ab7cF07dF9f61B69bE0f7C", // SUSD
    "0x125F82571328Ad835A7506bb4a02303f81ecd2eb", // TUSD
    "0x54DB4508e4043af82d21501d0643D63F5eB4d12C", // UNI
    "0x32A4f93ffbb63213fB8c57b0b0E8Ea09698F3741", // USDC
    "0x29a63BE19cC7e1e6bfbeDeC08961b4A3285579C8", // USDT
    "0x482BF64ccaF54e0842f720C9d9E97621524d53Ee", // WBTC
    "0xe2735Adf49D06fBC2C09D9c0CFfbA5EF5bA35649", // WETH
    "0xEB72Be02297D9f3F4F0728C4b3B0a0967C7a3117", // YFI
    "0x82c9fbAd0eD7ADCb01A52a27B08fc8ACc493E78d", // ZRX
  ],
  mainnet: [
    "0xFFC97d72E13E01096502Cb8Eb52dEe56f74DAD7B", // AAVE
    "0x05Ec93c0365baAeAbF7AefFb0972ea7ECdD39CF1", // BAT
    "0xA361718326c15715591c299427c62086F69923D9", // BUSD
    "0x028171bCA77440897B824Ca71D1c56caC55b68A3", // DAI
    "0xaC6Df26a590F08dcC95D5a4705ae8abbc88509Ef", // ENJ
    "0x39C6b3e42d6A679d7D776778Fe880BC9487C2EDA", // KNC
    "0xa06bC25B5805d5F8d82847D191Cb4Af5A3e873E0", // LINK
    "0xa685a61171bb30d4072B338c80Cb7b2c865c873E", // MANA
    "0xc713e5E149D5D0715DcD1c156a020976e7E56B88", // MKR
    "0xCC12AbE4ff81c9378D670De1b57F8e0Dd228D77a", // REN
    "0x35f6B052C598d933D69A4EEC4D04c73A191fE6c2", // SNX
    "0x6C5024Cd4F8A59110119C56f8933403A539555EB", // SUSD
    "0x101cc05f4A51C0319f570d5E146a8C625198e636", // TUSD
    "0xB9D7CB55f463405CDfBe4E90a6D2Df01C2B92BF1", // UNI
    "0xBcca60bB61934080951369a648Fb03DF4F96263C", // USDC
    "0x3Ed3B47Dd13EC9a98b44e6204A523E766B225811", // USDT
    "0x9ff58f4fFB29fA2266Ab25e75e2A8b3503311656", // WBTC
    "0x030bA81f1c18d280636F32af80b9AAd02Cf0854e", // WETH
    "0x5165d24277cD063F5ac44Efd447B27025e888f37", // YFI
    "0xDf7FF54aAcAcbFf42dfe29DD6144A69b629f8C9e", // ZRX
  ],
}