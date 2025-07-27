import React from 'react';
import loginBg from '../../assets/Login/loginBg.png';
import { FcGoogle } from "react-icons/fc";
import { motion } from "motion/react"
import { Link } from "react-router-dom";

const Register = () => {

    const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;
    console.log(name,email,photo,password);
  };

    return (
        <div className="relative min-h-[calc(100vh-64px)] bg-gradient-to-b from-blue-50 to-cyan-100 flex flex-col items-center px-6 sm:px-12 pt-8 lg:pt-10 overflow-hidden">

      <img
        src={loginBg}
        alt="login background"
        className="absolute top-60 left-6 transform -translate-x-1/2 -translate-y-1/2 w-96 opacity-1000 pointer-events-none select-none z-0"

      />

      <h2 className="text-xl xs:text-3xl md:text-4xl font-extrabold py-2 mb-4 bg-gradient-to-r from-sky-500 to-blue-400 drop-shadow-sm bg-clip-text text-transparent z-10">Create an Account</h2>
      <p className="text-sm text-sky-600 mb-8 z-10">
        Join WarmlyBD and make a difference this winter.
      </p>
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            
            >
        <div className="rounded-lg w-full max-w-[400px] py-16 px-4 z-10 bg-white/80 backdrop-blur-md border border-blue-200 shadow-lg flex flex-col items-center">
        <form
        onSubmit={handleSubmit}
        className="text-center"
      >
        <input
          className="mb-4 w-full max-w-[300px] py-2 rounded-lg bg-gradient-to-r from-white to-cyan-100 border border-sky-300 placeholder:text-gray-500 px-4 placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-sky-500 transition"
          placeholder="Name"
          type="text"
          name="name"
          autoComplete="name"
          aria-label="Full Name"
        />
        <input
          className="mb-4 w-full max-w-[300px] py-2 rounded-lg bg-gradient-to-r from-white to-cyan-100 border border-sky-300 placeholder:text-gray-500 px-4 placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-sky-500 transition"
          placeholder="Email"
          type="email"
          name="email"
          autoComplete="email"
          aria-label="Email address"
        />
        <input
          className="mb-4 w-full max-w-[300px] py-2 rounded-lg bg-gradient-to-r from-white to-cyan-100 border border-sky-300 placeholder:text-gray-500 px-4 placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-sky-500 transition"
          placeholder="Photo URL"
          type="text"
          name="photo"
          autoComplete="off"
          aria-label="Photo URL"
        />
        <input
          className="mb-4 w-full max-w-[300px] py-2 rounded-lg bg-gradient-to-r from-white to-cyan-100 border border-sky-300 placeholder:text-gray-500 px-4 placeholder:text-sm"
          placeholder="Password"
          name="password"
          type="password"
        />
        <input
          className="bg-gradient-to-r from-blue-400 to-cyan-400 hover:from-cyan-500 hover:to-blue-500 text-white shadow-md transition duration-300 px-8 rounded-md py-2 cursor-pointer text-sm font-semibold"
          type="submit"
          value="Register"
        />
      </form>
      <div className="w-full max-w-[300px] h-px bg-gray-200 my-4" />

      <div>
        <p className="font-semibold text-sm mb-4 text-gray-700">or continue with</p>
      </div>
        <div className="flex gap-3 text-gray-500 text-sm font-semibold w-full max-w-[300px]">
            <button className="flex items-center justify-center gap-2 w-full py-2 rounded-lg bg-white text-gray-700 border border-gray-300 hover:bg-gray-100 shadow"><FcGoogle  className="text-lg"/>Google</button>
        </div>
        <div className="w-full max-w-[300px]">
            <p className="text-sm text-gray-600 mt-6">Already have account? <Link to={"/login"} className="text-blue-600 font-semibold text-base underline hover:text-blue-800 transition">Login</Link></p>
        </div>
      </div>
        </motion.div>
      
    </div>
    );
};

export default Register;