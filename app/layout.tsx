import '../styles/main.scss'
import type { Metadata } from 'next'
import { League_Spartan, Maven_Pro } from 'next/font/google'

const leagueSpartan = League_Spartan({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-league-spartan',
  display: 'swap',
})

const mavenPro = Maven_Pro({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-maven-pro',
  display: 'swap',
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
      <body className={`${mavenPro.className} ${leagueSpartan.className}`}>
        {children}
      </body>
    </html>
  )
}
