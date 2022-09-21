import React from "react";

import Categories from "../Home/Categories";
import PopularProducts from "../Home/PopularProducts";
import Banner from "./Banner";
import GetApp from "./GetApp";
import DiscountProducts from "./DiscountProducts";

const Home = () => {
  return (
    <div>
      <Banner />
      <Categories />
      <PopularProducts />
      <GetApp />
      <DiscountProducts />
    </div>
  );
};

export default Home;
