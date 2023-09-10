import Container from '@/components/Container'
import Layout from '@/components/Layout'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contribute',
}

export default function ContributePage() {
  return (
    <Layout heroSmall heroTitle={'Contribute'}>
      <Container>asd</Container>
    </Layout>
  )
}
