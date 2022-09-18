import React from "react";
import { BsFillBagPlusFill } from "react-icons/bs";

const ProductList = ({ product }) => {
  console.log(product);
  return (
    <div className="bg-white p-4 rounded">
      <img
        className="w-36 h-36 mx-auto transform hover:scale-110 transition-all ease-in-out"
        src={product.image}
        alt=""
      />
      <p className="mt-1">{product.name}</p>
      <div className="flex justify-between items-center">
        <p className="text-xl font-semibold">${product.price}</p>
        <span className="p-1 rounded text-xl text-[#10B981] border hover:bg-[#10B981] hover:text-white">
          <BsFillBagPlusFill />
        </span>
      </div>
    </div>
  );
};

export default ProductList;
