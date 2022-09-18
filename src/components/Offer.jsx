import React from "react";
import ins1 from "../assets/shop-image/ins3.webp";
const Offer = () => {
  return (
    <div className="grid grid-cols-3 gap-1 m-3 bg-white p-2">
      <div className="">
        <img className="w-28 h-28" src={ins1} alt="" />
      </div>
      <div>
        <p>
          <span className="text-red-500 text-xl">10%</span> Off{" "}
          <span className="bg-red-200 text-red-500 px-2 py-1 rounded-3xl text-xs">
            Inactive
          </span>
        </p>
        <p className="my-2">Summer Gift</p>
        <span className="py-1 px-1 bg-red-500 rounded text-white mr-1">00</span>
        :
        <span className="py-1 px-1 bg-red-500 rounded text-white mx-1">00</span>
        :
        <span className="py-1 px-1 bg-red-500 rounded text-white mx-1">00</span>
        :
        <span className="py-1 px-1 bg-red-500 rounded text-white ml-1">00</span>
      </div>
      <div>
        <p className="p-1 bg-green-200 text-green-500 text-center rounded-md border-dotted border-2 w-28 mx-auto mb-4">
          SUMMER22
        </p>
        <p className="text-xs ml-2">
          * This coupon apply when shopping more then $500
        </p>
      </div>
    </div>
  );
};

export default Offer;
