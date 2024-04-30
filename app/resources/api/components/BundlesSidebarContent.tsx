import Accordion from '@/components/Accordion/Accordion';
import AccordionGroup from '@/components/Accordion/AccordionGroup';
import { Bundle, BundleItem } from '@/types/api';
import styles from '@/styles/accordion.module.scss'
import Link from 'next/link';
import slugify from 'slugify';

const renderAccordionContent = (
  bundles: Array<BundleItem>, baseHref: string
) => {
  return (
    <ul className={styles.accordionMenu}>
      {bundles?.map((item, index) => {
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
        {elements?.map((element: Bundle) => (
          <Accordion
            key={element.name}
            title={ element.name }
            content={renderAccordionContent(element.bundles, baseHref)}
          />
        ))}
      </AccordionGroup>;
    </div>
  }