import React, { useEffect, useRef, useState } from "react";
import { FiUser } from "react-icons/fi";
import { BsFillBagCheckFill, BsCart2 } from "react-icons/bs";
import { MdOutlineNotifications, MdKeyboardArrowDown } from "react-icons/md";
import { BiSearchAlt } from "react-icons/bi";
import navApi from "../utils/navApi";
import LinkItem from "./LinkItem";
let useClickOutside = (handler) => {
  let domNode = useRef();

  useEffect(() => {
    let maybeHandler = (event) => {
      if (!domNode.current.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener("mouseup", maybeHandler);

    return () => {
      document.removeEventListener("mouseup", maybeHandler);
    };
  });

  return domNode;
};

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [navItem] = useState(navApi);
  let domNode = useClickOutside(() => {
    setIsNavOpen(false);
  });

  return (
    <nav className=" sticky top-0 z-30">
      <div className="hidden md:flex justify-between items-center py-1 px-8 bg-[#F3F4F6]">
        <div className="text-sm text-gray-700 font-thin">
          We are available 24/7, Need help? Call Us:{" "}
          <span className="text-[#10BFB2] font-thin">+01234560352</span>
        </div>
        <div className="flex gap-3 text-gray-700 ">
          <span className="font-thin">About Us</span>
          <span className="font-thin">Contact Us</span>
          <div className="flex items-center gap-1">
            <FiUser className="text-[#10BFB2] text-sm" />
            <span className="font-thin">Login</span>
          </div>
        </div>
      </div>
      <div className="flex md:flex md:items-center md:justify-between bg-[#10B981] py-4 md:px-10">
        {/* home icon  */}
        <div className="flex items-center gap-1">
          <BsFillBagCheckFill className="text-white text-4xl" />
          <div>
            <p className="text-white -mb-4 text-[22px] font-bold">KACHA</p>
            <p className="text-white mt-1.5  tracking-[0.5em]">BAZAR</p>
          </div>
        </div>
        {/* search from  */}
        <form className="relative mt-8 md:mt-0">
          <input
            className="md:w-[800px] px-2 py-1 md:px-2 md:py-2.5 rounded outline-none"
            type="text"
            placeholder="search for products"
          />
          <span className="absolute top-1.5 md:top-2.5 right-1 cursor-pointer md:right-2 text-2xl text-gray-300">
            <BiSearchAlt />
          </span>
        </form>
        {/* login and cart div  */}
        <div className="flex flex-col  gap-2 justify-center md:flex md:flex-row md:items-center md:gap-8">
          <span className="text-2xl text-white cursor-pointer">
            <MdOutlineNotifications />
          </span>
          <span className="text-2xl text-white cursor-pointer relative">
            <BsCart2 />
            <div className="w-5 h-5 rounded-full bg-red-500 absolute -top-2 -right-2">
              <p className="text-sm text-center">0</p>
            </div>
          </span>

          <span className="text-2xl text-white cursor-pointer">
            <FiUser />
          </span>
        </div>
      </div>
      {/* navbar div  */}
      <div className="md:flex md:px-10 items-center justify-between py-3">
        <div className="flex gap-7">
          <span>Home</span>

          <div className="flex">
            <span className="relative">
              <span onClick={() => setIsNavOpen((isNavOpen) => !isNavOpen)}>
                Categories
              </span>
              {isNavOpen && (
                <div
                  ref={domNode}
                  className="absolute top-7 left-0 w-72 h-96 p-6 bg-white rounded overflow-y-auto scroll border"
                >
                  {navItem.map((item) => (
                    <LinkItem key={item.id} item={item} />
                  ))}
                </div>
              )}
            </span>
            <MdKeyboardArrowDown className="mt-1" />
          </div>
          <span>About US</span>
          <span>Contact US</span>
        </div>
        <div className="flex gap-5">
          <span>Privacy Policy</span>
          <span>Terms & Conditions</span>
        </div>
      </div>
      <hr />
    </nav>
  );
};

export default Navbar;
