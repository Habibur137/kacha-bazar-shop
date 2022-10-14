import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="popular-gradient">
      <div className=" w-[470px] mx-auto bg-white p-4">
        <h1 className="text-center text-2xl font-bold">Login</h1>
        <p className="text-center mt-2 mb-6 text-gray-500">
          Login with your email and password
        </p>
        <form action="">
          <div className="mb-4">
            <p className="text-gray-500">Email</p>
            <input
              className="w-full p-2 border outline-[#10B981] rounded"
              placeholder="Email"
              type="email"
              name="email"
              id="email"
            />
          </div>
          <div>
            <p className="text-gray-500">Password</p>
            <input
              className="w-full p-2 border outline-[#10B981] rounded"
              placeholder="Password"
              type="password"
              name="pass"
              id="pass"
            />
          </div>
          <p className="my-5 text-sm underline">Forgot password?</p>
          <input
            className="w-full p-2 bg-[#10B981] text-white font-semibold rounded"
            type="submit"
            value="Login"
          />
        </form>
        <div className="my-4 text-center text-xl text-gray-600">OR</div>
        <div className="flex gap-3">
          <button className="bg-blue-400 p-2 w-2/4 text-gray-100 rounded">
            Login With facebook
          </button>
          <button className="bg-red-400 p-2 w-2/4 text-gray-100 rounded">
            Login With Google
          </button>
        </div>
        <div className="my-4 text-center">
          <span className="text-gray-400 text-sm mr-2">
            Not have a account ?
          </span>
          <Link to="/register">Register</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
