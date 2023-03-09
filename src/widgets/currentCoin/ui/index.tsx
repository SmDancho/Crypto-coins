/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react'
import { Layout } from 'antd'
import { useAppDispatch, useAppSelector } from 'app/store'
import { RootState } from 'app/store'
import { Icoins } from 'shared/model/types/global'
import { currentCoinInfo } from '../model/api'

export const CurrentCoin = () => {
  const dispatch = useAppDispatch()
  const { Content } = Layout
  const currentID = sessionStorage.getItem('currentID') as string
  const data = useAppSelector((state: RootState) => state.currentCoin)

  useEffect(() => {
    dispatch(currentCoinInfo(currentID))
  }, [])


  return (
    <Layout>
      <Content className="p-5">
        <div className="  border-2 rounded-lg p-5">
          <div className="z-1 relative flex items-center gap-5">
            <img
              className="border-gray-900 "
              width={40}
              height={40}
              src={data.coin?.iconUrl}
              alt={data.coin?.name}
            />
            <div>
              <div className="font-bold text-base text-[#002358]">
                {data.coin?.name}
              </div>
              <div className={`text-[${data.coin?.color}] `}>
                {data.coin?.symbol}
              </div>
            </div>

            <div className="font-bold text-base text-[#002358]">
              {Number(data.coin?.price) > 1
                ? Math.round(Number(data.coin?.price))
                : data.coin?.price.slice(0, 5)} $
            </div>
            <div className="font-bold text-base text-[#002358] border-2 rounded-lg">
              #{data.coin?.rank}
            </div>
          </div>
        </div>
      </Content>
    </Layout>
  )
}
