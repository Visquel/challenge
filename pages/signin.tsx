import SigninForm from "../components/signinForm";
import Template from "../components/Template";

export default function Root() {
  return (
    <>
      <Template children={<SigninForm />} />
    </>
  );
}
