import { allPosts } from '@/.contentlayer/generated'
import Card from '@/components/Cards/Card'
import Layout from '@/components/Layout'
import styles from '@/styles/blog.module.scss'

export default function BlogPage() {
  return (
    <Layout heroTitle='Blog' heroSmall>
      <div className='container--content'>
        <div className={styles.blog__grid}>
          {allPosts?.map((post) => {
            const item = {
              title: post.title || '',
              date: post.date,
              description: post.excerpt,
              href: post.url,
            }
            return <Card data={item} key={post._id} />
          })}
        </div>
      </div>
    </Layout>
  )
}
