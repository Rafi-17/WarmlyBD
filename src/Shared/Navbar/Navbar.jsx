import React, { useContext } from "react";
import logo from '../../assets/Navbar/logo.png'
import { Link, NavLink } from "react-router-dom";
import CommonButton from "../../components/CommonButton/CommonButton";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
const {logoutUser, user} = useContext(AuthContext);

const handleLogout=()=>{
  logoutUser()
  .then(()=>{
    // console.log("Logged Out Successfully!");
    Swal.fire({
      title: "Success!",
      text: "Logged out Successfully",
      icon: "success",
      confirmButtonText: "Ok"
    });
  })
  .catch(error=>{
    // console.log(error.message);
  })
}
  const navLinks=<>
      <li><NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active text-sky-500  font-bold text-base lg:text-lg" : ""}>Home</NavLink></li>
      <li><NavLink to="/donationCampaigns" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active text-sky-500 font-bold text-base lg:text-lg" : ""}>Donation Campaigns</NavLink></li>
      <li><NavLink to="/help" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active text-sky-500 font-bold text-base lg:text-lg" : ""}>How to Help</NavLink></li>
      {!user && <li><NavLink to="/register" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active text-sky-500 font-bold text-base lg:text-lg" : ""}>Register</NavLink></li>}
      {user && <li><NavLink to="/dashboard" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active text-sky-500 font-bold text-base lg:text-lg" : ""}>Dashboard</NavLink></li>}
  </>
  return (
  <div className="navbar bg-sky-100 shadow-md">
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
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-gray-700 font-medium"
        >
          {navLinks}
        </ul>
      </div>
        <div className="lg:hidden absolute left-1/2 transform -translate-x-1/2">
  <Link to={'/'}><img className="w-16 cursor-pointer" src={logo} alt="Logo" /></Link>
</div>

{/* Normal logo position for large screens */}
<div className="hidden lg:flex items-center">
  <Link to={'/'}><img className="w-16" src={logo} alt="Logo" /></Link>
</div>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1 text-gray-700 font-medium">
        {navLinks}
      </ul>
    </div>
    <div className="navbar-end">
      {user ?<>
      {user?.photoURL ? (
        <img
          src={user.photoURL}
          className="w-10 h-10 rounded-full object-cover object-top mr-1"
          alt="User"
        />
        ) : (
      <FaUserCircle className="w-10 h-10 text-gray-400 bg-gray-200 rounded-full p-1 mr-1" />

      )}
      <Link onClick={handleLogout}><CommonButton>Log Out</CommonButton> </Link> 
      </> : <Link to={"/login"}><CommonButton>Log In</CommonButton></Link> }
    </div>
  </div>
);
};

export default Navbar;
