import React from "react";
import { Link, Outlet } from "react-router-dom";
const Dashboard = () => {
  return (
    <div className="flex gap-3 px-10 category-gradient py-10">
      <div className="w-2/6 flex flex-col bg-white p-6 rounded-md">
        <Link
          className="px-5 py-1 rounded hover:bg-gray-100 hover:text-[#10B981] duration-100 my-2"
          to="main-dashboard"
        >
          Dashboard
        </Link>
        <Link
          className="px-5 py-1 mb-2 rounded hover:bg-gray-100 hover:text-[#10B981] duration-100"
          to="my-orders"
        >
          My Orders
        </Link>
        <Link
          className="px-5 mb-2 py-1 rounded hover:bg-gray-100 hover:text-[#10B981] duration-100"
          to="update-profile"
        >
          Uodate Profile
        </Link>
        <Link
          className="px-5 py-1 rounded hover:bg-gray-100 hover:text-[#10B981] duration-100"
          to="change-password"
        >
          Change Password
        </Link>
        <p className="px-5 py-1 rounded hover:bg-gray-100 hover:text-[#10B981] duration-100 cursor-pointer">
          Log Out
        </p>
      </div>
      <div className="w-full h-10 bg-yellow-400">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
