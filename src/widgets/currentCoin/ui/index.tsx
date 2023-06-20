/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react'
import { Layout } from 'antd'
import { Select, Space } from 'antd'
import { useAppDispatch, useAppSelector } from 'app/store'
import {
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import { useParams } from 'react-router-dom'
import { Spinner } from 'shared'
import { currentCoinInfo } from '../model/api'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
)

export const CurrentCoin = () => {
  const dispatch = useAppDispatch()
  const [timeStempt, setTimeStempt] = useState<string>()
  const { id } = useParams()
  const { Content } = Layout
  const { coin, isLoading } = useAppSelector((state) => state.currentCoin)

  const handleChangeSelectedValue = (value: string) => {
    setTimeStempt(value)
  }

  const labels = coin?.sparkline.map((_, index) => index + 1)
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: true,
        text: `${coin?.name}'s Price`
      }
    }
  }

  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: 'Price',
        data: coin?.sparkline.map((item) => item),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)'
      }
    ]
  }
  useEffect(() => {
    dispatch(
      currentCoinInfo({
        coinId: id as string,
        timePeriod: timeStempt as string
      })
    )
  }, [id, timeStempt])
  const symbolColor = coin?.color
  if (isLoading) {
    return <Spinner />
  }

  return (
    <Layout>
      <Content className="p-5 h-[100vh]">
        <div className="p-5">
          <div className="z-1 relative flex items-center gap-5">
            <img
              width={40}
              height={40}
              src={coin?.iconUrl}
              alt={coin?.name}
            />
            <div>
              <div className="font-bold text-base text-[#002358]">
                {coin?.name}
              </div>
              <div className={`text-[${symbolColor as string}] `}>
                {coin?.symbol}
              </div>
            </div>

            <div className="font-bold text-base text-[#002358]">
              {Number(coin?.price) > 1
                ? Math.round(Number(coin?.price))
                : coin?.price.slice(0, 5)}{' '}
              $
            </div>
            <div className="font-bold text-base text-[#002358] border-2 rounded-lg">
              #{coin?.rank}
            </div>
            <Space wrap>
              <Select
                defaultValue="24h"
                style={{ width: 120 }}
                onChange={handleChangeSelectedValue}
                options={[
                  { value: '24h', label: '24h' },
                  { value: '7d', label: '7d' },
                  { value: '30d', label: '30d' }
                ]}
              />
            </Space>
          </div>
        </div>
        <div className="max-w-[80%] max-h-[80%]  ">
          <Line
            options={options}
            data={data}
          />
        </div>
      </Content>
    </Layout>
  )
}
