import React from "react";
import ProductList from "./ProductList";
import { useSelector } from "react-redux";
const PopularProducts = () => {
  const { products } = useSelector((state) => state.products);
  return (
    <div className="popular-gradient py-4 md:py-16">
      {" "}
      <h1 className="text-center mb-3 text-2xl font-bold">
        Popular Products for Daily Shopping
      </h1>
      <p className="mb-3 mx-auto md:w-[550px] text-center">
        See all our popular products in this week. You can choose your daily
        needs products from this list and get some special offer with free
        shipping.
      </p>
      <div className="grid md:grid grid-cols-2 md:grid-cols-5 gap-3 px-4 md:px-10">
        {products.map(
          (product) =>
            product.category === "popular" && (
              <ProductList key={product.id} product={product} />
            )
        )}
      </div>
    </div>
  );
};

export default PopularProducts;
