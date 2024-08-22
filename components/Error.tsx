import styles from '@/styles/error.module.scss'

export default function Error({ text, code }: { text: string; code?: string }) {
  return (
    <div className={styles.error}>
      <div className={styles.error__container}>
        {code && <div className={styles.error__code}>{code}</div>}
        <div className={styles.error__text}>{text}</div>
      </div>
    </div>
  )
}
