import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination, Autoplay } from "swiper";
import banner from "../../assets/shop-image/banner.jpg";

import Offer from "../../components/Offer";
import OfferTwo from "../../components/OfferTwo";
const Banner = () => {
  return (
    <div>
      <div className="mt-5 pb-8  flex justify-between gap-4 md:px-10">
        <div className="w-full md:h-auto md:w-7/12 rounded">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            <SwiperSlide>
              <img className="w-full h-48 md:h-72" src={banner} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="w-full h-48 md:h-72" src={banner} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="w-full h-48 md:h-72" src={banner} alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="hidden md:block border-2 w-5/12 border-orange-300 bg-[#F9FAFB] rounded">
          <h1 className="p-1 bg-[#FFEDD5] text-center">
            Latest Super Discount Active Coupon Code
          </h1>
          <Offer />
          <OfferTwo />
        </div>
      </div>
      <div className="bg-[#FFEDD5] p-6 rounded mx-10 mb-6 flex md:flex flex-col md:flex-row gap-3 justify-between md:items-center">
        <div>
          <p>
            <span className="text-[#10B981] font-semibold text-xl">
              100% Natural Quality
            </span>{" "}
            Organic Product
          </p>
          <p>
            See Our latest discounted products from here and get a
            specialdiscount product
          </p>
        </div>
        <button className="px-6 py-2 w-48 text-white bg-[#10B981] rounded-full">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Banner;
