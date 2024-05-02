import slugify from 'slugify';
import { SidebarAccordionItem } from '@/types/api';
import Link from 'next/link';
import styles from '@/styles/accordion.module.scss'

export default function SidebarAccordionContent(
  {
    elements,
    baseHref,
    showDescription
  }:
  {
    elements: Array<SidebarAccordionItem>,
    baseHref: string,
    showDescription: boolean
  }) {
    return (
      <ul className={styles.accordionMenu}>
        {elements?.map((item, index) => {
          const slug = slugify(item.name)
          return <li key={slug + '_' + index}>
            <Link
              href={baseHref + slug}
              style={{ paddingBottom: '0.5rem', color: '#428bca', fontSize: '1rem'}}
            >
              {item.name}
            </Link>
            { showDescription && <div style={{ padding: '0 2rem', fontSize: '0.9rem', overflow: 'hidden', wordWrap: 'break-word' }}>{item.desc}</div>}
          </li>
        })}
      </ul>
    )
    }