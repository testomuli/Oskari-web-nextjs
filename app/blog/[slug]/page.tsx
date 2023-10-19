import { allPosts } from '@/.contentlayer/generated'
import HighlightBox from '@/components/HighlightBox'
import Layout from '@/components/Layout'
import Error from '@/components/Error'
import styles from '@/styles/blog.module.scss'

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post._raw.flattenedPath,
  }))
}

export default function BlogSinglePostPage({
  params,
}: {
  params: { slug: string }
}) {
  const post = allPosts.find(
    (post) => encodeURI(post._raw.flattenedPath.split('/')[1]) === params.slug
  )

  if (!post) {
    return <Error text='No blog posts found' code='404' />
  }

  return (
    <Layout heroSmall heroTitle='Blog'>
      <div className='container--content'>
        <h2 className={styles.post__title}>{post.title}</h2>
        <div className={styles.post__date}>{post.date}</div>
        <div
          className='md-content'
          dangerouslySetInnerHTML={{ __html: post.body.html }}
          style={{ maxWidth: '100%', marginTop: 0 }}
        />
      </div>
      <HighlightBox
        otter
        style={{
          backgroundColor: 'var(--color-beige)',
          marginTop: '10rem',
          marginBottom: '10rem',
        }}
        contentStyles={{
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'left',
          paddingTop: '4rem',
          paddingBottom: '4rem',
          alignItems: 'flex-start',
        }}
      >
        <span>Author</span>
        <span style={{ fontWeight: 'bold' }}>{post.author}</span>
      </HighlightBox>
    </Layout>
  )
}
