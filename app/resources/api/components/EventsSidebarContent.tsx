import slugify from 'slugify';
import { Event } from '@/types/api';

export default function EventsSidebarContent(
  {
    elements,
    baseHref
  }:
  {

    elements: Array<Event>,
    baseHref: string
  }) {

    const namespaces: Array<string> = [...new Set(elements.map(event => event.ns))];

    return namespaces.map((namespace: string) => {
        return <div key={namespace}>
            <h4>{namespace}</h4>
            {
              elements.filter((element) => element.ns === namespace).map((element) => {
                return <div key={element.name}>
                  <h5><a href={baseHref}>{element.name}</a></h5>
                  <span>{element.desc}</span>
                </div>
              })
            }
        </div>;
    })
}