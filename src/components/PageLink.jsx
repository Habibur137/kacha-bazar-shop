import React from "react";

const PageLink = ({ image, text }) => {
  return (
    <div className="relative">
      <div className=" rounded-md overflow-hidden">
        <img className="w-full h-auto" src={image} alt="" />
      </div>
      <div className="absolute top-0 left-1/3 mt-2 text-white">
        <h1 className="text-center text-xl">Taste of</h1>
        <h1 className="text-center text-2xl">{text}</h1>
        <p className="text-center text-xs">Weekend Discount Offer</p>
      </div>
    </div>
  );
};

export default PageLink;
