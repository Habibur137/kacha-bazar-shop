import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home/Home";
import SeaFood from "./pages/SeaFood/SeaFood";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sea-food" element={<SeaFood />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
