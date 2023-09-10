import { League_Spartan, Maven_Pro } from 'next/font/google'

export const leagueSpartan = League_Spartan({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-primary',
  display: 'swap',
  fallback: ['sans-serif'],
})

export const mavenPro = Maven_Pro({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-secondary',
  display: 'swap',
  fallback: ['sans-serif'],
})
