import styles from '@/styles/roadmap.module.scss'

export default function RoadMap({ children }: { children: React.ReactNode }) {
  return <div className={styles.roadMap}>{children}</div>
}
