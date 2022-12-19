import signinStyles from "../styles/Signin.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import Router from "next/router";
import Button from "./Button";
import Label from "./Label"

const loginSchema = Yup.object().shape({
  password: Yup.string().required("Incorrect email address or password"),
  email: Yup.string()
    .email("Invalid email")
    .required("Please enter your email in the name@website.com format"),
});

const handleSubmit = (values: { email: string; password: string; }, { setSubmitting }: any) => {
  setTimeout(() => {
    setSubmitting(false);
    Router.push({
      pathname: "/success",
      query: { email: values.email, password: values.password },
    });
  }, 500);
};

function Signup() {
  return (
    <>
      <div className={signinStyles.frame}>
        <div className={signinStyles.heading}>
          <h1 className={signinStyles.h1}>Welcome</h1>
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
                    <Label 
                      className={signinStyles.labels} 
                      text="Email" 
                    />
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
                    onClick={() =>
                      console.log("Submiting...")
                    }
                    className={signinStyles.submitButton}
                    type="submit"
                    disabled={isSubmitting}
                    text="Sign Up"
                  />
                </Form>
              );
            }}
          </Formik>
          <div className={signinStyles.content}>
            <p className={signinStyles.or}>or</p>
          </div>
          <span className={signinStyles.pMedium}>
            Already have an account?
            <Link href="/" className={signinStyles.link}>
              {" "}
              Sign in
            </Link>
          </span>
        </div>
      </div>
    </>
  );
}

export default Signup;
