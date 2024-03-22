// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

import Layout from '@/components/Layout'
import styles from '@/styles/blog.module.scss'
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote/rsc'

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




//export const getServerSideProps = async function() {
export const getBlogPageSerialized = async function() {
  const pathToContentRoot = path.normalize(path.join(__dirname, '/../../../../_content/'));
  const pathToFile = '/blog/Information service Liiteri - Data from our everyday environment.md';
  const filePath = path.join(pathToContentRoot, pathToFile)
  const markdown = fs.readFileSync(filePath, 'utf8');

  return markdown;
}

export default async function SingleBlogPage() {

  const markdown = await getBlogPageSerialized();
  const serialized: BlogEntry = await serialize(markdown, { parseFrontmatter: true })
  return <Layout heroTitle={serialized?.frontmatter?.title} heroSmall>
      <MDXRemote source={markdown} options={{ parseFrontmatter: true }} />
    </Layout>;
}
