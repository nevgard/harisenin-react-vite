import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="w-full text-white bg-black mt-24">
      <div className="flex  mx-12 gap-x-24 items-center text-center mt-12 mb-12">
        <div className="flex flex-col text-left">
          <h1 className="font-bold text-3xl font-serif">KELONTONG</h1>
          <span className="text-sm mt-3">Pekalongan, Indonesia</span>
          <span className="text-sm">+62 123 456 789</span>
          <span className="text-sm">kelontong@mail.com</span>
        </div>
        <div className="flex flex-col text-left">
          <h1 className="text-xl font-semibold">Usable Link</h1>

          <span className="text-sm mt-3 hover:scale-105">
            <Link to="./login">Login</Link>
          </span>
          <span className="text-sm hover:scale-105">
            <Link to="./products">Product</Link>
          </span>
          <span className="text-sm hover:scale-105">
            {" "}
            <Link to="/">Home</Link>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
