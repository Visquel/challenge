import SuccessInfo from "../components/successInfo";
import Template from "../components/Template";
import { useRouter } from "next/router";

export default function Root() {
  const router = useRouter();

  const email = router?.query?.email;
  const password = router?.query?.password;

  return (
    <>
      <Template
        children={<SuccessInfo values={{ email: email, password: password }} />}
      />
    </>
  );
}
