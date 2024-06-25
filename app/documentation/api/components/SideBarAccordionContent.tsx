import slugify from 'slugify';
import { SidebarAccordionItem } from '@/types/api';
import Link from 'next/link';
import styles from '@/styles/accordion.module.scss'
import '@/styles/apidoc.scss';
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
              className='apidocSidebarLink'
            >
              {item.name}
            </Link>
            { showDescription && <div className={'apidocSidebarDesc'}>{item.desc}</div>}
          </li>
        })}
      </ul>
    )
    }