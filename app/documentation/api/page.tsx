import Button from "@/components/Button";
import HighlightBox from "@/components/HighlightBox";
import DefaultLayout from "@/components/Layout";
import Text from '@/components/Text'

export default function ApiMainPage() {
  return <>
    <DefaultLayout heroSmall heroTitle='Oskari API'>
        <Text>
          Oskari API is defined as bundles. Bundle is a definition of functionality that may provide external API to control the functionality.
        </Text>
        <HighlightBox style= {{ backgroundColor: '#FAFAFA'}}>
          <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '85vw'}}>
            <h2 style={{fontSize: '1.625rem'}}>Building a custom Oskari application</h2>
            <div>
              <p className="mt-2 mb-2">Choose the functionalities from bundle documentation</p>
              <Button
                variant='primary'
                title='Bundle documentation'
                href={'/documentation/api/bundles'}/>
            </div>
            <div style={{ marginTop: '2em'}}>
              <h2 style={{fontSize: '1.625rem'}}>Working with an existing Oskari application</h2>
              <div className='flex flex-col'>
                <div className="mt-3 mb-3">
                  <p className="mt-2 mb-2">Controlling existing functionality</p>
                  <Button
                    variant='primary'
                    title='Requests documentation'
                    href={'/documentation/api/requests'}/>
                </div>
                <div>
                  <p className="mt-2 mb-2">Reacting to events</p>
                  <Button
                    variant='primary'
                    title='Events documentation'
                    href={'/documentation/api/events'}/>
                </div>
              </div>
            </div>
          </div>
        </HighlightBox>
    </DefaultLayout>
  </>;
}
