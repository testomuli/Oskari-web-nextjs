import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/20/solid';
import { useSearchParams } from 'next/navigation';
import React, { useCallback } from 'react';

export const BLOG_POSTS_PER_PAGE = 9
interface NavigationComponentProps {
  currentPage: number;
  totalPages: number;
  totalPosts: number;
  handleSetPage: (currentPage: number, queryString: string) => void;
  paginatedPostsLength: number;
};

export default function BlogPageNavigationComponent({ handleSetPage, currentPage, totalPages, totalPosts, paginatedPostsLength }: NavigationComponentProps) {
  const searchParams = useSearchParams()!
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams)
      params.set(name, value)

      return params.toString()
    },
    [searchParams]
  )

  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  )

  return <>
    <nav className='mt-16 mb-4' aria-label='Page navigation'>
    <div
      className='grid grid-cols-[0.5fr_2fr_0.5fr] gap-4 items-center'
      style={{ gridColumn: '1' }}
    >
      {currentPage > 1 && (
        <div className='flex justify-start'>
          <button
            onClick={() => handleSetPage(currentPage -1, createQueryString('page', (currentPage - 1).toString()))}
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
            onChange={(e) => handleSetPage(parseInt(e.target.value), createQueryString('page', parseInt(e.target.value).toString()))}
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
            onClick={() => handleSetPage(currentPage + 1, createQueryString('page', (currentPage + 1).toString()))}
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
    {paginatedPostsLength > 0
      ? `Showing ${(currentPage - 1) * BLOG_POSTS_PER_PAGE + 1} to ${Math.min(
          currentPage * BLOG_POSTS_PER_PAGE,
          totalPosts
        )} of ${totalPosts} posts`
      : 'No entries to display'}
  </div>
  </>;
}