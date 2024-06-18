import Layout from '@/components/Layout'
import Text from '@/components/Text'
import { Metadata } from 'next'
import HighlightBox from '@/components/HighlightBox'
import Button from '@/components/Button'

export const metadata: Metadata = {
  title: 'Getting Started',
}

export default function GettingStartedPage() {
  return (
    <Layout heroSmall heroTitle='Getting Started'>
      <div>
        <Text>
          This site contains all the relevant links for finding the information you need about Oskari. The material has been divided under different user groups and customed to their needs.
        </Text>
      </div>
      <div>
        <h2>Contents</h2>
        <ul>
          <li><a href="#owners-procurers">Getting Started for Owners & Procurers</a></li>
          <li><a href="#developers">Getting Started for Developers</a></li>
          <li><a href="#commercial-partners">Getting Started for Commercial partners</a></li>
          <li><a href="#end-users">Getting Started for End-users</a></li>
        </ul>
      </div>
      <div>
        <h2 id="owners-procurers">Getting Started for Owners & Procurers</h2>
        <Text>
          If you are thinking about procuring Oskari, see Instructions for Procurement. There you will get help for procuring new Oskari instance, updating an old Oskari instance or configuring an Oskari instance.
        <div>
          If you need help with the admin tools, see our FAQ for Oskari admins.
        </div>
        {"If you want to understand Oskari's infrastructure, see Oskari architechture."}
        </Text>
      </div>
      <div>
      <h2 id="developers">Getting Started for Developers</h2>
        <Text>
          Developing Oskari.
          <div>
          Updating an old Oskari instance.
          </div>
          Starting an Oskari instance.
          <div>
          Configuring Oskari.
          </div>
          See the Oskari architechture.
          <div>
          Open the demo and try out Oskari yourself!
          </div>
          Try out the RPC and its features.
        </Text>
      </div>
      <div>
      <h2 id="commercial-partners">Getting Started for Commercial partners</h2>
        <Text>
          Understanding Oskari: what skills do you need?
          <div>
          See the Oskari architechture.
          </div>
          Why to join Oskari Joint Development Forum (JDF)?
        </Text>
      </div>
      <div>
      <h2 id="end-users">Getting Started for End-users</h2>
        <Text>
          What is Oskari?
          <div>
          How to report bugs in Oskari?
          </div>
          How to contact Oskari Joint Development Forum?
          <div>
          Tutorials:
          </div>
            Embedding maps
          <div>
            Various other tutorials
          </div>
        </Text>
      </div>

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
            Try out the Oskari demo!
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
    </Layout>
  )
}
