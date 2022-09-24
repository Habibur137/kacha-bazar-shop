import React from "react";

const ChangePassword = () => {
  return (
    <div>
      <h1 className="mb-4">Change Password</h1>
      <form action="">
        <div className="mb-6">
          <p className="text-gray-500">Email Address</p>
          <input
            className="w-full p-2 border outline-[#10B981] rounded"
            placeholder="Email Address"
            type="email"
            name="email"
            id="email"
          />
        </div>
        <div className="mb-6">
          <p className="text-gray-500">Current Password</p>
          <input
            className="w-full p-2 border outline-[#10B981] rounded"
            placeholder="Current Password"
            type="password"
            name="pass"
            id="pass"
          />
        </div>
        <div className="mb-6">
          <p className="text-gray-500">New Password</p>
          <input
            className="w-full p-2 border outline-[#10B981] rounded"
            placeholder="New Password"
            type="password"
            name="pass"
            id="pass"
          />
        </div>
        <div className="text-right">
          <input
            className="w-48 p-2 bg-[#10B981] text-white font-semibold rounded"
            type="submit"
            value="Change Password"
          />
        </div>
      </form>
    </div>
  );
};

export default ChangePassword;
