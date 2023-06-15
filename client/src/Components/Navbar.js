import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap navabar flex-col md:flex-row items-center">
          <Link
            to="/"
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <img src="https://i.imgur.com/cVl0iDy.png" alt="logo" width="120" />
          </Link>
          <nav className=" flex flex-wrap items-center text-base justify-center text-[#c88572] md:ml-auto md:mr-auto ">
            <Link to="/" className="mr-5 justify-between hover:text-[#505f2f]">
              Home
            </Link>
            <Link to="/findPet" className="mr-5 hover:text-[#505f2f]">
              Find a pet
            </Link>
            <Link to="/chat" className="mr-5 hover:text-[#505f2f]">
              Chat
            </Link>
            <Link to="/profile" className="mr-5 hover:text-[#505f2f]">
              Profile
            </Link>
          </nav>
          <div>
            <button className="button">Create Account</button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
