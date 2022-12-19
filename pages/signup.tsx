import SignupForm from "../components/signupForm";
import RightSide from "../components/rightSide";
import styles from "../styles/Home.module.css";

export default function Root() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.areaA}>
          <SignupForm />
        </div>

        <div className={styles.areaB}>
          <RightSide />
        </div>
      </div>
    </>
  );
}
