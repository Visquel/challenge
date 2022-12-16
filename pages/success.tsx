import SuccessInfo from "../components/successInfo";
import RightSide from "../components/rightSide";
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'


export default function Root() {

    const router = useRouter();

    const userInput = {
        email: router.query.email,
        password: router.query.password
    }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.areaA}>
          <SuccessInfo values={userInput}></SuccessInfo>
        </div>

        <div className={styles.areaB}>
          <RightSide></RightSide>
        </div>
      </div>
    </>
  )
}