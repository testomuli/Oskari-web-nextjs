import '@/styles/apidoc.scss'
import '@fortawesome/fontawesome-free/js/fontawesome.min.js';
import '@fortawesome/fontawesome-free/css/fontawesome.min.css';
import '@fortawesome/fontawesome-free/css/solid.min.css';

export default function ApiDocContentWrapper({html}: {html: string}) {
  return <article>
    <div className={'apidocContentWrapper'} dangerouslySetInnerHTML={{ __html: html }}/>
  </article>;
}