'use client'

import React from 'react'
import Button from '@/components/Button'
import styles from '@/styles/cardcarousel.module.scss'
/*
1. Create a carousel that displays the items passed in as props
2. The carousel should display three items at a time or props
3. The carousel should have a button to go to the next three items
4. The carousel should have a button to go to the previous three items
*/

type CardCarouselProps = {
  items: Array<React.ReactNode>
}
export default function CardCarousel({ items }: CardCarouselProps) {
  const [activeItem, setActiveItem] = React.useState(0)

  const ITEMS_LENGTH = items.length
  const ITEMS_TO_SHOW = 3

  const handleNext = () => {
    if (activeItem + ITEMS_TO_SHOW < ITEMS_LENGTH) {
      setActiveItem((prev) => prev + ITEMS_TO_SHOW)
    }
    if (activeItem + ITEMS_TO_SHOW >= ITEMS_LENGTH) {
      setActiveItem(ITEMS_LENGTH)
    }
  }

  const handlePrev = () => {
    if (activeItem - ITEMS_TO_SHOW >= 0) {
      setActiveItem((prev) => prev - ITEMS_TO_SHOW)
    }
    if (activeItem - ITEMS_TO_SHOW < 0) {
      setActiveItem(0)
    }
  }

  return (
    <div className={styles.cardCarousel}>
      <div className={styles.cardCarousel__container}>
        <Button
          handleClick={handlePrev}
          // disabled={activeItem === 0}
          title='<'
        />
        {items.map((item, index) => (
          <div key={index} className={styles.cardCarousel__item}>
            {item}
          </div>
        ))}
        <Button
          handleClick={handleNext}
          // disabled={activeItem + ITEMS_TO_SHOW >= ITEMS_LENGTH}
          title='>'
        />
      </div>
    </div>
  )
}
