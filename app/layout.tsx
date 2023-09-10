import '../styles/main.scss'
import type { Metadata } from 'next'
import { leagueSpartan, mavenPro } from '@/utils/fonts'

export const metadata: Metadata = {
  title: {
    template: '%s - Oskari Map Application Platform',
    default: 'Oskari Map Application Platform',
  },
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
