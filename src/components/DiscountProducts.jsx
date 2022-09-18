import React, { useEffect, useState } from "react";
import DiscountProductList from "./DiscountProductList";

const DiscountProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const products = async () => {
      const res = await fetch("../discountProduct.json");
      const data = await res.json();
      setProducts(data);
    };
    products();
  }, []);
  return (
    <div className="popular-gradient py-4 md:py-16">
      {" "}
      <h1 className="text-center mb-3 text-2xl font-bold">
        Latest Discounted Products
      </h1>
      <p className="mb-5 mx-auto md:w-[550px] text-center">
        See Our latest discounted products below. Choose your daily needs from
        here and get a special discount with free shipping.
      </p>
      <div className="grid md:grid grid-cols-2 md:grid-cols-5 gap-3 px-4 md:px-10">
        {products.map((product) => (
          <DiscountProductList key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default DiscountProducts;
