import Signin from "./signin";
import RightSide from "./rightSide";
import styles from '../styles/Home.module.css'

export default function Root() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.areaA}>
          <Signin></Signin>
        </div>

        <div className={styles.areaB}>
          <RightSide></RightSide>
        </div>
      </div>
    </>
  )
}