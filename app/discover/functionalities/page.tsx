import allPosts from '@/_content/blog/';
import Button from '@/components/Button'
import CardCarousel from '@/components/Cards/CardCarousel'
import FeatureCard from '@/components/Cards/FeatureCard'
import ImageCard from '@/components/Cards/ImageCard'
import Container from '@/components/Container'
import HighlightBox from '@/components/HighlightBox'
import Layout from '@/components/Layout'
import { DISCOVER_FUNCTIONALITIES } from '@/utils/data/whychooseoskari'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Discover',
}

export default function DiscoverPage() {
  // TODO: I guess there should not be a need to do all this, we should just be able to use the results from the js straight up.
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
    <Layout heroSmall heroTitle='Discover Oskari'>
      <Container
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '5rem',
        }}
      >
        {DISCOVER_FUNCTIONALITIES?.map((feature, index) => (
          <FeatureCard
            key={feature.title}
            features={feature.features}
            title={feature.title}
            imageSrc={feature.img}
            reverse={index % 2 === 0}
          />
        ))}
      </Container>
      <HighlightBox
        style={{
          margin: '6rem 0',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '3rem',
            textAlign: 'center',
            alignItems: 'center',
          }}
        >
          <h3 style={{ fontSize: '1.625rem' }}>Give it a try!</h3>
          <p style={{ textAlign: 'center', fontSize: '1.125rem' }}>
            How to view and visualize maps with Oskari? Try the demo!
          </p>
          <Button
            variant='dark'
            title='Try Oskari demo'
            href='https://demo.oskari.org/'
            external
            newWindow
          />
        </div>
      </HighlightBox>
      <CardCarousel
        title='Use cases'
        items={postItems
          ?.filter(
            (post) =>
              post.tags
                ?.map((tag) => tag.toLowerCase().trim())
                .includes('use case')
          )
          ?.map(({ id, title, description, href, image }) => (
            <ImageCard
              key={id}
              imageSrc={image || '/assets/images/placeholder.png'}
              altText={title}
              title={title}
              content={description}
              url={`/${href}`}
            />
          ))}
      />
    </Layout>
  )
}
