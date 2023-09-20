import DefaultLayout from '@/components/Layout'
import VersionSidebar from '@/components/VersionSidebar'

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
          <VersionSidebar selectedVersion={'selectedVersion'} />
          <article>{children}</article>
        </div>
      </div>
    </DefaultLayout>
  )
}
