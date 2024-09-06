"use client";
import styles from '@/styles/accordion.module.scss'
import { DocAnchorLinksType, MarkdownFileMetadata } from '@/types/types'
import Accordion from '../../../../../components/Accordion/Accordion';
import { useState } from 'react';
import Link from 'next/link';
import { cleanTags } from '@/lib/utils';

export default function AccordionListWrapper({
  items,
  initialOpenSections
}: {
  items: MarkdownFileMetadata[] | null,
  initialOpenSections: string[]
}) {

  const [openSections, setOpenSections] = useState(initialOpenSections);
  const renderAccordionContent = (
    items: Array<DocAnchorLinksType>, parentSlug: string, isOpen: boolean
  ) => {
    return (
      <ul className={styles.accordionMenu}>
        {items?.map((item, index) => (
          <li key={item.slug + '_' + index}>
            <Link
              href={item.slug === parentSlug ? item.slug : parentSlug + '#' + item.slug}
              // not navigable by keyboard when accordion isn't open
              tabIndex={isOpen ? 0 : -1}
            >
              {item.sectionNumber} {cleanTags(item.content)}
            </Link>
          </li>
        ))}
      </ul>
    )
  }

  const updateOpenAccordion = (id: string, isOpen: boolean) => {
    let newOpenSections: string[] = Object.assign([], openSections);
    if (isOpen) {
      if (!newOpenSections.includes(id)) {
        newOpenSections.push(id);
      }
    } else {
      newOpenSections = openSections.filter(accordionId => accordionId !== id);
    }

    setOpenSections(newOpenSections);
  }


  return <>
    {items?.map((item: MarkdownFileMetadata) => (
      <Accordion
        key={item.slug}
        id={item.slug}
        initialOpen = { openSections?.includes(item.slug) }
        updateIsOpen={updateOpenAccordion}
        title={ item?.title || `Chapter ${item.slug}`}
        content={renderAccordionContent(item.anchorLinks, item.slug, openSections.includes(item.slug))}
      />
    ))}
  </>;



}
