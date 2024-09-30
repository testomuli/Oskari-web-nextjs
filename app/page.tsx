import allPosts from '@/_content/blog'
import CardList from '@/components/Cards/CardList'
import Layout from '@/components/Layout'

export default function HomePage() {
  const whatsnew = allPosts
    ?.map((post) => ({
      title: post.title || '',
      date: new Date(post.date),
      description: post.excerpt || '',
      href: '/blog/' + post.slug || '',
    }))
    .sort((a, b) => b.date.getTime() - a.date.getTime())
    .slice(0, 4)
  return (
    <Layout>
      <CardList data={whatsnew} title='What’s new' />
    </Layout>
  )
}
