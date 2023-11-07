import FormLogin from "../components/fragments/FormLogin";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div>
      <FormLogin />
      <Link to="./register">Sign Up</Link>
    </div>
  );
};

export default LoginPage;
