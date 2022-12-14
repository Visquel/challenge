import signinStyles from '../styles/Signin.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";


export default Signin;

function Signin() {

    const loginSchema = Yup.object().shape({
        password: Yup.string()
          .min(8, "Too Short!")
          .max(50, "Too Long!")
          .required("Incorrect email address or password"),
        email: Yup.string().email("Invalid email").required("Please enter your email in the name@website.com format")
      });

      const handleSubmit = (values: any, { setSubmitting }: any) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      };


    return (
        <>
        <div className={signinStyles.frame}>
            <div className={signinStyles.heading}>
                <h1 className={signinStyles.h1}>Welcome</h1>
                <p className={signinStyles.pRegular}>Studio management just got SO much easier.</p>   
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
                            <label className={signinStyles.labels}>
                                Email 
                                <Field type="email" name="email" className={signinStyles.fields} placeholder="Your email"/>
                                <ErrorMessage name="email" component="div" />
                            </label>
                            <label className={signinStyles.labels}>
                                Password
                                <Field type="password" name="password" className={signinStyles.fields} placeholder="Your password"/>
                                <ErrorMessage name="password" component="div" />
                            </label>
                            <button type="submit" className={signinStyles.submitButton} disabled={isSubmitting}>
                                Sign Up
                            </button>
                        </Form>
                    );
                }}
                </Formik>
                <div className={signinStyles.content}>
                    <p className={signinStyles.or}>or</p>
                </div>
                <span className={signinStyles.pMedium}>
                    Already have an account? 
                    <a href="/login" className={signinStyles.link}> Sign in</a>
                </span>
            </div>
        </div>

      </>
    );
}