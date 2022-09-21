import React from "react";
import { BsFillBagPlusFill } from "react-icons/bs";
import { increment } from "../../features/products/productSlice";
import { useDispatch } from "react-redux";
const DiscountProductList = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <div className="bg-white p-4 rounded relative">
      <div className="absolute z-20 top-2 right-2 py-1 px-2 bg-[#F97316] text-white text-xs rounded">
        {product.off}% off
      </div>
      <img
        className="w-36 h-36 mx-auto transform hover:scale-110 transition-all ease-in-out relative z-10 my-4"
        src={product.image}
        alt=""
      />
      <p className="mt-1">{product.name}</p>
      <div className="flex justify-between items-center">
        <p className="text-xl font-semibold">
          ${product.price}{" "}
          <span className="text-sm text-normal line-through text-gray-400">
            ${product.prvPrice}
          </span>
        </p>
        <span
          onClick={() => dispatch(increment(product.id))}
          className="p-1 rounded text-xl text-[#10B981] border hover:bg-[#10B981] hover:text-white cursor-pointer"
        >
          <BsFillBagPlusFill />
        </span>
      </div>
    </div>
  );
};

export default DiscountProductList;
