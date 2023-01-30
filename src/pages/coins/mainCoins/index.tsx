import { useState, createElement, FC, useEffect } from "react";

import { SideBar } from "../../../components/sideBar";

import { Layout } from "antd";

import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { fetchCoinsData } from "../../../redux/getCoinsData";
import { RootState } from "../../../redux/store";

import { CoinsCard } from "../../../components/cards/coinsCard";
import { Prices } from "../comparePrice";


import { Routes, Route } from "react-router-dom";

export const CoinsPage: FC = () => {
  const dispatch = useAppDispatch();

  const { coins } = useAppSelector((state: RootState) => state.coins);

  useEffect(() => {
    dispatch(fetchCoinsData());
  }, []);

  const [collapsed, setCollapsed] = useState(false);

  const subNav = ["Markets"];
  const subTitle = "Navigate";

  const { Content } = Layout;
  return (
    <>
      <Layout>
        <SideBar subNav={subNav} collapsed={collapsed} subTitle={subTitle} />
        <Routes>
          <Route
            path="/"
            element={
              <Content className="p-[24px] m-auto ">
                <div>
                  {createElement(
                    collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                    {
                      className: "trigger ",
                      onClick: () => setCollapsed(!collapsed),
                    }
                  )}
                </div>

                <div className="flex justify-center  mt-5 flex-col">
                  {coins.map((coins, index) => (
                    <CoinsCard {...coins} key={index} />
                  ))}
                </div>
              </Content>
            }
          />
          <Route path="/compare" element={<Prices/>}/> 
        </Routes>
      </Layout>
    </>
  );
};
