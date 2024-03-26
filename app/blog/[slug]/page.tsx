import * as blogEntries from '@/_content/blog/index.json';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
import { MDXRemote } from 'next-mdx-remote/rsc'

import HighlightBox from '@/components/HighlightBox'
import Layout from '@/components/Layout'
import Error from '@/components/Error'
import styles from '@/styles/blog.module.scss'
import { format } from 'date-fns'
import Link from 'next/link'
import { ArrowLeftIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'

const getBlogPageSerialized = async function(slug: string) {
  const pathToContentRoot = path.normalize(path.join(__dirname, '../../../../../_content/'));
  const pathToFile = '/blog/' + slug;
  const filePath = path.join(pathToContentRoot, pathToFile)
  const markdown = fs.readFileSync(filePath, 'utf8');

  return markdown;
}

const getPostBySlug = (slug: string) => {
    const found = blogEntries.find((entry) => {
        return (decodeURI(entry.slug) === decodeURI(slug))
    });

    return found;
}

export default async function SingleBlogPage({
    params,
  }: {
    params: { slug: string }
  }) {

    const post = getPostBySlug(params.slug);
    const fileName = post?.fileName || undefined;
    if (!post || !fileName) {
        return <Error text='No blog posts found' code='404' />
    }

    const markdown = await getBlogPageSerialized(fileName);
    return (
        <Layout heroSmall heroTitle='Blog'>
        <div className='container--content'>
            <div className='breadcrumbs mb-8 text-sm'>
            <Link
                href='/blog'
                className='flex gap-2 font-bold items-center text-gray-400 transition'
            >
                <ArrowLeftIcon className='h-6 w-6' />
                See all posts
            </Link>
            </div>
            <h2 className={styles.post__title}>{post.title}</h2>
            <div className={styles.post__date}>
            {format(new Date(post.date), 'yyyy-MM-dd')}
            </div>
            {(post.image) && (
            <Image
                src={post.image}
                alt={post.title}
                className=' w-full h-auto max-h[500px] object-cover rounded-3xl mb-16'
                width={1440}
                height={500}
            />
            )}
            <div className='md-content max-w-full' style={{ maxWidth: '100%', marginTop: 0 }}>
                <MDXRemote source={markdown} options={{ parseFrontmatter: true }} />
            </div>
        </div>
        {post.author && (
            <HighlightBox
                otter
                style={{
                    backgroundColor: 'var(--color-beige)',
                    marginTop: '10rem',
                    marginBottom: '10rem',
                }}
                contentStyles={{
                    display: 'flex',
                    flexDirection: 'column',
                    textAlign: 'left',
                    paddingTop: '4rem',
                    paddingBottom: '4rem',
                    alignItems: 'flex-start',
                }}
            >
                <span>Author</span>
                <span style={{ fontWeight: 'bold' }}>{post.author}</span>
            </HighlightBox>
        )}
        </Layout>
    );
}
