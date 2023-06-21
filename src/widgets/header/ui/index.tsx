import { Layout, Menu } from "antd";
import { FC, } from "react";


import { useNavigate } from "react-router-dom";

export  const HeaderComponent: FC = () => {
  const navigate = useNavigate();
  const { Header } = Layout;

  const navElement = ["Coins", "Exchanges"]; //add name of page to add link

  return (
    <Layout className="layout ">
      <Header className="header flex ">
        <a href="/">
          <img
            className="logo"
            width={80}
            height={80}
            src="/logo.svg"
            alt="logotype"
          />
        </a>
        <Menu
          onClick={(e) => {
            navigate(e.key);
          }}
          theme="dark"
          mode="horizontal"
          items={navElement.map((item) => {
            const key = item;

            return {
              key,
              label: `${key}`,
            };
          })}
        />
        ;
      </Header>
    </Layout>
  );
};
