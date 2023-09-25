import DefaultLayout from '@/components/Layout'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <DefaultLayout heroSmall heroTitle='Documentation'>
      <div className='container'>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 4fr',
            gap: '2.5rem',
          }}
        >
          {children}
        </div>
      </div>
    </DefaultLayout>
  )
}
