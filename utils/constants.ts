import { NavigationItemType } from '@/types/types'

export const NAVIGATION_ITEMS: Array<NavigationItemType> = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Discover Oskari',
    path: '/discover',
    children: [
      {
          name: 'Getting started',
          path: '/discover/gettingstarted',
      },
      {
        name: 'Functionalities',
        path: '/discover/functionalities',
      },
      {
        name: 'Use cases',
        path: '/discover/use-cases',
      },
    ],
  },
  {
    name: 'Documentation',
    path: '/documentation/docs/latest/',
    children: [
      {
        name: 'FAQ',
        path: '/documentation/faq',
      },
      {
        name: 'API',
        path: '/documentation/api',
      },
      {
        name: 'RPC Example',
        path: '/examples/rpc-api/'
      },
      {
        name: 'Database',
        path: 'db/index.html'
      }
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

export const jointLogos = [
  'tilastokeskus_fi 1.png',
  'tampere.png',
  'hsy.png',
  'museovirasto.png',
  'nls.png',
  'varsinais_suomen_liitto.png',
  'sitowise.png',
  'vayla.png',
]

export const commitee = [
  {
    name: 'Sami Mäkinen',
    img: '/assets/images/people/Sami.jpeg',
    title: 'Chair',
    organisation: "National Land Survey of Finland",
  },
  {
    name: 'Jussi Arpalahti',
    img: '',
    title: '',
  },
  {
    name: 'Timo Sallinen',
    img: '',
    title: '',
  },
  {
    name: 'Marko Kuosmanen',
    img: '/assets/images/people/Marko.jpeg',
    title: '',
  },
  {
    name: 'Oskari Rintamäki',
    img: '/assets/images/people/Oskari.jpeg',
    title: '',
  },
  {
    name: 'Janne Heikkilä',
    img: '/assets/images/people/Janne.png',
    title: '',
  },
  {
    name: 'Anniina Iikkanen',
    img: '/assets/images/people/Anniina.jpeg',
    title: '',
  },
]

export const UNRELEASED_VERSION = 'unreleased';
export const LATEST_STABLE_VERSION = 'latest';
export const UNRELEASED_VERSION_LABEL = 'Nightly build';
export const LATEST_STABLE_VERSION_LABEL = 'Latest stable';