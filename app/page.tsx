import CardList from '@/components/Cards/CardList'
import FeaturesList from '@/components/Features/FeaturesList'
import Layout from '@/components/Layout'
import UsedBy from '@/components/UsedBy'
import featureItems from '@/utils/data/features.json'
import usedbyItems from '@/utils/data/usedby.json'
import whatsnew from '@/utils/data/whatsnew.json'

export default function HomePage() {
  return (
    <Layout>
      <FeaturesList title='With Oskari you can...' data={featureItems} />
      <UsedBy title='Used by' data={usedbyItems} />
      <CardList data={whatsnew} title='What´s new' />
    </Layout>
  )
}
