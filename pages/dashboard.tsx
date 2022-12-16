import Link from 'next/link'
import styles from '../styles/dashboard.module.css'
import { useEffect } from "react";
import { useRouter } from 'next/router'

export default function Root() {

    const router = useRouter();
    useEffect(() => {}, [router.query]);

  return (
    <>
    <div className={styles.container}>
        <p className={styles.welcome}>Welcome {router.query.email}, <Link href="/" className={styles.logout}> Log out</Link> </p>
    </div>
    </>
  )
}