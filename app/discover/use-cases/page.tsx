import { allPosts, Post } from '@/.contentlayer/generated'
import UseCasesCard from '@/components/Cards/UseCasesCard'
import Container from '@/components/Container'
import Layout from '@/components/Layout'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Use cases',
}

export default function DiscoverPage() {
  return (
    <Layout heroSmall heroTitle='Use cases'>
      <Container
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '5rem',
        }}
      >
        <div className='flex gap-x-10 gap-y-12 flex-wrap justify-center'>
          {allPosts
            ?.filter((post) => post.tags?.includes('use case'))
            ?.map(({ date, _id: id, title, excerpt, url, image }: Post) => (
              <UseCasesCard
                key={id}
                image={image || ''}
                date={date}
                title={title}
                excerpt={excerpt}
                url={url}
              />
            ))}
        </div>
      </Container>
    </Layout>
  )
}
