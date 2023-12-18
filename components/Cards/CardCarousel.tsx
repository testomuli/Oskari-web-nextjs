'use client'

import Slider from 'react-slick'
import styles from '@/styles/cardcarousel.module.scss'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
} from '@heroicons/react/24/solid'

type CardCarouselProps = {
  items: Array<React.ReactNode>
  title?: string
}

function SampleNextArrow({
  className: slickClass,
  onClick,
}: {
  className: string
  onClick: () => void
}) {
  return (
    <ArrowRightCircleIcon
      className={`${slickClass} !h-8 !w-8 fill-black text-black z-50`}
      onClick={onClick}
    />
  )
}

function SamplePrevArrow({
  className: slickClass,
  onClick,
}: {
  className: string
  onClick: () => void
}) {
  return (
    <ArrowLeftCircleIcon
      className={`${slickClass} !h-8 !w-8 fill-black text-black z-50`}
      onClick={onClick}
    />
  )
}

export default function CardCarousel({ items, title }: CardCarouselProps) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    // @ts-expect-error Slick carousel caused unrelative error
    nextArrow: <SampleNextArrow />,
    // @ts-expect-error Slick carousel caused unrelative error
    prevArrow: <SamplePrevArrow />,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          centerMode: true,
          className: 'center',
          centerPadding: '16px',
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          centerMode: true,
          className: 'center',
          centerPadding: '16px',
        },
      },
    ],
  }

  return (
    <div className={`${styles.cardCarousel} container--content`}>
      {title && <h2>{title}</h2>}
      <Slider {...settings}>
        {items.map((item, index) => (
          <div key={index}>
            <div className={styles.cardCarousel__item}>{item}</div>
          </div>
        ))}
      </Slider>
    </div>
  )
}
