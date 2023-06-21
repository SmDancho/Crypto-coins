import { Layout } from 'antd'
import { Content } from 'antd/es/layout/layout'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'app/store'
import { RootState } from 'app/store'
import { CarouselNews } from 'widgets/carousel'
import { NewsCard } from 'entities/newsCard/export'
import { fetchNews, fetchSliderNews } from '../model'

export const Home = () => {
  const dispatch = useAppDispatch()
  const { Latestnews, SliderhNews } = useAppSelector(
    (state: RootState) => state.news
  )

  console.log(SliderhNews)
  useEffect(() => {
    dispatch(fetchNews())
    dispatch(fetchSliderNews())
  }, [])
  return (
    <>
      <Layout className=" dark:bg-black ">
        <Content className="m-auto">
          <div className=" max-w-[1320px] h-96 mt-5 ">
            <CarouselNews news = {SliderhNews}/>
          </div>
          <h1 className="text-[#002358] font-bold text-2xl  pl-5 mt-5 text-left ">
            Latest news
          </h1>

          <div className="grid grid-cols-1 justify-center items-center mt-5 flex-wrap gap-5 max-w-[1320px] p-5">
            {Latestnews.map((news, index) => (
              <NewsCard
                key={index}
                {...news}
              />
            ))}
          </div>
        </Content>
      </Layout>
    </>
  )
}
