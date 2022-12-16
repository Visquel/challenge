import styles from '../styles/rightSide.module.css';

export default RightSide;

function RightSide() {

    return (
        <>
            <div className={styles.container}>
                <div className={styles.box}>
                    <div className={styles.raitings}></div>
                    <div className={styles.frame}>
                        <div className={styles.picture}></div>
                        <p className={styles.name}>Felicia Key, Los Angeles</p>
                    </div>

                    <div>
                        <p className={styles.description}>It’s been so easy and effortless to manage my agenda. Clients are now happier than ever, all my energies can be dedicated to them! </p>
                    </div>
                </div>
                <div className={`${styles.box} ${styles.overlay}`}>
                
                </div>
                <div className={`${styles.box} ${styles.overlay2}`}>
                
                </div>
            </div>
        </>
    )
}