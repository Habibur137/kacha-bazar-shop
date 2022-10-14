import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home/Home";
import SeaFood from "./pages/SeaFood/SeaFood";
import Login from "./components/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import MainDashBoard from "./pages/Dashboard/MainDashBoard";
import MyOrders from "./pages/Dashboard/MyOrders";
import UpdateProfile from "./pages/Dashboard/UpdateProfile";
import ChangePassword from "./pages/Dashboard/ChangePassword";
import Register from "./components/Register";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sea-food" element={<SeaFood />} />
        <Route path="dashboard" element={<Dashboard />}>
          <Route index element={<MainDashBoard />} />
          <Route path="main-dashboard" element={<MainDashBoard />} />
          <Route path="my-orders" element={<MyOrders />} />
          <Route path="update-profile" element={<UpdateProfile />} />
          <Route path="change-password" element={<ChangePassword />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
