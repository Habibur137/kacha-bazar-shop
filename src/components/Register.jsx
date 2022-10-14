import React from "react";
import { useState } from "react";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../firebase.init";

const Register = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, user1] = useSignInWithGoogle(auth);
  console.log(user1);
  const [input, setInput] = useState({ name: "", email: "", password: "" });
  const hadleInputChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = input;
    signInWithEmailAndPassword(email, password);
  };
  return (
    <div className="popular-gradient">
      <div className=" w-[470px] mx-auto bg-white p-4">
        <h1 className="text-center text-2xl font-bold">Signing Up</h1>
        <p className="text-center mt-2 mb-6 text-gray-500">
          Create an account with email
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <p className="text-gray-500">Name</p>
            <input
              onChange={hadleInputChange}
              className="w-full p-2 border outline-[#10B981] rounded"
              placeholder="Name"
              type="name"
              name="name"
              id="name"
            />
          </div>
          <div className="mb-4">
            <p className="text-gray-500">Email</p>
            <input
              onChange={hadleInputChange}
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
              onChange={hadleInputChange}
              className="w-full p-2 border outline-[#10B981] rounded "
              placeholder="Password"
              type="password"
              name="password"
              id="password"
            />
          </div>
          <p className="my-5 text-sm underline">Forgot password?</p>
          <input
            className="w-full p-2 bg-[#10B981] text-white font-semibold rounded cursor-pointer"
            type="submit"
            value="Register"
          />
        </form>
        <div className="my-4 text-center text-xl text-gray-600">OR</div>
        <div className="flex gap-3">
          <button className="bg-blue-400 p-2 w-2/4 text-gray-100 rounded">
            Login With facebook
          </button>
          <button
            onClick={() => signInWithGoogle()}
            className="bg-red-400 p-2 w-2/4 text-gray-100 rounded"
          >
            Login With Google
          </button>
        </div>
        <div className="my-4 text-center">
          <span className="text-gray-400 text-sm mr-2">
            Already have a account ?
          </span>
          <Link to={"/login"}>Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
