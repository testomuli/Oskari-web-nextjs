import HighlightBox from "@/components/HighlightBox";
import Layout from "@/components/Layout";

export default function GettingStartedPage() {
  return <Layout heroSmall heroTitle='Getting started'>
        <HighlightBox>
          <div style={{ display: 'flex', flexDirection: 'column'}}>
            <h2>About Oskari</h2>
            <h2>For Oskari developers</h2>
            <h2>For Oskari owners and procurers</h2>
            <h2>For Oskari  admin-users</h2>
            <h2>For Oskari commercial partners</h2>
            <h2>For Oskari end-users</h2>
          </div>
        </HighlightBox>
  </Layout>;
}
