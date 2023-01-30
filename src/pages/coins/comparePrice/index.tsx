import { useState, createElement, FC, useEffect } from "react";

import { SideBar } from "../../../components/sideBar";

import { Layout } from "antd";

import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { coinsPriceComapareData } from "../../../redux/getCoinsData";
import { RootState } from "../../../redux/store";

import { PricesCard } from "../../../components/cards/coinsCard/pricesCard";

import { Routes, Route } from "react-router-dom";

export const Prices: FC = () => {
  const dispatch = useAppDispatch();
  const CurrentcoinId = window.localStorage.getItem("coinId");

  useEffect(() => {
    dispatch(coinsPriceComapareData(CurrentcoinId));
  }, []);
  const { compare } = useAppSelector((state: RootState) => state.coins);

  console.log(compare);

  const { Content } = Layout;
  return (
    <>
      <Layout>
        <Content className="p-5">
          <div className="flex justify-around"> 
            <div>BTC</div>
            <div className="w-[90px]">Recomended</div>
            <div>Price in USD</div>
           
          </div>

          <div className="mt-5 flex flex-col flex-wrap  m-auto gap-5">
            {compare.map((exchanges, index) => (
              <PricesCard key ={index} {...exchanges}/>
            ))}
          </div>
        </Content>
      </Layout>
    </>
  );
};
