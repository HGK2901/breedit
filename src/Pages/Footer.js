import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css"; // assuming you have a separate CSS file for styling
// import "tailwindcss/dist/tailwind.min.css"; // import Tailwind CSS
// import "./index.css"; // assuming you have a separate CSS file for styling

const Footer = () => {
  return (
    <footer className="bg-[#264143] text-white py-8">
      <div className="container mx-auto flex flex-wrap">
        <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
          <h3 className="text-xl font-semibold m-4">BREEDIT</h3>
          <p className="mt-4 m-4">Your website tagline goes here</p>
        </div>
        <div className="w-full lg:w-1/4">
          <h4 className="text-lg font-semibold mb-4">Links</h4>
          <ul>
            <li className="mb-2">
              <a href="#" className="text-gray-500 hover:text-white">
                Home
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-500 hover:text-white">
                About Us
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-500 hover:text-white">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full lg:w-1/4">
          <h4 className="text-lg font-semibold mb-4">Social Media</h4>
          <ul>
            <li className="mb-2">
              <a href="#" className="text-gray-500 hover:text-white">
                Facebook
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-500 hover:text-white">
                Twitter
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-500 hover:text-white">
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
