import { useState, useEffect } from "react";
import CardProduct from "../components/fragments/CardProduct";
import { getProduct } from "../services/product.service";
import Navbar from "../components/fragments/Navbar";
const ProductPage = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProduct((data) => {
      setProducts(data);
    });
  }, []);
  return (
    <>
      <Navbar />
      <div className="flex flex-wrap">
        {products.length > 0 &&
          products.map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.Header image={product.image} name={product.title} />
              <CardProduct.Body desc={product.description}></CardProduct.Body>
              <CardProduct.Footer />
            </CardProduct>
          ))}
      </div>
    </>
  );
};

export default ProductPage;
