import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between items-center py-3 px-8 bg-[#F3F4F6]">
        <div>We are available 24/7, Need help? Call Us: +01234560352</div>
        <div>
          <span>About Us</span>
          <span>Contact Us</span>
          <span>Login</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
