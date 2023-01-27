import { FC, createElement } from "react";

import { Layout, Menu, theme } from "antd";

import { Link } from "react-router-dom";

import type { MenuProps } from "antd";

import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
  BarChartOutlined,
} from "@ant-design/icons";

interface propsSideBar {
  collapsed: boolean;
}

export const SideBar: FC<propsSideBar> = ({ collapsed }) => {
  const { Sider } = Layout;

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const items2: MenuProps["items"] = [BarChartOutlined].map((icon, index) => {
    const key = String(index + 1);

    return {
      key: `sub${key}`,
      icon: createElement(icon),
      label: `subnav ${key}`,

      children: new Array(4).fill(null).map((_, j) => {
        const subKey = index * 4 + j + 1;
        return {
          key: subKey,
          label: `option${subKey}`,
        };
      }),
    };
  });

  return (

      <Sider style={{ background: colorBgContainer }} collapsed={collapsed}>
        <Menu
          mode="inline"
          theme="dark"
          style={{ height: "100%", borderRight: 0 }}
          items={items2}
        />
      </Sider>
  
  );
};
