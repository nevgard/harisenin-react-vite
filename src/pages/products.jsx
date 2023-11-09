import CardProduct from "../components/fragments/CardProduct";
import Navbar from "../components/fragments/Navbar";
import { useState, useEffect, useRef } from "react";
import { getProduct } from "../services/product.service";
import { getUsername } from "../services/auth.service";
import Footer from "../components/fragments/Footer";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [username, setUsername] = useState("");

  const cartRef = useRef(null);
  const contentRef = useRef(null);

  const handleShowCart = () => {
    if (cartRef.current.className === "hidden") {
      cartRef.current.className =
        "flex flex-col border shadow mt-2 bg-white absolute right-2 p-3 h-60 ";
      contentRef.current.className = "flex flex-wrap w-3/4";
    } else {
      cartRef.current.className = "hidden";
      contentRef.current.className = "flex flex-wrap w-full";
    }
  };

  const token = localStorage.getItem("token");
  useEffect(() => {
    if (token) {
      setUsername(getUsername(token));
    }
  }, []);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
      setTotalPrice(sum);

      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, products]);

  useEffect(() => {
    getProduct((data) => {
      setProducts(data);
    });
  }, []);

  const totalPriceRef = useRef(null);

  useEffect(() => {
    if (cart.length > 0) {
      totalPriceRef.current.style.display = "table-row";
    } else {
      totalPriceRef.current.style.display = "none";
    }
  });
  const handleAddToCart = (id) => {
    if (cart.find((item) => item.id === id)) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { id, qty: 1 }]);
    }
    if (username) {
      const cartData = JSON.parse(localStorage.getItem(username)) || [];
      const updatedCartData = cartData.filter((item) => item.id !== id);
      updatedCartData.push({ id, qty: 1 });
      localStorage.setItem(username, JSON.stringify(updatedCartData));
    }
  };
  useEffect(() => {
    if (username) {
      const cartData = JSON.parse(localStorage.getItem(username)) || [];
      setCart(cartData);
    }
  }, [username]);
  const loginValidation = () => {
    alert("Please login first");
    window.location.href = "/login";
  };
  return (
    <>
      <Navbar handleShowCart={handleShowCart} />
      <div className="flex flex-wrap">
        <div ref={contentRef} className="flex  flex-wrap">
          {products.length > 0 &&
            products.map((product) => (
              <CardProduct key={product.id}>
                <CardProduct.Header
                  image={product.image}
                  name={product.title}
                />
                <CardProduct.Body desc={product.description}></CardProduct.Body>
                <CardProduct.Footer
                  price={product.price}
                  id={product.id}
                  handleAddToCart={
                    username.length > 0 ? handleAddToCart : loginValidation
                  }
                />
              </CardProduct>
            ))}
        </div>
        <div ref={cartRef} className="hidden">
          <div>
            <h1 className="mt-3 ml-2 text-3xl font-bold">Cart</h1>
          </div>
          <div className="flex gap-x-3 text-sm ">
            <table className="table-auto text-left text-md border-separate border-spacing-2">
              <thead>
                <tr>
                  <th>Products</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {products.length > 0 &&
                  cart.map((item) => {
                    const product = products.find(
                      (product) => product.id === item.id
                    );
                    return (
                      <tr key={item.id}>
                        <td>{product.title.substring(0, 10)}...</td>
                        <td>
                          ${" "}
                          {product.price.toLocaleString("id-ID", {
                            styles: "currency",
                            currency: "USD",
                          })}
                        </td>
                        <td>{item.qty}</td>
                        <td>
                          ${" "}
                          {(item.qty * product.price).toLocaleString("id-ID", {
                            styles: "currency",
                            currency: "USD",
                          })}
                        </td>
                      </tr>
                    );
                  })}
                <tr ref={totalPriceRef}>
                  <td colSpan={3}>
                    <b>Total Price</b>
                  </td>
                  <td>
                    <b>
                      {" "}
                      ${" "}
                      {totalPrice.toLocaleString("id-ID", {
                        styles: "currency",
                        currency: "USD",
                      })}
                    </b>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ProductPage;
