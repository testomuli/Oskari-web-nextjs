import * as blogEntries from '@/_content/blog/index.json';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

import Layout from '@/components/Layout'
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote/rsc'
import Error from '@/components/Error';

type BlogEntryFrontmatter = {
  title: string,
  excerpt: string,
  url: string,
  image: string,
  imagesFromPost: string[],
  tags: string[]
};

type BlogEntry = {
  frontmatter: BlogEntryFrontmatter
};

const getBlogPageSerialized = async function(slug: string) {
  const pathToContentRoot = path.normalize(path.join(__dirname, '../../../../../_content/'));
  const pathToFile = '/blog/' + slug;
  const filePath = path.join(pathToContentRoot, pathToFile)
  const markdown = fs.readFileSync(filePath, 'utf8');

  return markdown;
}

const getFilenameBySlug = (slug: string): string | null => {
    const found = blogEntries.find((entry) => {
        return (decodeURI(entry.slug) === decodeURI(slug))
    });

    return found?.fileName || null;
}

export default async function SingleBlogPage({
    params,
  }: {
    params: { slug: string }
  }) {

    const fileName = getFilenameBySlug(params.slug);
    if (!fileName) {
        return <Error text='No blog posts found' code='404' />
    }

    const markdown = await getBlogPageSerialized(fileName);
    // TODO: probably wouldn't need to call serialize here, we can get the frontmatter from the json
    const serialized: BlogEntry = await serialize(markdown, { parseFrontmatter: true })
    return <Layout heroTitle={serialized?.frontmatter?.title} heroSmall>
        <MDXRemote source={markdown} options={{ parseFrontmatter: true }} />
      </Layout>;

}
