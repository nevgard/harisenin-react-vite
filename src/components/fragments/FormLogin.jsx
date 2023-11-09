import { login } from "../../services/auth.service";
import Button from "../elements/buttons/Button";
import InputForm from "../elements/inputs";
import { useState } from "react";
import { Link } from "react-router-dom";

const FormLogin = () => {
  const [loginFailed, setLoginFailed] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
    };

    login(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res);
        window.location.href = "/products";
      } else {
        setLoginFailed(res.response.data);
      }
    });
  };

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
          <form onSubmit={handleLogin}>
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

            <Button
              type="submit"
              text="Login"
              classname="bg-black p-3 text-white w-full"
            />
          </form>
          <div className="flex justify-between items-center mt-3">
            <span className="text-sm">Dont have an account ?</span>
            <Link to="./register">
              {" "}
              <span className="text-xs font-semibold hover:text-blue-500">
                Sign Up
              </span>
            </Link>
          </div>
          {loginFailed && <div>{loginFailed}</div>}
        </div>
      </div>
    </>
  );
};
export default FormLogin;
