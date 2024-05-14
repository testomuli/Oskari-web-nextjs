'use client'
import { OskariEventOrRequest } from '@/types/api';
import AccordionGroup from '@/components/Accordion/AccordionGroup';
import Accordion from '@/components/Accordion/Accordion';
import SidebarAccordionContent from './SideBarAccordionContent';
import Checkbox, { CheckboxGroup } from '@/components/Checkbox/Checkbox';
import { useState } from 'react';
import '@/styles/apidoc.scss';

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
  const [rpcOnly, setRpcOnly] = useState(false);
  const [showDescription, setShowDescription] = useState(true);

  const checkedChanged = (checked: boolean) => {
    setRpcOnly(checked);
  };

  const showDescriptionCheckedChanged = (checked: boolean) => {
    setShowDescription(checked);
  }

  return <div className='sidebarMainDiv'>
    <h3 className='sidebarCheckboxesTitle'>{title}</h3>
    <CheckboxGroup>
      <Checkbox title='Description' isChecked={showDescription} onChange={showDescriptionCheckedChanged}/>
      <Checkbox title='RPC only' isChecked={rpcOnly} onChange={checkedChanged}/>
    </CheckboxGroup>

    <AccordionGroup>
    { namespaces.map((namespace: string) => {
        let filtered = elements?.filter((element) => element.ns === namespace);

        if (rpcOnly) {
          filtered = filtered.filter((element) => !!element.rpc)
        }

        return <Accordion
          key={namespace}
          title={ namespace }
          content={<SidebarAccordionContent elements={filtered} baseHref={baseHref} showDescription={showDescription}/>}
        />;
      })
    }
    </AccordionGroup>
  </div>;
}