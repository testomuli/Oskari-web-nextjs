import '../styles/main.scss'
import type { Metadata } from 'next'
import { League_Spartan, Maven_Pro } from 'next/font/google'

const leagueSpartan = League_Spartan({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-primary',
  display: 'swap',
  fallback: ['sans-serif'],
})

const mavenPro = Maven_Pro({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-secondary',
  display: 'swap',
  fallback: ['sans-serif'],
})

export const metadata: Metadata = {
  title: 'Oskari Map Application Platform',
  description:
    'Oskari is a framework for easily building multipurpose web mapping applications utilizing distributed Spatial Data Infrastructures like INSPIRE.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={`${mavenPro.variable} ${leagueSpartan.variable}`}>
        {children}
      </body>
    </html>
  )
}
