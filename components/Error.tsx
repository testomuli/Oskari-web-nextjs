import styles from '@/styles/error.module.scss'

export default function Error({ text, code }: { text: string; code?: string }) {
  return (
    <div className={styles.error}>
      <div className={styles.error__container}>
        {code && <span className={styles.error__code}>{code}</span>}
        <span className={styles.error__text}>{text}</span>
      </div>
    </div>
  )
}
