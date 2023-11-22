import { allPosts } from '@/.contentlayer/generated'
import CardList from '@/components/Cards/CardList'
import FeaturesList from '@/components/Features/FeaturesList'
import Layout from '@/components/Layout'
import UsedBy from '@/components/UsedBy'
import featureItems from '@/utils/data/features.json'
import usedbyItems from '@/utils/data/usedby.json'

export default function HomePage() {
  const whatsnew = allPosts
    ?.map((post) => ({
      title: post.title || '',
      date: new Date(post.date),
      description: post.excerpt || '',
      href: post.url || '',
    }))
    .sort((a, b) => b.date.getTime() - a.date.getTime())
    .slice(0, 4)
  return (
    <Layout>
      <FeaturesList title='With Oskari you can...' data={featureItems} />
      <UsedBy title='Used by' data={usedbyItems} />
      <CardList data={whatsnew} title='What´s new' />
    </Layout>
  )
}
