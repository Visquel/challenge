import successStyles from '../styles/success.module.css';
import Router from 'next/router'


export default SuccessInfo;

function SuccessInfo() {


    return (
        <>
        <div>
            <div className={successStyles.frame}>
                <div className={successStyles.back}>
                    <div className={successStyles.checkmark}>
                        <img src="vector.svg" alt="Success" className={successStyles.img}></img>
                    </div>
                </div>
                
                <h2 className={successStyles.h2}>Success!</h2>
                <p className={successStyles.pRegular}>Your account has been created successfully, lets help you set us up your studio.</p>
                <button className={successStyles.continueButton} onClick={() => Router.push('/dashboard')}>Continue</button>
            </div>
        </div>

      </>
    );
}