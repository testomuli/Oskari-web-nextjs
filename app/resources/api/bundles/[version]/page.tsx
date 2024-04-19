
import ApiSectionMainPage from '../../components/ApiSectionMainPage';
export default async function BundlesMainPage({
  params
}: {
  params: { version: string }
}) {

  const bundles = (await import('_content/api/versions/'+params.version+'/bundles.json')).default;
  const bundleBaseRef = '/resources/api/bundles/'+params.version+'/#';
  const sideBarContent = <>
      {
        bundles.map((element: {name: string, bundles: Array<{path: string, name: string}>}) => {
          return <>
            <div key={element.name}>
              <h4>{element.name}</h4>
              <ul>
              {
                element.bundles.map((subElement) => {
                  return <li key={subElement.path}>
                    <a href={bundleBaseRef + subElement.path}>
                      {subElement.name}
                    </a>
                  </li>
                })
              }

              </ul>
            </div>
          </>;
        })
      }
  </>;

  return <ApiSectionMainPage
    version={params.version}
    sideBarContent={sideBarContent}
    title='Oskari API documentation'
    baseHref='/resources/api/bundles/'/>;
}
