import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'app/store'
import { RootState } from 'app/store'
import { NewsSliderCard } from 'entities/newsSliderCard/export'
import { fetchSliderNews } from 'pages/home/model/redux'
import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

export const Carousel = () => {
  const dispatch = useAppDispatch()
  const { SliderhNews } = useAppSelector((state: RootState) => state.news)

  useEffect(() => {
    dispatch(fetchSliderNews())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <Swiper
      modules={[Pagination, Navigation]}
      pagination={{
        type: 'progressbar'
      }}
      navigation={true}
      className="mySwiper "
    >
      {SliderhNews.map((news, inedex) => (
        <SwiperSlide key={inedex}>
          <NewsSliderCard {...news} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
