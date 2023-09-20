import styles from '@/styles/documentcard.module.scss'

export default function DocumentCard({
  title,
  excerpt,
}: {
  title: string
  excerpt: string
}) {
  return (
    <div className={styles.documentCard}>
      <h3>{title}</h3>
      <p>{excerpt}</p>
    </div>
  )
}
