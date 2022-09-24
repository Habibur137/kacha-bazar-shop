import React from "react";
import { Link, Outlet } from "react-router-dom";
import { MdOutlineDashboard, MdPassword } from "react-icons/md";
import { BsBorderStyle } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { AiOutlineLogout } from "react-icons/ai";

const Dashboard = () => {
  return (
    <div className="flex gap-3 px-10 category-gradient py-10">
      <div className="w-2/6 flex flex-col bg-white p-6 rounded-md">
        <Link
          className="px-5 py-1 rounded hover:bg-gray-100 hover:text-[#10B981] duration-100 my-2 flex gap-2 items-center"
          to="main-dashboard"
        >
          <span>
            <MdOutlineDashboard />
          </span>
          <span> Dashboard</span>
        </Link>
        <Link
          className="px-5 py-1 mb-2 rounded hover:bg-gray-100 hover:text-[#10B981] duration-100 flex items-center gap-2"
          to="my-orders"
        >
          <span>
            <BsBorderStyle />
          </span>
          <span>My Orders</span>
        </Link>
        <Link
          className="px-5 mb-2 py-1 rounded hover:bg-gray-100 hover:text-[#10B981] duration-100 flex items-center gap-2"
          to="update-profile"
        >
          <span>
            <FiSettings />
          </span>
          <span>Uodate Profile</span>
        </Link>
        <Link
          className="px-5 py-1 rounded hover:bg-gray-100 hover:text-[#10B981] duration-100 flex items-center gap-2"
          to="change-password"
        >
          <span>
            <MdPassword />
          </span>
          <span>Change Password</span>
        </Link>
        <p className="px-5 py-1 rounded hover:bg-gray-100 hover:text-[#10B981] duration-100 cursor-pointer flex items-center gap-2">
          <span>
            <AiOutlineLogout />
          </span>
          <span>Log Out</span>
        </p>
      </div>
      <div className="w-full rounded-md p-4 bg-white">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
