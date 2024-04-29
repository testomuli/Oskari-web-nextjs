import { DocAnchorLinksType } from '@/types/types';
import slugify from 'slugify';
// import remarkGfm from 'remark-gfm'
// import rehypeStringify from 'rehype-stringify'
// import rehypeHighlight from 'rehype-highlight'
// import remarkParse from 'remark-parse'
// import remarkRehype from 'remark-rehype'
// import { unified } from 'unified'

// export default async function markdownToHtml(markdown: string) {
//   const file = await unified()
//     .use(remarkParse)
//     .use(remarkGfm)
//     .use(remarkRehype)
//     .use(rehypeHighlight)
//     .use(rehypeStringify)
//     .process(markdown)
//   return insertIdsToHeaders(String(file))
// }

export const insertIdsToHeaders = (htmlString: string, startingSectionNumber: string) => {
  const headerRegex = /<h([1-3])>(.*?)<\/h\1>/g
  const anchorLinks: Array<DocAnchorLinksType> = []
  const sectionCounter = [parseInt(startingSectionNumber) - 1, 0, 0, 0, 0, 0];

  const newHtmlString = htmlString.replace(
    headerRegex,
    function (match: string, level: string, content: string) {
      sectionCounter[parseInt(level) - 1]++;
      const slug = slugify(content)
      const sectionNumber = sectionCounter.slice(0, parseInt(level)).join('.');
      anchorLinks.push({ level, content, slug, sectionNumber });
      return `<h${level} id="${slug}">${sectionNumber} ${content}</h${level}>`
    }
  )
  return {
    html: newHtmlString,
    anchorLinks
  }
}

export const updateMarkdownImagePaths = (markdownString: string, imagesRuntimePath: string = '') => {
  const regex = /!\[(.*?)\]\((.*?)\)/g;

  function replaceFunc(match: string, altText: string, imagePath: string) {

    if (match.indexOf('resources') > -1) {
      const pathStartRegex = /^.*?\/resources\//;
      const replacedImagePath = imagePath.replace(pathStartRegex, imagesRuntimePath);
      return `![${altText}](${replacedImagePath})`;
    }

    return (`![${altText}](${imagesRuntimePath + '/' + imagePath})`);
  }

  const result = markdownString.replace(regex, replaceFunc);
  return result;
}

export const updateMarkdownHtmlStyleTags = (markdownString: string) => {
  const regex = /"([^"]*)"/g;

  function replaceFunc(match: string, content: string) {
      const replacedContent = content.replace(/</g, '{{').replace(/>/g, '}}');
      return `"${replacedContent}"`;
  }

  const result = markdownString.replace(regex, replaceFunc);

  return result;
}
