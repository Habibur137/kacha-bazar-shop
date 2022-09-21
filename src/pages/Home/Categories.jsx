import React from "react";
import navApi from "../../utils/navApi";
import Category from "./Category";

const Categories = () => {
  return (
    <div className="category-gradient py-6 md:py-16">
      <h1 className="text-center text-2xl mb-3 font-bold">
        Featured Categories
      </h1>
      <p className="text-center mb-3">
        Choose your necessary products from this feature categories.
      </p>
      <div className="md:grid grid grid-cols-1 md:grid-cols-6 px-4 md:px-10">
        {navApi.map((category) => (
          <Category key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
