import { FC } from "react";
import { Icoins } from "../../../types/data";


export const CoinsCard:FC<Icoins> = ({rank,price,name,symbol,change,marketCap,iconUrl}) => {
  return (
    <>
      <div
        className={`flex justify-around w-full text-base items-center text-[#002358] border-2 rounded-lg mt-5` }
      >
        <div className="flex items-center text-[#002358] w-96">
          <div className="rank">{rank}</div>
          <img className="ml-10" src={`${iconUrl}`} alt="coin" width={25} height={25} />
          <div className="flex-col ml-10 ">
            <div className="font-bold">{name}</div>
            <div className="shortname">{symbol}</div>
          </div>
        </div>
        <div className="flex gap-10">
          <div>{price.slice(0,8 )}$</div>
          <div>{marketCap.slice(0,8 )} млрд</div>
          <div>{change} %</div>
        </div>
      </div>
    </>
  );
};
