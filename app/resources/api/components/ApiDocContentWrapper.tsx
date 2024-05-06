import '@/styles/apidoc.scss'

export default function ApiDocContentWrapper({html}: {html: string}) {
  return <article>
    <div className={'apidocContentWrapper'} dangerouslySetInnerHTML={{ __html: html }}/>
  </article>;
}