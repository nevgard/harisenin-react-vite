import axios from "axios";
export const getProduct = (callback) => {
  axios
    .get("https://fakestoreapi.com/products")
    .then((res) => {
      callback(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
};
export const getPreviewProduct = (callback) => {
  axios
    .get("https://fakestoreapi.com/products?limit=3")
    .then((res) => {
      callback(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getFeaturedProduct = (callback) => {
  axios
    .get("https://fakestoreapi.com/products/category/jewelery")
    .then((res) => {
      callback(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
};
