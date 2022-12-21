import SignupForm from "../components/signupForm";
import Template from "../components/Template";

export default function Root() {
  return (
    <>
      <Template children={<SignupForm />} />
    </>
  );
}
