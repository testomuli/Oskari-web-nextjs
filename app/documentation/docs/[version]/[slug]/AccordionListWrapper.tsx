"use client";
import styles from '@/styles/accordion.module.scss'
import { DocAnchorLinksType, MarkdownFileMetadata } from '@/types/types'
import Accordion from '../../../../../components/Accordion/Accordion';
import { useState } from 'react';
import Link from 'next/link';
import { cleanTags } from '@/lib/utils';

export default function AccordionListWrapper({
  items,
  initialOpenSection
}: {
  items: MarkdownFileMetadata[] | null,
  initialOpenSection: string
}) {

  const [openSection, setOpenSection] = useState(initialOpenSection);
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
    const newOpenSection = isOpen ? id : '';
    setOpenSection(newOpenSection);
  }

  return <>
    {items?.map((item: MarkdownFileMetadata) => (
      <Accordion
        key={item.slug}
        id={item.slug}
        initialOpen = { openSection === item.slug }
        updateIsOpen={updateOpenAccordion}
        title={ item?.title || `Chapter ${item.slug}`}
        content={renderAccordionContent(item.anchorLinks, item.slug, openSection === item.slug)}
      />
    ))}
  </>;



}
