import slugify from 'slugify';
import { OskariEvent } from '@/types/api';

export default function EventsSidebarContent(
  {
    elements,
    baseHref
  }:
  {

    elements: Array<OskariEvent>,
    baseHref: string
  }) {

    const namespaces: Array<string> = [...new Set(elements.map(event => event.ns))];

    return namespaces.map((namespace: string) => {
        return <div key={namespace}>
            <h4>{namespace}</h4>
            <ul>
            {
              elements.filter((element) => element.ns === namespace).map((element) => {
                const slug = slugify(element.name)
                return <li key={element.name}>
                  <h5><a href={baseHref + slug}>{element.name}</a></h5>
                  <span>{element.desc}</span>
                </li>
              })
            }

            </ul>
        </div>;
    })
}