import React from "react";
import { HiShoppingBag } from "react-icons/hi";
const EmptyCart = () => {
  return (
    <div className="text-black mt-32">
      <HiShoppingBag className="mx-auto text-[#10B981] text-[80px] bg-green-100 p-4 rounded-full" />

      <p className="text-center text-lg my-3 font-semibold">
        Your cart is empty
      </p>
      <p className="text-center text-sm w-96 px-8 text-gray-600">
        No items added in your cart. Please add product to your cart list.
      </p>
    </div>
  );
};

export default EmptyCart;
