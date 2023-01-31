

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
    recommended:boolean
    verified:boolean

}

export interface newsType {
    author: string,
    title:string,
    description:string,
    url:string
    urlToImage:string
    content:string
}

export interface Exchanges {
    country:string
    image:string
    name:string
    trust_score:number
    trust_score_rank:number
    year_established:number
    url:string
}
