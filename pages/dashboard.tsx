import Link from 'next/link'
import styles from '../styles/dashboard.module.css'

export default function Root() {
  return (
    <>
    <div className={styles.container}>
        <p className={styles.welcome}>Welcome [ user.email ], <Link href="/" className={styles.logout}> Log out</Link> </p>
    </div>
    </>
  )
}