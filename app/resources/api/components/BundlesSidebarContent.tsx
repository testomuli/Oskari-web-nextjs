import { Bundle } from '@/types/api';
import slugify from 'slugify';

export default function BundlesSidebarContent(
  {
    elements,
    baseHref
  }:
  {
    elements: Array<Bundle>,
    baseHref: string
  }) {
    return <>
    {
      elements.map((element: {name: string, bundles: Array<{path: string, name: string}>}) => {
        return <div key={element.name}>
          <h4>{element.name}</h4>
          <ul>
          {
            element.bundles.map((subElement) => {
              const slug = slugify(subElement.name)
              return <li key={slug}>
                <a href={baseHref + slug}>
                  {subElement.name}
                </a>
              </li>
            })
          }
          </ul>
        </div>;
      })
    }
    </>;


}