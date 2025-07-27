import React from "react";
import logo from '../../assets/Navbar/logo.png'
import { Link, NavLink } from "react-router-dom";
import CommonButton from "../../components/CommonButton/CommonButton";

const Navbar = () => {
    const navLinks=<>
        <li><NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active text-sky-500 font-bold text-lg" : ""}>Home</NavLink></li>
        <li><NavLink to="/donation" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active text-sky-500 font-bold text-lg" : ""}>Donation Campaigns</NavLink></li>
        <li><NavLink to="/help" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active text-sky-500 font-bold text-lg" : ""}>How to Help</NavLink></li>
        <li><NavLink to="/dashboard" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active text-sky-500 font-bold text-lg" : ""}>Dashboard</NavLink></li>
    </>
    return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start justify-between lg:justify-start ">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>
          <div className="lg:hidden absolute left-1/2 transform -translate-x-1/2">
    <img className="w-16" src={logo} alt="Logo" />
  </div>

  {/* Normal logo position for large screens */}
  <div className="hidden lg:flex items-center">
    <img className="w-16" src={logo} alt="Logo" />
  </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end">
        <Link><CommonButton>Log In</CommonButton></Link>
      </div>
    </div>
  );
};

export default Navbar;
