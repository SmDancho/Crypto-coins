import { FC } from 'react'
import { newsSliderTypes } from '../model/types'

export const NewsSliderCard: FC<newsSliderTypes> = ({
  title,
  description,
  urlToImage,
  url
}) => {
  return (
    <div className="  flex max-w-[1200px] max-h-[100%]  ">
      <div className="flex flex-col justify-between items-start p-5">
        <div className="flex justify-between max-[768px]:flex-col ">
          <div className="title text-[#002358] ">{title}</div>
        </div>
        <a
          className="descr mt-5 cursor-pointer text-left"
          href={`${url}`}
          target="__blank"
        >
          {description}
        </a>
      </div>

      <div className="max-w-[100%] max-[768px]:max-w-[100%]">
        <img
          className=""
          src={`${urlToImage}`}
          alt={`${description}`}
        />
      </div>
    </div>
  )
}
