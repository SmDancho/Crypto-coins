import { createElement, useEffect, useState } from 'react'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { Layout } from 'antd'
import { ExchangesCard } from 'entities/exchaingCard/export'
import { fetchExchangesData } from '../model/redux'
import { useAppDispatch, useAppSelector } from 'app/store'
import { SideBar } from 'widgets/sideBar/ui'
import {Spinner} from 'shared'

export const Exchanges = () => {
  const [collapsed, setCollapsed] = useState(false)
  const [limit, setLimit] = useState(20)

  const { Content } = Layout

  const subNav = ['List']
  const subTitle = 'Navigate'

  const dispatch = useAppDispatch()
  const { exchanges , isLoading} = useAppSelector((state) => state.exchanges)

  useEffect(() => {
    dispatch(fetchExchangesData(limit.toString()))
  }, [])

  if (isLoading) {
    return <Spinner/>
  }
  
  return (
    <Layout>
      <SideBar
        subNav={subNav}
        collapsed={collapsed}
        subTitle={subTitle}
      />
      <Content className="p-[24px] m-auto">
        <div>
          {createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger ',
            onClick: () => setCollapsed(!collapsed)
          })}
        </div>

        <div className="flex justify-around text-base items-center text-[#002358] border-2 rounded-lg mt-5  ">
          <div className="flex w-[300px] gap-10 ">
            <div>Rank</div>
            <div>name</div>
          </div>
          <div className="w-[200px] text-center">country</div>
          <div>year of established</div>
          <div className="w-[75px]">trust score</div>
        </div>

        <div>
          {exchanges.map((items, index) => (
            <ExchangesCard
              key={index}
              {...items}
            />
          ))}
        </div>

        <div className="w-full flex justify-center ">
          <button
            className="border-2 rounded-lg text-[#002358] text-base p-2 mt-5 hover:bg-slate-300 transition-all duration-300 delay-75 active:bg-slate-600"
            onClick={() => {
              setLimit((prev) => prev + 20)
            }}
          >
            Load more
          </button>
        </div>
      </Content>
    </Layout>
  )
}
