import { useEffect, useState } from "react";
import Navbar from "../components/fragments/Navbar";
import { getPreviewProduct } from "../services/product.service";
import CardProduct from "../components/fragments/CardProduct";
const HomePage = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getPreviewProduct((data) => {
      setProducts(data);
    });
  });
  return (
    <>
      <Navbar></Navbar>
      <div className="flex flex-wrap">
        <section id="heroSection">
          <div className="w-full">
            <img
              src="../images/hero.jpg
            "
              className="h-96 w-screen object-cover"
              alt=""
            />
          </div>
        </section>
        <section className="w-full ">
          <div className="mt-5">
            <h2 className="text-center font-semibold text-3xl">Best Seller</h2>
          </div>
          <div className="flex justify-center mt-5">
            {products.length > 0 &&
              products.map((product) => (
                <CardProduct key={product.id}>
                  <CardProduct.Header
                    image={product.image}
                    name={product.title}
                  />
                  <CardProduct.Body
                    desc={product.description}
                  ></CardProduct.Body>
                  <CardProduct.Footer />
                </CardProduct>
              ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
