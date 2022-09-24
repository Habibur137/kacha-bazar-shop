import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { GiEncirclement } from "react-icons/gi";
import { FaCaravan } from "react-icons/fa";
import { AiOutlineCheckCircle } from "react-icons/ai";
const MainDashBoard = () => {
  return (
    <div className="">
      <h1 className="text-2xl my-4">Dashboard</h1>
      {/* order status  */}
      <div className="grid grid-cols-4 gap-4">
        <div className="flex items-center bg-white rounded gap-4 p-4 border">
          <span className="bg-red-200 p-4 text-xl rounded-full text-red-500">
            <FiShoppingCart />
          </span>
          <div>
            <h3>Total Order</h3>
            <p className="font-bold">150</p>
          </div>
        </div>
        <div className="flex items-center  bg-white rounded gap-4 p-4 border">
          <span className="bg-yellow-200 p-4 text-xl rounded-full text-red-500">
            <GiEncirclement />
          </span>
          <div>
            <h3>Pending Order</h3>
            <p className="font-bold">70</p>
          </div>
        </div>
        <div className="flex items-center bg-white rounded gap-4 p-4 border">
          <span className="bg-blue-200 p-4 text-xl rounded-full text-blue-500">
            <FaCaravan />
          </span>
          <div>
            <h3>Processing Order</h3>
            <p className="font-bold">30</p>
          </div>
        </div>
        <div className="flex items-center bg-white rounded gap-4 p-4 border">
          <span className="bg-green-200 p-4 text-xl rounded-full text-green-500">
            <AiOutlineCheckCircle />
          </span>
          <div>
            <h3>Complete Order</h3>
            <p className="font-bold">50</p>
          </div>
        </div>
      </div>
      {/* order history with table  */}
      <div className="w-full mt-8">
        <h1 className="my-3 text-xl">Recent Orders</h1>
        <table class="table-auto w-full">
          <thead>
            <tr className="text-center bg-gray-200 border-b">
              <th>ID</th>
              <th>ORDERTIME</th>
              <th>METHOD</th>
              <th>STATUS</th>
              <th>TOTAL</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center border-b">
              <td>5D15</td>
              <td>September 24, 2022</td>
              <td>COD</td>
              <td>Pending</td>
              <td>$38.00</td>
            </tr>
            <tr className="text-center border-b">
              <td>5D15</td>
              <td>September 24, 2022</td>
              <td>COD</td>
              <td>Pending</td>
              <td>$38.00</td>
            </tr>
            <tr className="text-center border-b">
              <td>5D15</td>
              <td>September 24, 2022</td>
              <td>COD</td>
              <td>Pending</td>
              <td>$38.00</td>
            </tr>
            <tr className="text-center border-b">
              <td>5D15</td>
              <td>September 24, 2022</td>
              <td>COD</td>
              <td>Pending</td>
              <td>$38.00</td>
            </tr>
            <tr className="text-center border-b">
              <td>5D15</td>
              <td>September 24, 2022</td>
              <td>COD</td>
              <td>Pending</td>
              <td>$38.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MainDashBoard;
