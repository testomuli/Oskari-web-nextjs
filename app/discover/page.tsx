import allPosts from '@/_content/blog/';
import Button from '@/components/Button'
import CardCarousel from '@/components/Cards/CardCarousel'
import FeatureCard from '@/components/Cards/FeatureCard'
import ImageCard from '@/components/Cards/ImageCard'
import HighlightBox from '@/components/HighlightBox'
import Layout from '@/components/Layout'
import Text from '@/components/Text'
import { DISCOVER_FEATURE_DATA } from '@/utils/data/whychooseoskari'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Discover',
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
    <Layout heroSmall heroTitle='Discover Oskari'>
      <div>
      <Text>
          Oskari is a Finnish open-source tool that allows
          anyone to create easy-to-use map services for websites. The goal of
          Oskari is to help businesses and public sector organizations offer better online
          and mobile map services to consumers and citizens. 
          
          With Oskari, you can build a whole geoportal service or embed an interactive map to your website. 
          By adding different map layers to the service, customizing the interface and choosing
          the tools for your application, you can build a map service that is suited exactly to your needs. 
        </Text>
        <Text>
          Oskari supports the INSPIRE directive of EU and OGC standards. The name
          Oskari comes from the words open-source map window (open source
          karttaikkuna).
        </Text>

        <h2>Oskari is developed together</h2>
        <Text>
          Oskari is coordinated by the National Land Survey of Finland, but the
          software is developed according to the open-source principles - anyone
          can participate in the development. The results of the development
          work will be published as an open code.
        </Text>
        <Text>
          The first versions of the Oskari software date back to 2009. They were
          created in the context of the piloting and implementation of the
          National Land Survey of Finland&apos;s geographic information portal,
          the Finnish National Geoportal (Paikkatietoikkuna).
        </Text>
        <Text>
          The Oskari community values the contribution of everyone involved in
          its development. The network has nearly 50 members from both the
          public and private sectors.
        </Text>
        <Text>Welcome aboard!</Text>
      </div>
      <h2>Why choose Oskari?</h2>
      {DISCOVER_FEATURE_DATA?.map((feature, index) => (
        <FeatureCard
          key={feature.title}
          features={feature.features}
          title={feature.title}
          imageSrc={feature.img}
          reverse={index % 2 === 0}
        />
      ))}
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button
          variant='primary'
          title='Read more in documentation'
          href='/documentation/docs'
          style={{ alignSelf: 'center', color: 'red' }}
          label="Why to choose Oskari? Go to Oskari's documentation"
        />
      </div>
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
            How to view and visualize maps with Oskari? Try the sample
            application!
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
