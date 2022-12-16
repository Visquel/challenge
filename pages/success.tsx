import SuccessInfo from "../components/successInfo";
import RightSide from "../components/rightSide";
import styles from '../styles/Home.module.css'

export default function Root() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.areaA}>
          <SuccessInfo></SuccessInfo>
        </div>

        <div className={styles.areaB}>
          <RightSide></RightSide>
        </div>
      </div>
    </>
  )
}