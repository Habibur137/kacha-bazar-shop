import React from "react";
import { useSelector } from "react-redux";
import SeaFoodList from "./SeaFoodList";
import fish from "../../assets/shop-image/cta-bg-1.webp";
import meat from "../../assets/shop-image/cta-bg-2.webp";
import milk from "../../assets/shop-image/cta-bg-3.webp";
import PageLink from "../../components/PageLink";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css/navigation";
import "swiper/css";
import navApi from "../../utils/navApi";
// import "swiper/css/pagination";
const SeaFood = () => {
  const { products } = useSelector((state) => state.seaFoodProducts);
  return (
    <div className="pb-5 popular-gradient">
      <div className="px-10 mt-8 grid md:grid grid-cols-3 md:grid-cols-3 gap-2 md:gap-4">
        <PageLink image={fish} text=" Fish & Meat" />
        <PageLink image={meat} text=" Dairy & Milk" />
        <PageLink image={milk} text=" Bread & Bakery" />
      </div>
      <div className="px-10 py-8 bg-[#F9FAFB]">
        <Swiper
          slidesPerView={9}
          spaceBetween={8}
          navigation
          modules={[Navigation]}
          className="mySwiper"
        >
          {navApi.map((nav) => (
            <SwiperSlide className="w-20 h-20 flex flex-col items-center justify-center p-2 text-sm text-center bg-white rounded-md">
              <img className="w-7 h-7 mx-auto" src={nav.image} alt="" />
              {nav.name}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="grid md:grid grid-cols-2 md:grid-cols-6 gap-2 px-4 md:px-10 mt-4">
        {products.map(
          (product) =>
            product.category === "sea-food" && (
              <SeaFoodList key={product.id} product={product} />
            )
        )}
      </div>
    </div>
  );
};

export default SeaFood;
