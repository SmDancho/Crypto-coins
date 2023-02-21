import { createElement, FC, useEffect, useState } from 'react'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { Layout } from 'antd'
import { Route, Routes } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../../app/store'
import { RootState } from '../../../../app/store'
import { CoinsCard } from '../../../../entities/mainCoinsCard/ui'
import { PricesComponent } from '../../../../widgets/comparePrice/export'
import { SideBar } from '../../../../widgets/sideBar/ui'
import { fetchCoinsData } from '../model/redux'

export const CoinsPage: FC = () => {
  const dispatch = useAppDispatch()

  const { coins } = useAppSelector((state: RootState) => state.coins)

  useEffect(() => {
    dispatch(fetchCoinsData())
  }, [])

  console.log(coins)

  const [collapsed, setCollapsed] = useState(false)

  const subNav = ['Markets']
  const subTitle = 'Navigate'

  const { Content } = Layout
  return (
    <>
      <Layout>
        <SideBar
          subNav={subNav}
          collapsed={collapsed}
          subTitle={subTitle}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Content className="p-[24px] m-auto ">
                <div>
                  {createElement(
                    collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                    {
                      className: 'trigger ',
                      onClick: () => setCollapsed(!collapsed)
                    }
                  )}
                </div>

                <div className="flex justify-center  mt-5 flex-col">
                  {coins.map((coins, index) => (
                    <CoinsCard
                      {...coins}
                      key={index}
                    />
                  ))}
                </div>
              </Content>
            }
          />
          <Route
            path="/compare"
            element={<PricesComponent />}
          />
          {/* <Route path="/Markets" element={<Markets/>}/> */}
        </Routes>
      </Layout>
    </>
  )
}
