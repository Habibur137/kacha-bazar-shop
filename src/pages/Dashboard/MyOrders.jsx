import React from "react";

const MyOrders = () => {
  return (
    <div className="w-full">
      <h1>Recent Orders</h1>
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
  );
};

export default MyOrders;
