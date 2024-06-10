'use client';
import allPosts from '@/_content/blog/';
import Card from '@/components/Cards/Card';
import Layout from '@/components/Layout';
import styles from '@/styles/blog.module.scss';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/20/solid';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react'

export default function BlogsPage() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()!

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

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams)
      params.set(name, value)

      return params.toString()
    },
    [searchParams]
  )

  const POSTS_PER_PAGE = 9

  const page = searchParams.get('page') || '1'
  const currentPage = parseInt(page)
  const totalPages = Math.ceil(posts?.length / POSTS_PER_PAGE)
  const paginatedPosts = posts?.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  )

  const handleSetPage = (page: number) => {
    router.push(`${pathname}?${createQueryString('page', page.toString())}`)
  }

  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  )

  return (
    <Layout heroTitle='Blog' heroSmall>
      <div className='container--content'>
        <div className={styles.blog__grid}>
          {paginatedPosts?.map((item) => <Card data={item} key={item.title} />)}
        </div>
        <nav className='mt-16 mb-4' aria-label='Page navigation'>
          <div
            className='grid grid-cols-[0.5fr_2fr_0.5fr] gap-4 items-center'
            style={{ gridColumn: '1' }}
          >
            {currentPage > 1 && (
              <div className='flex justify-start'>
                <button
                  onClick={() => handleSetPage(currentPage - 1)}
                  className='bg-black text-white rounded-full w-12 h-12 grid place-content-center relative'
                  aria-label={`Go to page ${currentPage - 1}`}
                >
                  <ArrowLeftIcon className='w-6 h-6' />
                </button>
              </div>
            )}
            <div style={{ gridColumn: '2' }} className='flex justify-center'>
              <div className='flex w-full justify-center gap-4 items-center'>
                <label
                  htmlFor='page-number'
                  className='block font-semibold text-sm'
                >
                  Page
                </label>
                <select
                  id='page-number'
                  className='bg-black text-white rounded-lg focus:ring-blue-500 focus:border-blue-500 block  dark:placeholder-gray-400 text-center h-8 w-14'
                  onChange={(e) => handleSetPage(parseInt(e.target.value))}
                  value={currentPage}
                >
                  {pageNumbers.map((number) => (
                    <option key={number} value={number}>
                      {number}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            {currentPage < totalPages && (
              <div className='flex justify-end'>
                <button
                  onClick={() => handleSetPage(currentPage + 1)}
                  className='bg-black text-white rounded-full w-12 h-12 grid place-content-center relative'
                  aria-label={`Go to page ${currentPage + 1}`}
                >
                  <ArrowRightIcon className='w-6 h-6' />
                </button>
              </div>
            )}
          </div>
        </nav>
        <div className='grid place-content-center text-center text-gray-500 text-sm'>
          {paginatedPosts && paginatedPosts.length > 0
            ? `Showing ${(currentPage - 1) * POSTS_PER_PAGE + 1} to ${Math.min(
                currentPage * POSTS_PER_PAGE,
                posts.length
              )} of ${posts.length} posts`
            : 'No entries to display'}
        </div>
      </div>
    </Layout>
  )
}
