import { FC } from "react";
import { Icoins } from "../../../../types/data";

import { Link } from "react-router-dom";


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
        <div className="flex items-center text-[#002358] w-96">
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
        <div className="flex gap-10">
          <div>{price.slice(0, 8)}$</div>
          <div>{marketCap.slice(0, 8)} млрд</div>
          <div
            className={`${
              Number(change) < 0 ? "text-red-500" : "text-green-500"
            }`}
          >
            {change} %
          </div>
        </div>
        <Link to={'/Coins/compare'}>
          <button className="w-[200px] h-10 text-[14px] cursor-pointer" onClick={() => {window.localStorage.setItem('coinId' , `${uuid}`)}}>
            Compare prices
          </button>
        </Link>
      </div>
    </>
  );
};
