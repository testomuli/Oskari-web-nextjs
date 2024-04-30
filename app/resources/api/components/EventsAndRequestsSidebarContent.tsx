import slugify from 'slugify';
import { OskariEventOrRequest } from '@/types/api';
import AccordionGroup from '@/components/Accordion/AccordionGroup';
import Accordion from '@/components/Accordion/Accordion';
import Link from 'next/link';
import styles from '@/styles/accordion.module.scss'

const renderAccordionContent = (
  elements: Array<OskariEventOrRequest>, baseHref: string
) => {
  return (
    <ul className={styles.accordionMenu}>
      {elements?.map((item, index) => {
        const slug = slugify(item.name)
        return <li key={slug + '_' + index}>
          <Link
            href={baseHref + slug}
          >
            {item.name}
          </Link>
        </li>
      })}
    </ul>
  )
}

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
        return <Accordion
          key={namespace}
          title={ namespace }
          content={renderAccordionContent(elements?.filter((element) => element.ns === namespace), baseHref)}
        />;
      })
    }
    </AccordionGroup>;
  </div>;
}