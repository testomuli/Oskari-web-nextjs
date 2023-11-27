import { Post, allPosts } from '@/.contentlayer/generated'
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
          margin: '8rem 0',
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
            How to view and visualise maps with Oskari? Try the demo!
          </p>
          <Button
            variant='dark'
            title='Try Oskari demo'
            href='https://demo.oskari.org/'
          />
        </div>
      </HighlightBox>
      <CardCarousel
        title='Use cases'
        items={allPosts
          ?.filter((post: Post) => post.tags?.includes('use case'))
          ?.map(({ _id: id, title, excerpt, url, image }: Post) => (
            <ImageCard
              key={id}
              imageSrc={image || '/assets/images/placeholder.png'}
              altText={title}
              title={title}
              content={excerpt}
              url={url}
            />
          ))}
      />
    </Layout>
  )
}
