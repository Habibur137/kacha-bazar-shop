import React from "react";
import left from "../assets/shop-image/app-download-img-left.webp";
import right from "../assets/shop-image/app-download-img.webp";
import apple from "../assets/shop-image/app-store.svg";
import android from "../assets/shop-image/play-store.svg";
import { MdOutlineDeliveryDining, MdPayment } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineGift } from "react-icons/ai";

const DownloadApp = () => {
  return (
    <div>
      <div className="flex md:flex-row flex-col items-center justify-between px-10 mt-14 bg-[#EEF2FF]">
        <img className="w-96 h-96" src={left} alt="" />
        <div>
          <h1 className="text-4xl font-semibold text-center">
            Get Your Daily Needs From Our KachaBazar Store
          </h1>
          <p className="my-3 text-center">
            There are many products you will find our shop, Choose your daily
            necessary product from our KachaBazar shop and get some special
            offer.
          </p>
          <div className="flex md:flex-row flex-col">
            <img className="mx-auto" src={apple} alt="" />
            <img className="mx-auto" src={android} alt="" />
          </div>
        </div>
        <img className="w-96 h-96" src={right} alt="" />
      </div>
      <div className="flex md:flex-row flex-col justify-between items-center px-10 py-6">
        <p className="flex gap-2 items-center">
          <MdOutlineDeliveryDining className="text-[#10B981]" />
          Free Shipping From $500.00
        </p>
        <p className="flex gap-2 items-center">
          <FiPhoneCall className="text-[#10B981]" />
          Support 24/7 At Anytime
        </p>
        <p className="flex gap-2 items-center">
          <MdPayment className="text-[#10B981]" />
          Secure Payment Totally Safe
        </p>
        <p className="flex gap-2 items-center">
          <AiOutlineGift className="text-[#10B981]" />
          Latest Offer Upto 20% Off
        </p>
      </div>
      <hr />
    </div>
  );
};

export default DownloadApp;
