'use client';
import '@/styles/apidoc.scss'
import '@fortawesome/fontawesome-free/js/fontawesome.min.js';
import '@fortawesome/fontawesome-free/css/fontawesome.min.css';
import '@fortawesome/fontawesome-free/css/solid.min.css';
import { useEffect } from 'react';
import mermaid from 'mermaid';
import { MERMAID_SNIPPET } from '@/lib/customMarked';

export default function ApiDocContentWrapper({html}: {html: string}) {

  useEffect(() => {

    if (html.includes(MERMAID_SNIPPET))
    mermaid.initialize({
      startOnLoad:true,
      htmlLabels:true,
      theme: 'base',
      themeVariables: {
        primaryColor: '#ffd400',
        primaryTextColor: '#222222',
        primaryBorderColor: '#222222',
        lineColor: '#222222',
        secondaryColor: '#A3C4BC'
      }
    });
    mermaid.contentLoaded();
  }, [html]);
  return <article>
    <div className={'apidocContentWrapper'} dangerouslySetInnerHTML={{__html: html}}/>
  </article>;
}