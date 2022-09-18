import React, { useEffect, useState } from "react";
import ProductList from "./ProductList";

const PopularProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const products = async () => {
      const res = await fetch("../popularProducts.json");
      const data = await res.json();
      setProducts(data);
    };
    products();
  }, []);
  return (
    <div>
      {" "}
      <h1 className="text-center mb-3 text-2xl font-bold">
        Popular Products for Daily Shopping
      </h1>
      <p className="mb-3 mx-auto md:w-[550px] text-center">
        See all our popular products in this week. You can choose your daily
        needs products from this list and get some special offer with free
        shipping.
      </p>
      <div className="grid md:grid grid-cols-2 md:grid-cols-5 gap-3 px-4 md:px-10 bg-gray-200 py-6">
        {products.map((product) => (
          <ProductList key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;
