export interface Icoins {
  btcPrice: string
  change: string
  coinrankingUrl: string
  color: string
  iconUrl: string
  listedAt: number
  lowVolume: boolean
  marketCap: string
  name: string
  price: string
  rank: number
  sparkline: Array<string>
  symbol: string
  tier: number
  uuid: string
  recommended: boolean
  verified: boolean
}

export interface IcurrentCoin extends Icoins {
  data: any[]
}
