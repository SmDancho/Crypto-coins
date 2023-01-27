import { FC,} from "react";

import {  Layout, Menu, } from "antd";

import { Link } from "react-router-dom";

export const HeaderComponent: FC = () => {

  const { Header} = Layout;

  const navElement = ["Coins", "Exchaing"];

  return (
    <Layout className="layout">
      <Header className="header">
  
        <Link to="/">
          <img
            className="logo"
            width={80}
            height={80}
            src="/logo.svg"
            alt="logotype"
          />
        </Link>

        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          items={navElement.map((item, index) => {
            <Link to={item}></Link>;
            const key = item;
            return {
              key,
              label: `${key}`,
            };
          })}
        />
      </Header>


    </Layout>
  );
};
