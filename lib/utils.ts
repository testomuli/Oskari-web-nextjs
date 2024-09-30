import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { MERMAID_SNIPPET, mdToHtml } from './customMarked'
import { insertIdsToHeaders, processAllLinks, processCodeBlocks, processHeaders, processInternalMDLinks, processMermaidCodeBlocks, processLanguageSpecificCodeBlocks, processMigrationGuideLinks, processTripleQuoteCodeBlocks, updateMarkdownHtmlStyleTags, updateMarkdownImagePaths } from './markdownToHtml'
import { MarkdownFileMetadata, VersionDocType } from '@/types/types'

function compileMarkdownToHTML(markdown: string, startingSectionNumber: string): {
  html: string
  anchorLinks: VersionDocType['anchorLinks']
} {
  const { content } = matter(markdown)
  const markedHtml = mdToHtml(content)
  const { html, anchorLinks } = insertIdsToHeaders(markedHtml, startingSectionNumber)
  return {
    html,
    anchorLinks,
  }
}
export async function getVersionIndex(version: string, fetchHtmlContent: boolean = false) {
  const rootFolder = `_content/docs/${version}`;
  if (!fs.existsSync(rootFolder) || !fs.statSync(rootFolder).isDirectory()) {
    return null;
  }
  const indexJSON = (await import(`_content/docs/${version}/index.js`)).default;

  if (fetchHtmlContent) {
    const imagesRuntimePath = '/assets/docs/' + version + '/resources/';
    await indexJSON.forEach(async (element: MarkdownFileMetadata) => {
      const { html, anchorLinks } = await readAndConcatMarkdownFiles(element, imagesRuntimePath, indexJSON, element.title);
      element.anchorLinks = anchorLinks;
      element.html = html;
    });
  }

  return indexJSON;
}

export const readMarkdownFile = async function(filePath: string, imagesPath: string = '') {
  const fullPath = path.normalize(path.join(process.cwd(), filePath));
  let markdown = fs.readFileSync(fullPath, 'utf8');
  markdown = processMarkdown(markdown, imagesPath);
  return markdown;
};

export const readAndConcatMarkdownFiles = async function(parentItem: MarkdownFileMetadata, imagesPath: string = '', indexJSON: MarkdownFileMetadata[] = [], activeSectionSlug: string = '') {
  let markdownAll = '';
  parentItem.children.forEach(element => {
    const cwdPath = path.resolve(process.cwd());
    const fullPath = path.normalize(path.join(cwdPath, element.path));
    const markdown = fs.readFileSync(fullPath, 'utf8');
    let { content } = matter(markdown);

    // Replace every # with ## in changelog to avoid additional no 1 headings
    // parentItem = the directory
    // element = file.
    // So, we are replacing every # heading with ## heading, unless it's the Changelog file itself...
    if (isReplacableChangeLogItem(parentItem.title, element.fileName)) {
      content = replaceLevelOneHeadingsWithLevelTwo(content)
    }

    markdownAll += content +'\r\n\r\n';
  });

  markdownAll = processMarkdown(markdownAll, imagesPath, indexJSON, activeSectionSlug);

  const compiled = compileMarkdownToHTML(markdownAll, parentItem.ordinal || '1');
  compiled.html = injectMermaid(compiled.html);
  return compiled;
};

// inject script to make mermaid js work its magic
const injectMermaid = (htmlContent: string) => {
  if (!htmlContent || !htmlContent.includes(MERMAID_SNIPPET)) {
    // Mermaid syntax not present, return as-is
    return htmlContent;
  }
  // Inject script at the end
  return htmlContent + `<script src="https://cdn.jsdelivr.net/npm/mermaid@11.2.0/dist/mermaid.min.js"></script>
    <script>
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
    </script>
    `;
}
// ThemeVariables could also have tertiaryColor: '#f00'


/** Return true if this is a file under <nn> Changelog but not the changelog.md file itself, cos that's a no 1 heading we DO wanna keep. */
export const isReplacableChangeLogItem = (parentTitle: string, elementFileName: string) => {
  const regex = /^[0-9]+ Changelog$/;
  return regex.test(parentTitle) && elementFileName !== 'Changelog.md';
}

/** cleans up html tags from a given string (used for cleaning up a heading from badges in documentation toc)  */
export const cleanTags = (htmlString: string) => {
  return htmlString.replace(/<[^>]+>/g, '');
}

const replaceLevelOneHeadingsWithLevelTwo = (markdown: string): string => {
  const headerRegex = /^# (.*)$/gm;
  const replacedString = markdown.replace(headerRegex, '## $1');
  return replacedString;
}

const processMarkdown = (markdown: string, imagesPath: string, indexJSON: MarkdownFileMetadata[] = [], activeSectionTitle: string = '') => {
  markdown = updateMarkdownImagePaths(markdown, imagesPath);
  markdown = updateMarkdownHtmlStyleTags(markdown);
  markdown = processHeaders(markdown);
  // migration guide first, specific treatment for that
  markdown = processMigrationGuideLinks(markdown);

  //documentation internal links to other mds to work with the compiled version
  //Note! At this point the following condition is true only for documentation-section
  if (indexJSON && activeSectionTitle) {
    markdown = processInternalMDLinks(markdown, indexJSON, activeSectionTitle);
  }

  //process rest of the links from md style -> <a href... to help the lib that's supposed to be doing this in its efforts.
  markdown = processAllLinks(markdown);

  // these are dependent to be run in this order
  markdown = processMermaidCodeBlocks(markdown);
  markdown = processLanguageSpecificCodeBlocks(markdown, 'javascript');
  markdown = processLanguageSpecificCodeBlocks(markdown, 'java');
  markdown = processLanguageSpecificCodeBlocks(markdown, 'sql');
  markdown = processLanguageSpecificCodeBlocks(markdown, 'json');

  markdown = processTripleQuoteCodeBlocks(markdown);
  markdown = processCodeBlocks(markdown);
  return markdown;
}

export const getMarkdownContentAsHtml = async function(mdFilePath: string, imagesFilePath: string) {
  const markdown = await readMarkdownFile(mdFilePath, imagesFilePath);
  const content = matter(markdown).content;
  return mdToHtml(content);
}
