import React from "react";
import ins2 from "../assets/shop-image/ins4.webp";
const OfferTwo = () => {
  return (
    <div className="hidden md:grid md:grid-cols-3 md:gap-1 m-3 bg-white p-2">
      <div className="">
        <img className="w-28 h-28" src={ins2} alt="" />
      </div>
      <div className="border-r-2 border-dotted">
        <p>
          <span className="text-red-500 text-xl">15%</span> Off{" "}
          <span className="bg-green-200 text-green-500 px-2 py-1 rounded-3xl text-xs">
            Active
          </span>
        </p>
        <p className="my-2">Winter Gift</p>
        <span className="py-1 px-1 bg-green-500 rounded text-white mr-1">
          00
        </span>
        :
        <span className="py-1 px-1 bg-green-500 rounded text-white mx-1">
          00
        </span>
        :
        <span className="py-1 px-1 bg-green-500 rounded text-white mx-1">
          00
        </span>
        :
        <span className="py-1 px-1 bg-green-500 rounded text-white ml-1">
          00
        </span>
      </div>
      <div>
        <p className="p-1 bg-green-200 text-green-500 text-center rounded-md border-dotted border-orange-300 border-2 w-28 mx-auto mb-4">
          WINTER22
        </p>
        <p className="text-xs ml-2">
          * This coupon apply when shopping more then $500
        </p>
      </div>
    </div>
  );
};

export default OfferTwo;
