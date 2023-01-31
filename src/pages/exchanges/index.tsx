import { useState, FC, useEffect, createElement } from "react";

import { useAppDispatch, useAppSelector } from "../../redux/store";
import { fetchExchangesData } from "../../redux/getExchangesData";

import { Layout } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

import { SideBar } from "../../components/sideBar";
import { ExchangesCard } from "../../components/cards/exchaingCard";



export const Exchanges: FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  const subNav = ["List"];
  const subTitle = "Navigate";
  const { Content } = Layout;

  const dispatch = useAppDispatch();
  const { exchanges } = useAppSelector((state) => state.exchanges);

  useEffect(() => {
    dispatch(fetchExchangesData());
  }, []);

  return (
    <Layout>
      <SideBar subNav={subNav} collapsed={collapsed} subTitle={subTitle} />
      <Content className="p-[24px] m-auto ">
        <div>
          {createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: "trigger ",
            onClick: () => setCollapsed(!collapsed),
          })}
        </div>

        <div
          className={`flex justify-around text-base items-center text-[#002358] border-2 rounded-lg mt-5 `}
        >
          <div className="flex w-[300px] gap-10">
            <div>Rank</div>
            <div>name</div>
          </div>
          <div className="w-[200px] text-center">country</div>
          <div>year of established</div>
          <div className="w-[75px]">trust score</div>
        </div>
        
        <div>
          {exchanges.map((items, index) => (
            <ExchangesCard key={index} {...items} />
          ))}
        </div>
      </Content>
    </Layout>
  );
};
