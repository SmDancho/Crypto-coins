import { Layout } from 'antd'
import { FC, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from 'app/store'
import { PricesCard } from 'entities/pricesCard/export'
import { Spinner } from 'shared'
import { coinsPriceComapareData } from '../model'

export const Prices: FC = () => {
  const { id } = useParams()
  const dispatch = useAppDispatch()
  const { Content } = Layout
  const { compare, isLoading } = useAppSelector(
    (state) => state.compareCionsPrice
  )

  useEffect(() => {
    dispatch(coinsPriceComapareData(id as string))
  }, [id])

  if (isLoading) {
    return <Spinner />
  }
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
