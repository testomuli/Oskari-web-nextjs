import allPosts from '@/_content/blog/';
import HighlightBox from '@/components/HighlightBox'
import Layout from '@/components/Layout'
import Error from '@/components/Error'
import styles from '@/styles/blog.module.scss'
import { format } from 'date-fns'
import Link from 'next/link'
import { ArrowLeftIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import { getMarkdownContentAsHtml } from '@/lib/utils';

const getPostBySlug = (slug: string) => {
    const found = allPosts.find((entry) => {
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
    if (!post?.path) {
        return <Error text='No blog posts found' code='404' />
    }

    // should we have some dynamic content at some point, it would reside here.
    // TODO: might wanna rethink the path/structure, if we wanna have excels or pdfs or whatnot in resources...?
    const blogsResourcesPath = '/assets/blog/';
    const html = await getMarkdownContentAsHtml(post.path, blogsResourcesPath);
    return (
        <Layout heroSmall heroTitle='Blog'>
        <div className='container--content'>
            <div className='breadcrumbs mb-8 text-sm'>
            <Link
                href='/blog'
                className='flex gap-2 font-bold items-center text-gray-500 transition'
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
                <div dangerouslySetInnerHTML={{ __html: html || '' }} />
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
