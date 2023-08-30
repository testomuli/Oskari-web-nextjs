import { useEffect, useState } from 'react'

const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState({
    width: 0,
    height: 0,
  })

  const isSmall = windowDimensions.width < 1200
  const isLarge = windowDimensions.width >= 1200

  useEffect(() => {
    const getWindowDimensions = () => {
      const { innerWidth: width, innerHeight: height } = window
      return { width, height }
    }

    const handleResize = () => setWindowDimensions(getWindowDimensions())
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return {
    height: windowDimensions.height,
    width: windowDimensions.width,
    isSmall,
    isLarge,
  }
}

export default useWindowDimensions
