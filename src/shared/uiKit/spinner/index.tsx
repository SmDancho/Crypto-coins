import { LoadingOutlined } from '@ant-design/icons'
import { Spin } from 'antd'
import { FC } from 'react'

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
