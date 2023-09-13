'use client'

import React from 'react'
import Slider from 'react-slick'
import styles from '@/styles/cardcarousel.module.scss'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

type CardCarouselProps = {
  items: Array<React.ReactNode>
  title?: string
}
export default function CardCarousel({ items, title }: CardCarouselProps) {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          centerMode: true,
          className: 'center',
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
