
export interface Icoins {

    btcPrice: String
    change: String
    coinrankingUrl: String
    color: String
    iconUrl: String
    listedAt: Number
    lowVolume: boolean
    marketCap: String
    name: String
    price: string
    rank: number
    sparkline: Array<String>
    symbol: String
    tier: number
    uuid: String

}

export interface newsType {
    author: string,
    title:string,
    description:string,
    url:string
    urlToImage:string
    content:string
}
