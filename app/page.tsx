import FeaturesList from '@/components/Features/FeaturesList'
import Hero from '@/components/Hero'
import Navigation from '@/components/Navigation/Navigation'
import UsedBy from '@/components/UsedBy'
import featureItems from '@/utils/data/features.json'
import usedbyItems from '@/utils/data/usedby.json'

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <main>
        <FeaturesList title='With Oskari you can...' data={featureItems} />
        <UsedBy title='Used by' data={usedbyItems} />
      </main>
    </>
  )
}
