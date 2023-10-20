import { Post, allPosts } from '@/.contentlayer/generated'
import Card from '@/components/Cards/Card'
import Layout from '@/components/Layout'
import styles from '@/styles/blog.module.scss'
import { sortByDate } from '@/utils/misc'

export default function BlogPage() {
  const posts = allPosts
    ?.map((post: Post) => {
      const item = {
        title: post.title || '',
        date: post.date || '',
        description: post.excerpt,
        href: post.url,
      }
      return item
    })
    .sort((a, b) => sortByDate(a.date, b.date))
  return (
    <Layout heroTitle='Blog' heroSmall>
      <div className='container--content'>
        <div className={styles.blog__grid}>
          {posts?.map((item) => <Card data={item} key={item.title} />)}
        </div>
      </div>
    </Layout>
  )
}
