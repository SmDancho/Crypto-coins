import { FC } from 'react'
import { LoadingOutlined } from '@ant-design/icons'
import { Spin } from 'antd'

const loadSpinner = (
  <LoadingOutlined
    style={{ fontSize: 24 }}
    spin
  />
)

export const Spinner: FC = () => {
  return (
    <div className="flex h-[100vh] w-[100%] justify-center items-center">
      <div>
        <Spin indicator={loadSpinner} />
      </div>
    </div>
  )
}
