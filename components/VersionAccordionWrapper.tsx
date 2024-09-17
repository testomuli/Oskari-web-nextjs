"use client";
import { useState } from "react";
import Accordion from "./Accordion/Accordion";
import { LATEST_STABLE_VERSION, LATEST_STABLE_VERSION_LABEL, UNRELEASED_VERSION, UNRELEASED_VERSION_LABEL } from "@/utils/constants";
import Link from 'next/link'
import styles from '@/styles/accordion.module.scss'

export default function VersionAccordionWrapper({
  selectedVersion,
  allVersions,
  baseHref,
  labelId
}: {
  selectedVersion: string,
  allVersions: string[],
  baseHref: string,
  labelId?: string
}) {

  const [isOpen, setIsOpen] = useState(false);
  const mapLabelToVersion = (item: string) => {
    let displayVersion = item === UNRELEASED_VERSION ? UNRELEASED_VERSION_LABEL : item;
    displayVersion = item === LATEST_STABLE_VERSION ? LATEST_STABLE_VERSION_LABEL : displayVersion;
    return displayVersion;
  }

  const renderVersionMenuContent = (items: string[], selectedVersion: string) => (
    <ul className={styles.accordionMenu}>
      {items?.map((item) => {
          const versionText = mapLabelToVersion(item);
          return <>
            <li key={item} role="option" aria-label={versionText} aria-selected={item === selectedVersion}>
              <Link
                // not navigable by keyboard when accordion isn't open
                tabIndex={isOpen ? 0 : -1}
                href={`${baseHref}${item}`}>{versionText}</Link>
            </li>
          </>
      }
      )}
    </ul>
  );

  const updateIsOpen = (id: string, accordionOpen: boolean) => {
    setIsOpen(accordionOpen);
  };

  return <Accordion
    labelId={labelId}
    id={'versionAccordion'}
    initialOpen={isOpen}
    title={mapLabelToVersion(selectedVersion) || 'Select'}
    content={renderVersionMenuContent(allVersions, selectedVersion)}
    updateIsOpen={updateIsOpen}
  />
}
