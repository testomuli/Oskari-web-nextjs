import CardList from '@/components/Cards/CardList'
import FeaturesList from '@/components/Features/FeaturesList'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Layout from '@/components/Layout'
import Navigation from '@/components/Navigation/Navigation'
import UsedBy from '@/components/UsedBy'
import featureItems from '@/utils/data/features.json'
import usedbyItems from '@/utils/data/usedby.json'
import whatsnew from '@/utils/data/whatsnew.json'

export default function Home() {
  return (
    <Layout>
      <FeaturesList title='With Oskari you can...' data={featureItems} />
      <UsedBy title='Used by' data={usedbyItems} />
      <CardList data={whatsnew} title='What´s new' />
    </Layout>
  )
}
