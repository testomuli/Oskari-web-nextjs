import { NavigationItemType } from '@/types/types'

export const NAVIGATION_ITEMS: Array<NavigationItemType> = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Discover Oskari',
    path: '/discover',
  },
  {
    name: 'Resources',
    path: '/resources',
    children: [
      {
        name: 'FAQ',
        path: '/resources/faq',
      },
      {
        name: 'Documentation',
        path: '/resources/docs',
      },
    ],
  },
  {
    name: 'Community',
    path: '/community',
  },
  {
    name: 'Blog',
    path: '/blog',
  },
  {
    name: 'Contribute',
    path: '/contribute',
  },
]
