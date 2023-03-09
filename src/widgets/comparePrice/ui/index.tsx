import { FC, useEffect } from 'react'
import { Layout } from 'antd'
import { useAppDispatch, useAppSelector } from 'app/store'
import { RootState } from 'app/store'
import { PricesCard } from 'entities/pricesCard/export'
import { coinsPriceComapareData } from '../model/redux'



export const Prices: FC = () => {
  const CurrentcoinId = window.sessionStorage.getItem('coinId') as string
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(coinsPriceComapareData(CurrentcoinId))
  }, [])

  const { compare } = useAppSelector((state: RootState) => state.compareCionsPrice)

  const { Content } = Layout
  return (
    <>
      <Layout>
        <Content className="p-5">
          <div className="flex justify-around">
            <div>BTC</div>
            <div className="w-[90px]">Recomended</div>
            <div>Price in USD</div>
          </div>

          <div className="mt-5 flex flex-col flex-wrap  m-auto gap-5">
            {compare.map((exchanges, index) => (
              <PricesCard
                key={index}
                {...exchanges}
              />
            ))}
          </div>
        </Content>
      </Layout>
    </>
  )
}
