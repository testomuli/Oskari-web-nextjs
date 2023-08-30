import FeaturesList from '@/components/Features/FeaturesList'
import Hero from '@/components/Hero'
import Navigation from '@/components/Navigation/Navigation'
import featureItems from '@/utils/data/features.json'

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <main>
        <FeaturesList data={featureItems} title='With Oskari you can...' />
      </main>
    </>
  )
}
