'use client'
import { Post, allPosts } from '@/.contentlayer/generated'
import Card from '@/components/Cards/Card'
import Layout from '@/components/Layout'
import styles from '@/styles/blog.module.scss'
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/20/solid'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useCallback } from 'react'

export default function BlogPage() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()!

  const posts = allPosts
    ?.map((post: Post) => {
      const item = {
        title: post.title || '',
        date: new Date(post.date) || '',
        description: post.excerpt,
        href: post.url,
        image: post.imagesFromPost?.[0] || null,
      }
      return item
    })
    .sort((a, b) => b.date.getTime() - a.date.getTime())

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams)
      params.set(name, value)

      return params.toString()
    },
    [searchParams]
  )

  const POSTS_PER_PAGE = 2

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

  const filteredPageNumbers = pageNumbers.filter((number) => {
    const firstPost = number === 1
    const lastPost = number === totalPages
    const nearestThreePages =
      number === currentPage - 1 ||
      number === currentPage ||
      number === currentPage + 1
    if (firstPost || lastPost || nearestThreePages) return true
  })

  return (
    <Layout heroTitle='Blog' heroSmall>
      <div className='container--content'>
        <div className={styles.blog__grid}>
          {paginatedPosts?.map((item) => <Card data={item} key={item.title} />)}
        </div>
        <nav className='mt-16 mb-8' aria-label='Page navigation'>
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
              {filteredPageNumbers.map((number) => (
                <button
                  key={number}
                  onClick={() => handleSetPage(number)}
                  className='bg-black text-white w-12 h-12 flex justify-center items-center first:rounded-l-full last:rounded-r-full  hover:bg-gray-900'
                  aria-label={`Go to page ${number}`}
                >
                  {number}
                </button>
              ))}
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
        <div className='grid place-content-center text-center text-gray-400'>
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
