import { FC } from 'react'
import { Exchanges } from '../model/types'

export const ExchangesCard: FC<Exchanges> = ({
  trust_score_rank,
  name,
  country,
  year_established,
  trust_score,
  image,
  url
}) => {
  return (
    <div
      className={`flex justify-around w-full text-base items-center text-[#002358] border-2 rounded-lg mt-5 `}
    >
      <div className="flex w-[300px] gap-5">
        <div>{trust_score_rank}</div>
        <a
          href={url}
          className="flex gap-2 cursor-pointer"
          target="__blank"
        >
          <div>
            <img
              src={`${image}`}
              alt={`${name}`}
              width={26}
              height={26}
            />
          </div>
          <div>{name}</div>
        </a>
      </div>
      <div className="w-[200px] text-center">{country}</div>
      <div className="w-[120px] text-center">{year_established}</div>
      <div className="w-[75px] text-center">{trust_score}</div>
    </div>
  )
}
