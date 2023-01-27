import { fetchNews } from "../../redux/getNews";
import { useAppDispatch, useAppSelector } from "../../redux/store";

import { useEffect } from "react";

import { RootState } from "../../redux/store";

import { Layout, ConfigProvider } from "antd";

import { Content } from "antd/es/layout/layout";

import { NewsCard } from "../../components/cards/newsCard";
import { Carousel } from "../../components/slider";

export const Home = () => {
  const dispatch = useAppDispatch();
  const { Latestnews } = useAppSelector((state: RootState) => state.news);

  useEffect(() => {
    dispatch(fetchNews());
  }, []);

  return (
    <>
      <Layout className=" dark:bg-black ">
        <Content className="m-auto">
          <div className=" max-w-[1320px] h-96 mt-5 ">
            <Carousel />
          </div>
          <h1 className="text-[#002358] font-bold text-2xl  pl-5 mt-5 text-left ">
            Latest news
          </h1>

          <div className="grid grid-cols-1 justify-center items-center mt-5 flex-wrap gap-5 max-w-[1320px] p-5">
            {Latestnews.map((news, index) => (
              <NewsCard key={index} {...news} />
            ))}
          </div>
        </Content>
      </Layout>
    </>
  );
};
