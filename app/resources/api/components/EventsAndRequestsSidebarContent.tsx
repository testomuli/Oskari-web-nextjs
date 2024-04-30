import { OskariEventOrRequest } from '@/types/api';
import AccordionGroup from '@/components/Accordion/AccordionGroup';
import Accordion from '@/components/Accordion/Accordion';
import SidebarAccordionContent from './SideBarAccordionContent';

export default function EventsAndRequestsSidebarContent(
{
  elements,
  baseHref,
  title
}:
{
  elements: Array<OskariEventOrRequest>,
  baseHref: string,
  title: string
}) {

  const namespaces: Array<string> = [...new Set(elements.map(element => element.ns))];

  return <div style={{marginTop: '2em'}}>
    <h3 style={{ fontSize: '1.125rem'}}>{title}</h3>
    <AccordionGroup>
    { namespaces.map((namespace: string) => {
        const filtered = elements?.filter((element) => element.ns === namespace);
        return <Accordion
          key={namespace}
          title={ namespace }
          content={<SidebarAccordionContent elements={filtered} baseHref={baseHref}/>}
        />;
      })
    }
    </AccordionGroup>;
  </div>;
}