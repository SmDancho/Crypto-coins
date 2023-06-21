import { Carousel } from 'antd'
import { FC } from 'react'

interface newsType {
  author: string
  title: string
  description: string
  url: string
  urlToImage: string
  Content: string
}

interface CarouseProps {
  news: newsType[]
}

export const CarouselNews: FC<CarouseProps> = ({ news }) => {
  return (
    <Carousel effect="fade" autoplay>
      {news.map((item) => (
        <div>
          <div className="flex gap-2 h-[360px] bg-[#364d79] text-[#ffffff] p-2">
            {item.urlToImage && (
              <img
                src={`${item.urlToImage}`}
                alt={`${item.title}`}
              />
            )}

            <div className="flex flex-col justify-around text-xl">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  )
}
