import { allPosts } from '@/.contentlayer/generated'
import CardList from '@/components/Cards/CardList'
import FeaturesList from '@/components/Features/FeaturesList'
import Layout from '@/components/Layout'
import UsedBy from '@/components/UsedBy'
import featureItems from '@/utils/data/features.json'
import usedbyItems from '@/utils/data/usedby.json'
import { sortByDate } from '@/utils/misc'
import {
  compileMarkdownFilesInDirectory,
  generateAllDocsGroupedByVersion,
  readVersionDirs,
} from '@/lib/utils'

// compileMarkdownFilesInDirectory(
//   '_content/docs/2.12.0/1 Application environment'
// )
// console.log(readVersionDirs('_content/docs/2.12.0/'))

export default function HomePage() {
  const whatsnew = allPosts
    ?.map((post) => ({
      title: post.title || '',
      date: post.date || '',
      description: post.excerpt || '',
      href: post.url || '',
    }))
    .slice(0, 4)
    .sort((a, b) => sortByDate(a.date, b.date))
  return (
    <Layout>
      {JSON.stringify(generateAllDocsGroupedByVersion('_content/docs'))}
      <FeaturesList title='With Oskari you can...' data={featureItems} />
      <UsedBy title='Used by' data={usedbyItems} />
      <CardList data={whatsnew} title='What´s new' />
    </Layout>
  )
}
