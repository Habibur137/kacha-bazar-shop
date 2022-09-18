import React from "react";
import Navbar from "./components/Navbar";
import { Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes></Routes>
    </div>
  );
}

export default App;
