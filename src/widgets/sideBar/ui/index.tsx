import { createElement, FC } from 'react'
import { BarChartOutlined } from '@ant-design/icons'
import { Layout, Menu } from 'antd'
import { useNavigate } from 'react-router-dom'
import type { propsSideBar } from '../model/types/propsType'
import type { MenuProps } from 'antd'

export const SideBar: FC<propsSideBar> = ({ collapsed, subNav, subTitle }) => {
  const navigate = useNavigate()
  const { Sider } = Layout

  const items2: MenuProps['items'] = [BarChartOutlined].map((icon, index) => {
    const key = subTitle

    return {
      key: `${key}`,
      icon: createElement(icon),
      label: `${key}`,
      children: subNav.map((item) => {
        const subKey = item
        return {
          key: subKey,
          label: `${subKey}`
        }
      })
    }
  })

  return (
    <Sider collapsed={collapsed}>
      <Menu
        onClick={(e) => {
          navigate(e.key)
        }}
        mode="inline"
        theme="dark"
        style={{ height: '100%', borderRight: 0 }}
        items={items2}
      />
    </Sider>
  )
}
