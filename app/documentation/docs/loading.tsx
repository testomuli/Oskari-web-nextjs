import VersionSidebar from '@/components/VersionSidebar'

export default function Loading() {
  return (
    <>
      <div>
        <VersionSidebar selectedVersion='loading...' baseHref='' />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', marginTop: 27 }}>
        <div className='skeleton skeleton-text skeleton-text__document-card'></div>
        <div className='skeleton skeleton-text skeleton-text__document-card'></div>
        <div className='skeleton skeleton-text skeleton-text__document-card'></div>
      </div>
    </>
  )
}
