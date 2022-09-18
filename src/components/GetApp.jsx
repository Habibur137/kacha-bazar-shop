import React from "react";
import boy from "../assets/shop-image/delivery-boy.webp";
const GetApp = () => {
  return (
    <div className="bg-[#10B981] mx-10 p-14 rounded">
      <div className="flex justify-between items-center bg-white p-10 rounded">
        <div>
          <p className="text-xl mb-2">Organic Products and Food</p>
          <h1 className="font-semibold text-2xl mb-2">
            <span className="text-[#10B981] ">Quick Delivery to</span> Your Home
          </h1>
          <p className="mb-2">
            There are many products you will find our shop, Choose your daily
            necessary product from our KachaBazar shop and get some special
            offer. See Our latest discounted products from here and get a
            special discount.
          </p>
          <button className="px-6 py-2 text-white bg-[#10B981] rounded-full text-sm">
            Download App
          </button>
        </div>
        <div>
          <img className="h-60 w-[1000px]" src={boy} alt="" />
        </div>
      </div>
    </div>
  );
};

export default GetApp;
