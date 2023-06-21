import { FC } from 'react'
import { Link } from 'react-router-dom'
import { Icoins } from 'shared'

export const CoinsCard: FC<Icoins> = ({
  rank,
  price,
  name,
  symbol,
  change,
  marketCap,
  iconUrl,
  uuid
}) => {
  return (
    <>
      <div
        className={`flex justify-around w-full text-base items-center text-[#002358] border-2 rounded-lg mt-5`}
      >
        <Link to={`/Coins/coin/${uuid}`}>
          <div
            role="button"
            className="flex items-center text-[#002358] w-96"
            tabIndex={0}
          >
            <div className="rank">{rank}</div>
            <img
              className="ml-10"
              src={`${iconUrl}`}
              alt="coin"
              width={25}
              height={25}
            />
            <div className="flex-col ml-10 ">
              <div className="font-bold">{name}</div>
              <div className="shortname ">{symbol}</div>
            </div>
          </div>
        </Link>
        <div className="flex gap-10">
          <div>{price.slice(0, 8)}$</div>
          <div>{marketCap.slice(0, 8)} млрд</div>
          <div
            className={`${
              Number(change) < 0 ? 'text-red-500' : 'text-green-500'
            }`}
          >
            {change} %
          </div>
        </div>
        <Link to={`/Coins/compare/${uuid}`}>
          <button className="w-[200px] h-10 text-[14px] cursor-pointer">
            Compare prices
          </button>
        </Link>
      </div>
    </>
  )
}
