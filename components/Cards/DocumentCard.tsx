import styles from '@/styles/documentcard.module.scss'

export default function DocumentCard({ title }: { title: string }) {
  return (
    <div className={styles.documentCard}>
      <h3>{title}</h3>
    </div>
  )
}
