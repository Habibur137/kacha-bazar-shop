import React from "react";
import Navbar from "./components/Navbar";
import { Routes } from "react-router-dom";
import Categories from "./components/Categories";
import PopularProducts from "./components/PopularProducts";
import Banner from "./components/Banner";
import GetApp from "./components/GetApp";
import DiscountProducts from "./components/DiscountProducts";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Categories />
      <PopularProducts />
      <GetApp />
      <DiscountProducts />
      <Routes></Routes>
    </div>
  );
}

export default App;
