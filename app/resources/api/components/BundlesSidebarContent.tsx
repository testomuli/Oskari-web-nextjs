import Accordion from '@/components/Accordion/Accordion';
import AccordionGroup from '@/components/Accordion/AccordionGroup';
import { Bundle } from '@/types/api';
import SidebarAccordionContent from './SideBarAccordionContent';

export default function BundlesSidebarContent(
  {
    elements,
    baseHref
  }:
  {
    elements: Array<Bundle>,
    baseHref: string
  }) {

    return <div style={{marginTop: '2em'}}>
      <h3 style={{ fontSize: '1.125rem'}}>Select bundle</h3>
      <AccordionGroup>
        {elements?.map((element: Bundle) => {
          return <Accordion
            key={element.name}
            title={ element.name }
            content={<SidebarAccordionContent elements={element.bundles} baseHref={baseHref} showDescription={true} />}
          />;
        })}
      </AccordionGroup>;
    </div>
  }