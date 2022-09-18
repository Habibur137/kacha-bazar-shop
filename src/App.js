import React from "react";
import Navbar from "./components/Navbar";
import { Routes } from "react-router-dom";
import Categories from "./components/Categories";
import PopularProducts from "./components/PopularProducts";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Categories />
      <PopularProducts />
      <Routes></Routes>
    </div>
  );
}

export default App;
