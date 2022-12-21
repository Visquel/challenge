import styles from "../styles/Template.module.css";
import Homestyles from "../styles/Home.module.css";

interface Props {
  children?: React.ReactNode;
}

const Template: React.FC<Props> = ({ children }) => {
  return (
    <>
      <div className={Homestyles.container}>
        <div className={Homestyles.areaA}>{children}</div>
        <div className={Homestyles.areaB}>
          <div className={styles.container}>
            <div className={styles.box}>
              <div className={styles.raitings}></div>
              <div className={styles.frame}>
                <div className={styles.picture}></div>
                <p className={styles.name}>Felicia Key, Los Angeles</p>
              </div>

              <div>
                <p className={styles.description}>
                  It’s been so easy and effortless to manage my agenda. Clients
                  are now happier than ever, all my energies can be dedicated to
                  them!{" "}
                </p>
              </div>
            </div>
            <div className={`${styles.box} ${styles.overlay}`}></div>
            <div className={`${styles.box} ${styles.overlay2}`}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Template;
