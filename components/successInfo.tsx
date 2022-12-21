import successStyles from "../styles/success.module.css";
import Router from "next/router";
import Button from "./Button";

function SuccessInfo(props: { values: { email: any; password: any } }) {
  return (
    <>
      <div>
        <div className={successStyles.frame}>
          <div className={successStyles.back}>
            <div className={successStyles.checkmark}>
              <img
                src="vector.svg"
                alt="Success"
                className={successStyles.img}
              ></img>
            </div>
          </div>

          <h2 className={successStyles.h2}>Success!</h2>
          <p className={successStyles.pRegular}>
            Your account has been created successfully, lets help you set us up
            your studio.
          </p>
          <Button
            onClick={() =>
              Router.push({
                pathname: "/dashboard",
                query: {
                  email: props.values.email,
                  password: props.values.password,
                },
              })
            }
            type="submit"
            className={successStyles.continueButton}
            disabled={false}
            text="Continue"
          />
        </div>
      </div>
    </>
  );
}

export default SuccessInfo;
