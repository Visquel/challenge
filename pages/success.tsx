import Markup from "../styles/Markup.module.css";
import successStyles from "../styles/success.module.css";
import Router from "next/router";
import Button from "../components/Button";
import { useRouter } from "next/router";
import Template from "../components/Template";

export default function Root() {
  const router = useRouter();

  const email = router?.query?.email;
  const password = router?.query?.password;

  return (
    <>
      <div className={Markup.container}>
        <div className={Markup.areaA}>
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
              Your account has been created successfully, lets help you set us
              up your studio.
            </p>
            <Button
              onClick={() =>
                Router.push({
                  pathname: "/dashboard",
                  query: {
                    email: email,
                    password: password,
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
        <div className={Markup.areaB}>
          <Template />
        </div>
      </div>
    </>
  );
}
