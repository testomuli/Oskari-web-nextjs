import slugify from 'slugify';
import { SidebarAccordionItem } from '@/types/api';
import Link from 'next/link';
import styles from '@/styles/accordion.module.scss'

export default function SidebarAccordionContent(
  {
    elements,
    baseHref
  }:
  {
    elements: Array<SidebarAccordionItem>,
    baseHref: string,
  }) {
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