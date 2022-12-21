import Markup from "../styles/Markup.module.css";
import signinStyles from "../styles/Signin.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import Router from "next/router";
import Button from "../components/Button";
import Label from "../components/Label";
import Template from "../components/Template";

interface Props {
  children?: React.ReactNode;
}

const loginSchema = Yup.object().shape({
  password: Yup.string().required("Incorrect email address or password"),
  email: Yup.string()
    .email("Invalid email")
    .required("Please enter your email in the name@website.com format"),
});

const handleSubmit = (
  values: { email: string; password: string },
  { setSubmitting }: any
) => {
  setTimeout(() => {
    setSubmitting(false);
    Router.push({
      pathname: "/dashboard",
      query: { email: values.email, password: values.password },
    });
  }, 500);
};

const Signin: React.FC<Props> = ({ children }) => {
  return (
    <>
      <div className={Markup.container}>
        <div className={Markup.areaA}>
          <div className={signinStyles.frame}>
            <div className={signinStyles.heading}>
              <h1 className={signinStyles.h1}>Welcome Back</h1>
              <p className={signinStyles.pRegular}>
                Studio management just got SO much easier.
              </p>
            </div>

            <div className={signinStyles.form}>
              <Formik
                initialValues={{ email: "", password: "" }}
                validationSchema={loginSchema}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting }) => {
                  return (
                    <Form>
                      <div>
                        <Label className={signinStyles.labels} text="Email" />
                        <Field
                          type="email"
                          name="email"
                          className={signinStyles.fields}
                          placeholder="Your email"
                        />
                        <ErrorMessage
                          name="email"
                          component="div"
                          className={signinStyles.errors}
                        />
                      </div>
                      <div>
                        <Label
                          className={signinStyles.labels}
                          text="Password"
                        />
                        <Field
                          type="password"
                          name="password"
                          className={signinStyles.fields}
                          placeholder="Your password"
                        />
                        <ErrorMessage
                          name="password"
                          component="div"
                          className={signinStyles.errors}
                        />
                      </div>
                      <Button
                        onClick={() => console.log("Submiting...")}
                        className={signinStyles.submitButton}
                        type="submit"
                        disabled={isSubmitting}
                        text="Sign In"
                      />
                    </Form>
                  );
                }}
              </Formik>
              <div className={signinStyles.content}>
                <p className={signinStyles.or}>or</p>
              </div>
              <span className={signinStyles.pMedium}>
                Don't have an account?
                <Link href="/signup" className={signinStyles.link}>
                  {" "}
                  Sign Up
                </Link>
              </span>
            </div>
          </div>
        </div>
        <div className={Markup.areaB}>
          <Template />
        </div>
      </div>
    </>
  );
};

export default Signin;
