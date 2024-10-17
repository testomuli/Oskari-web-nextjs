'use client';
import allPosts from '@/_content/blog/';
import Card from '@/components/Cards/Card';
import Layout from '@/components/Layout';
import styles from '@/styles/blog.module.scss';
import { usePathname, useRouter } from 'next/navigation';
import BlogPageNavigationComponent, { BLOG_POSTS_PER_PAGE } from './blogPageNavigationComponent';
import { Suspense, useState } from 'react';
export default function BlogsPage() {
  const router = useRouter()
  const pathname = usePathname()

  const [page, setPage] = useState('1');
  const posts = allPosts.map((post) => {
      const image = post?.image ?
        post.image : (post?.imagesFromPost && post.imagesFromPost.length) > 0 ?
          post?.imagesFromPost[0] : null;
      const item = {
        title: post.title || '',
        date: new Date(post.date),
        image: image,
        description: post.excerpt,
        href: 'blog/' + post.slug,
        tags: post.tags,
      }
      return item
    }).sort((a, b) => b.date.getTime() - a.date.getTime())

  const currentPage = parseInt(page)
  const totalPages = Math.ceil(posts?.length / BLOG_POSTS_PER_PAGE)
  const paginatedPosts = posts?.slice(
    (currentPage - 1) * BLOG_POSTS_PER_PAGE,
    currentPage * BLOG_POSTS_PER_PAGE
  )

  const handleSetPage = (currentPage: number, queryString: string) => {
    setPage('' + currentPage);
    router.push(`${pathname}?${queryString}`)
  }


  return (
    <Layout heroTitle='Blog' heroSmall>
      <div className='container--content'>
        <div className={styles.blog__grid}>
          {paginatedPosts?.map((item) => <Card data={item} key={item.title} />)}
        </div>
      </div>
      <Suspense>
        <BlogPageNavigationComponent
          handleSetPage={handleSetPage}
          currentPage={currentPage}
          totalPages={totalPages}
          totalPosts={posts?.length}
          paginatedPostsLength={paginatedPosts.length}/>
      </Suspense>
    </Layout>
  )
}
