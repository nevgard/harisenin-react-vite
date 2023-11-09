import { useEffect, useState } from "react";
import Navbar from "../components/fragments/Navbar";
import { getPreviewProduct } from "../services/product.service";
import { getFeaturedProduct } from "../services/product.service";
import CardProduct from "../components/fragments/CardProduct";
import Button from "../components/elements/buttons/Button";
import { Link } from "react-router-dom";
import Footer from "../components/fragments/Footer";
const HomePage = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [previewProducts, setPreviewProducts] = useState([]);

  useEffect(() => {
    getPreviewProduct((data) => {
      setPreviewProducts(data);
    });
  }, []);
  useEffect(() => {
    getFeaturedProduct((data) => {
      setFeaturedProducts(data);
    });
  }, []);
  return (
    <>
      <Navbar></Navbar>
      <div className="flex flex-wrap">
        <section id="heroSection">
          <div className="w-full ">
            <img
              src="../images/hero.jpg
            "
              className="h-96 w-screen object-cover"
              alt=""
            />
          </div>
        </section>
        <section className="w-full ">
          <div className="mt-24">
            <h2 className="text-center font-light text-4xl">Best Seller</h2>
          </div>
          <div className="flex justify-center mt-12">
            {previewProducts.length > 0 &&
              previewProducts.map((product) => (
                <CardProduct key={product.id}>
                  <CardProduct.Header
                    image={product.image}
                    name={product.title}
                  />
                  <CardProduct.Body
                    desc={product.description}
                  ></CardProduct.Body>
                </CardProduct>
              ))}
          </div>
          <div className="text-center mt-6">
            <Link to="/products">
              <Button
                text="More Products"
                classname="bg-black text-white p-3"
              />
            </Link>
          </div>
        </section>
        <section className="w-full">
          <div className="mt-24">
            <h2 className="text-center font-light text-4xl">
              Featured Product
            </h2>
          </div>
          <div className="flex flex-wrap justify-center mt-12">
            {featuredProducts.length > 0 &&
              featuredProducts.map((product) => (
                <CardProduct key={product.id}>
                  <CardProduct.Header
                    image={product.image}
                    name={product.title}
                  />
                  <CardProduct.Body
                    desc={product.description}
                  ></CardProduct.Body>
                </CardProduct>
              ))}
          </div>
          <div className="text-center mt-6 ">
            <Link to="/products">
              <Button text="More Products" classname="bg-black p-3 text-white">
                More Products
              </Button>
            </Link>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
