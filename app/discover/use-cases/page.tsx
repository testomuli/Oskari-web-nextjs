import allPosts from '@/_content/blog/';
import UseCasesCard from '@/components/Cards/UseCasesCard'
import Container from '@/components/Container'
import Layout from '@/components/Layout'
import { format } from 'date-fns';
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Use cases',
}

export default function DiscoverPage() {
  const postItems = allPosts.map((post) => {
    const item = {
      // TODO: we should probably have id other than slug
      id: post.slug,
      title: post.title || '',
      date: new Date(post.date),
      image: post.image || '',
      description: post.excerpt,
      href: 'blog/' + post.slug,
      tags: post.tags,
    }
    return item
  }).sort((a, b) => b.date.getTime() - a.date.getTime());

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
          {postItems
            ?.filter(
              (post) =>
                post.tags
                  ?.map((tag) => tag.toLowerCase().trim())
                  .includes('use case')
            )
            .sort(
              (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
            )
            ?.map(({ id, title, description, href, image, date }) => (
              <UseCasesCard
                key={id}
                image={image || ''}
                date={format(new Date(date), 'yyyy-MM-dd')}
                title={title}
                excerpt={description}
                url={href}
              />
            ))}
        </div>
      </Container>
    </Layout>
  )
}
