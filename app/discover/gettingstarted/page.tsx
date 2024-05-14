import HighlightBox from "@/components/HighlightBox";
import Layout from "@/components/Layout";

export default function GettingStartedPage() {
  return <Layout heroSmall heroTitle='Getting started'>
        <HighlightBox>
          <div style={{ display: 'flex', flexDirection: 'column'}}>
            <h3>About Oskari</h3>
            <h3>For Oskari developers</h3>
            <h3>For Oskari owners and procurers</h3>
            <h3>For Oskari  admin-users</h3>
            <h3>For Oskari commercial partners</h3>
            <h3>For Oskari end-users</h3>
          </div>
        </HighlightBox>
  </Layout>;
}
