import { DocAnchorLinksType } from '@/types/types';
import slugify from 'slugify';
import hljs from 'highlight.js'

export const insertIdsToHeaders = (htmlString: string, startingSectionNumber: string) => {
  const headerRegex = /<h([1-3])>(.*?)<\/h\1>/g
  const anchorLinks: Array<DocAnchorLinksType> = []
  const sectionCounter = [parseInt(startingSectionNumber) - 1, 0, 0, 0, 0, 0];
  let previousLevel = parseInt(startingSectionNumber) - 1;

  const newHtmlString = htmlString.replace(
    headerRegex,
    function (match: string, level: string, content: string) {
      const intLevel = parseInt(level);
      sectionCounter[intLevel - 1]++;
      if (intLevel < previousLevel) {
        for (let i = intLevel; i < sectionCounter.length; i++) {
          sectionCounter[i] = 0;
        }
      }
      previousLevel = intLevel;
      const slug = slugify(content)
      const sectionNumber = sectionCounter.slice(0, parseInt(level)).map(sectionNumber => sectionNumber || 1).join('.');
      anchorLinks.push({ level, content, slug, sectionNumber });
      return `<h${level} id="${slug}">${sectionNumber} ${content}</h${level}>`
    }
  )
  return {
    html: newHtmlString,
    anchorLinks
  }
}

export const updateMarkdownImagePaths = (markdownString: string, imagesRuntimePath: string = ''): string => {
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

export const updateMarkdownHtmlStyleTags = (markdownString: string): string => {
  const regex = /"([^"]*)"/g;

  function replaceFunc(match: string, content: string) {
      const replacedContent = content.replace(/</g, '{{').replace(/>/g, '}}');
      return `"${replacedContent}"`;
  }

  const result = markdownString.replace(regex, replaceFunc);

  return result;
}

export const badgeTemplates: {[key: string]: string} = {
  '[add]': '<span class="label label-primary add" title="Added"><i class="fa-solid fa-plus"></i></span>',
  '[mod]': '<span class="label label-primary mod" title="Modified"><i class="fa-solid fa-pen"></i></span>',
  '[rem]': '<span class="label label-primary rem" title="Removed"><i class="fa-solid fa-trash-can"></i></span>',
  '[breaking]': '<span class="label label-primary breaking" title="Breaking change. Not backwards compatible."><i class="fa-solid fa-triangle-exclamation"></i></span>',
  '[rpc]': '<span class="label label-primary rpc" title="Available via RPC">RPC</span>',
};

export const processHeaders = (markdownContent:string): string => {
  const headerRegex = /^(#+)\s+(.*?)\s*$/gm;
  const tagRegex = /\[(.*?)\]/g;

  const processedContent = markdownContent.replace(headerRegex, (match, hashes, title) => {
    const tags = title.match(tagRegex);
    let cleanTitle = title.replace(tagRegex, '');

    if (tags) {
      const badges: Array<string> = tags.map((tag: string) => {
        if (!!badgeTemplates[tag.toLowerCase()]) {
          return badgeTemplates[tag.toLowerCase()];
        }
        return null;
      }).filter((badge: string) => !!badge);
      cleanTitle = `<h${hashes.length}>${cleanTitle}${badges.join(' ')}</h${hashes.length}>`;
    } else {
      cleanTitle = `<h${hashes.length}>${cleanTitle}</h${hashes.length}>`;
    }

    return cleanTitle;
  });

  return processedContent;
}

export const processJavascriptBlocks = (markdownContent: string) => {
  const javascriptRegex = /```javascript\s*([^`]|\n)*```/g;
  const replacedContent = markdownContent.replace(javascriptRegex, (match) => {
    const startTagRegex = /```javascript/;
    const endTagRegex = /```/;
    const codeContent = match.replace(startTagRegex, '').replace(endTagRegex, '').trim();
    return `<pre><code class="language-javascript hljs">${hljs.highlightAuto(codeContent).value}</code></pre>`;
  });
  return replacedContent;
}

export const processTripleQuoteCodeBlocks = (markdownContent: string): string => {
  const tripleQuoteRegex = /```\s*([^`]|\n)*```/g;
  const replacedContent = markdownContent.replace(tripleQuoteRegex, (match) => {
    const replaceTagRegex = /```/;
    const codeContent = match.replace(replaceTagRegex, '').replace(replaceTagRegex, '').trim();
    return `<pre><code class="hljs">${hljs.highlightAuto(codeContent).value}</code></pre>`;
  });
  return replacedContent;
}

export const processCodeBlocks = (markdownContent: string): string => {
  const codeRegex = /`(.*?)`/g;
  const contentWithCodeBlocks = markdownContent.replace(codeRegex, (match, codeContent) => {
    return `<code>${codeContent}</code>`;
  });

  return contentWithCodeBlocks;
}

export const processMigrationGuideLinks = (markdownContent: string): string => {
  const regex = /\[(.*?)\]\((MigrationGuide.md)\)/g;
  const slugified = slugify('Migration guide');
  const result = markdownContent.replaceAll(regex, (match, linkText) => {
    // marked is constantly failing to recognize relative md-style links as links so we're we're using html here.
    return `<a href="#${slugified}">${linkText}</a>`;
  });
  return result;
}
