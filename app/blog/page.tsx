import * as blogEntries from '@/_content/blog/index.json';
import Card from '@/components/Cards/Card';
import Layout from '@/components/Layout';
import styles from '@/styles/blog.module.scss'
import { CardItemType } from '@/types/types';

const transformItem = (item): CardItemType => {
  const transformed: CardItemType = {
    title: item.title,
    date: new Date(item.date),
    image: item.image,
    description: item.excerpt,
    tags: item.tags,
    href: 'blog/' + item.slug
  }
  return transformed;
}

export default function BlogsPage() {

  return <Layout heroTitle='Blog' heroSmall>
      <div className='container--content'>
        <div className={styles.blog__grid}>
          {blogEntries.map((item) => <Card data={transformItem(item)} key={item.slug} />)}
        </div>
      </div>
  </Layout>;
}