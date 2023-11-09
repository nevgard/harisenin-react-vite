import { Link } from "react-router-dom";
import { getUsername } from "../../services/auth.service";
import { useEffect, useState, useRef } from "react";
import Button from "../elements/buttons/Button";
const Navbar = (props) => {
  const [username, setUsername] = useState("");
  const token = localStorage.getItem("token");
  const { handleShowCart } = props;
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };
  useEffect(() => {
    if (token) {
      setUsername(getUsername(token));
    }
  }, []);

  return (
    <div className="flex gap-x-5 p-5 items-center shadow">
      <div className="font-bold font-serif">
        <Link to="/">KELONTONG</Link>
      </div>
      <div className="self-end hover:scale-110">
        <Link to="/products">Products</Link>
      </div>
      <div className="absolute right-0 mr-5 flex gap-x-5">
        {username.length > 0 ? (
          <div>
            <span className="font-semibold">{username} </span>
            <Button
              text="Logout"
              classname="ml-3 font-semibold hover:text-red-500"
              type="button"
              onClick={handleLogout}
            ></Button>
          </div>
        ) : (
          <Link to="/login">Login</Link>
        )}

        <div onClick={handleShowCart}>
          <img
            width="25"
            height="25"
            src="https://img.icons8.com/ios-glyphs/30/shopping-cart--v1.png"
            alt="shopping-cart--v1"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
