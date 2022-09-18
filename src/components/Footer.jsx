import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-4 px-10 py-12">
        <div>
          <h1 className="text-xl font-semibold mb-3">Company</h1>
          <p className="text-sm my-2">About Us</p>
          <p className="text-sm my-2">Contact us</p>
          <p className="text-sm my-2">Careers</p>
          <p className="text-sm my-2">Latest news</p>
        </div>
        <div>
          <h1 className="text-xl font-semibold mb-3">Top Category</h1>
          <p className="text-sm my-2">Fish & Meat</p>
          <p className="text-sm my-2">Organic Food</p>
          <p className="text-sm my-2">Baby Care</p>
          <p className="text-sm my-2">Milk & Dairy</p>
        </div>
        <div>
          <h1 className="text-xl font-semibold mb-3">My Account</h1>
          <p className="text-sm my-2">Dashboard</p>
          <p className="text-sm my-2">My Orders</p>
          <p className="text-sm my-2">Recent Orders</p>
          <p className="text-sm my-2">Updated Profile</p>
        </div>
        <div>
          <h1 className="text-xl font-semibold mb-3">KACHA BAZAR</h1>
          <p className="text-sm my-2">987 Andre Plain Suite High Street 838,</p>
          <p className="text-sm my-2">Lake Hestertown, USA</p>
          <p className="text-sm my-2">Tell: 02.356.1666</p>
          <p className="text-sm my-2">Email: ccruidk@test.com</p>
        </div>
      </div>
      <div className="text-center text-sm text-gray-400 bg-[#f3f3f3] py-4">
        Copyright 2022 @ <span className="text-[#10B981]">HtmlLover</span>, All
        rights reserved.
      </div>
    </div>
  );
};

export default Footer;
