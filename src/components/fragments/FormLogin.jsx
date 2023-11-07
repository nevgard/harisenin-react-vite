import Button from "../elements/buttons/Button";
import InputForm from "../elements/inputs";
import { Link } from "react-router-dom";
const FormLogin = () => {
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center ">
        <div className="border flex flex-col max-w-sm p-5">
          <div className="title">
            <h2 className="text-3xl font-semibold ">Login</h2>
          </div>
          <div className="mt-3">
            <span className="text-md"> Welcome, please enter your details</span>
          </div>
          <form>
            <InputForm
              label="Username"
              type="text"
              placeholder="John Cena"
              name="username"
            ></InputForm>
            <InputForm
              label="Password"
              type="password"
              placeholder="********"
              name="password"
            ></InputForm>
          </form>
          <Button type="submit" text="Login" />
          <div className="flex justify-between items-center mt-3">
            <span className="text-sm">Dont have an account ?</span>
            <Link to="./register">
              {" "}
              <span className="text-xs font-semibold hover:text-blue-500">
                Sign Up
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default FormLogin;
