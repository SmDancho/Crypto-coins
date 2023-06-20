import { FC } from 'react'
import { Icoins } from 'shared/model/types/global'

export const PricesCard: FC<Icoins> = ({
  price,
  iconUrl,
  name,
  recommended,
  verified
}) => {
  return (
    <>
      <div className="flex justify-around text-base items-center text-[#002358]  border-2 rounded-lg w-full p-5 ">
        <div className="flex gap-2 items-center w-[130px]">
          <img
            className="w-[26px] h-[26px]"
            src={`${iconUrl}`}
            alt=""
          />
          <h3>{name}</h3>
        </div>
        <div>
          <div className="flex text-center justify-start gap-2 items-center w-[90px]">
            {recommended && (
              <div>
                <img
                  className="w-[26px] h-[26px]"
                  src="/check.png"
                  alt="Recomended"
                />
              </div>
            )}
          </div>
          <div>
            {verified && (
              <div>
                <img
                  className="w-[26px] h-[26px]"
                  src="/verified.png"
                  alt="verified"
                />
              </div>
            )}
          </div>
        </div>
        <div>{price.slice(0, 10)} $</div>
      </div>
    </>
  )
}
