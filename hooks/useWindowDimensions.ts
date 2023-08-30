'use client'
import { useEffect, useState } from 'react'

const getWindowDimensions = () => {
  if (!window) return { width: null, height: null }
  const { innerWidth: width, innerHeight: height } = window
  return { width, height }
}

const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  )

  useEffect(() => {
    const handleResize = () => setWindowDimensions(getWindowDimensions())
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowDimensions
}

export default useWindowDimensions
