import { FC } from "react";
import { newsType } from "../../../types/data";

export const NewsCard: FC<newsType> = ({
  title,
  description,
  urlToImage,
  url,
  author,
}) => {
  return (
    <div className="border-2 rounded-lg  flex max-w-[990px] max-[768px]:flex-col dark:bg-black ">
      <div className="max-w-[410px] max-[768px]:max-w-[100%]">
        <img src={`${urlToImage}`} alt="image" />
      </div>

      <div className="flex flex-col justify-between p-5">
        <div className="flex justify-between max-[768px]:flex-col ">
          <div className="title text-[#002358] ">{title}</div>
          <div> {author} </div>
        </div>
        <a className="descr mt-5 cursor-pointer" href={`${url}`} target="__blank">
          {description}
        </a>
      </div>
    </div>
  );
};
