import { useState, createElement, FC, useEffect } from "react";

import { SideBar } from "../../components/sideBar";

import { Layout, theme } from "antd";

import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

import { useAppDispatch, useAppSelector } from "../../redux/store";
import { fetchCoinsData } from "../../redux/getCoinsData";
import { RootState } from "../../redux/store";

import { CoinsCard } from "../../components/cards/coinsCard";

export const CoinsPage: FC = () => {
  const dispatch = useAppDispatch();

  const { coins } = useAppSelector((state: RootState) => state.coins);

  console.log(coins);

  useEffect(() => {
    dispatch(fetchCoinsData());
  }, []);

  const [collapsed, setCollapsed] = useState(false);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const { Content } = Layout;
  return (
    <>
      <Layout>
        <SideBar collapsed={collapsed} />
        <Content
          style={{
            padding: 24,
            background: colorBgContainer,
          }}
        >
          <div>
            {createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: "trigger ",
              onClick: () => setCollapsed(!collapsed),
            })}
          </div>

          <div className="flex justify-center  mt-5 flex-col">
            {coins.map((coins, index) => (
              <CoinsCard {...coins} key={index} />
            ))}
          </div>
        </Content>
      </Layout>
    </>
  );
};
