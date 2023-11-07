import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="flex gap-x-5 p-5 shadow">
      <div className="font-bold font-serif">
        <Link to="/">KELONTONG</Link>
      </div>
      <div className="self-end">
        <Link to="/products">Products</Link>
      </div>
      <div className="absolute right-0 mr-5 flex gap-x-5">
        <div>
          <Link to="/login">Login</Link>
        </div>
        <div>User</div>
        <div>
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
