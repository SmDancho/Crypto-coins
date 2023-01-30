import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import { fetchSliderNews } from "../../redux/getNews";
import { useAppDispatch, useAppSelector } from "../../redux/store";

import { useEffect } from "react";

import { RootState } from "../../redux/store";

import { NewsSliderCard } from "../cards/newsSliderCard";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export const Carousel = () => {
  const dispatch = useAppDispatch();
  const { SliderhNews } = useAppSelector((state: RootState) => state.news);



  useEffect(() => {
    dispatch(fetchSliderNews());
  }, []);
  return (
    <Swiper
      modules={[Pagination, Navigation]}
      pagination={{
        type: "progressbar",
      }}
      navigation={true}
      className="mySwiper "
    >
      {SliderhNews.map((news,inedex) => (
        <SwiperSlide key = {inedex}>
          <NewsSliderCard  {...news}/>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
