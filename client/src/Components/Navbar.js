import React, { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  let Links = [
    { name: "HOME", link: "/" },
    { name: "FIND PET", link: "/findpet" },
    { name: "CHAT", link: "/chat" },
    { name: "PROFILE", link: "/profile" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className="shadow-md w-full fixed top-0 left-0 z-50">
      <div className="md:flex items-center justify-between z-50 py-4 md:px-10 px-7  bg-[#f7ebdb] bg-opacity-100 lg:h-20">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800"
        >
          <Link
            to="/"
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <img src="https://i.imgur.com/cVl0iDy.png" alt="logo" width="100" />
          </Link>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-8 absolute md:static bg-[#f7ebdb] md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 md:my-0 my-4 hover:text-[#505f2f] px-6 text-xl hover:underline underline-offset-8 decoration-1 transition-all duration-1000 delay-1000">
              <a
                href={link.link}
                className="text-gray-800 hover:text-gray-400 duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}

          <button className="button ml-16">Create Account</button>
        </ul>
      </div>
    </div>
  );
};

export default Nav;

// import React from "react";
// import { Link } from "react-router-dom";
// import { useState } from "react";

// const Navbar = () => {

//   let [open,setOpen]=useState(false);

//   return (
//     <>
//       <header
//         className="fixed top-0 left-0 right-0 z-50 bg-[#f7ebdb] bg-opacity-100 h-14 flex justify-around items-center "
//       >
//         <div className="container mx-auto flex flex-wrap navbar flex-col md:flex-row items-center px-4">
//           <Link
//             to="/"
//             className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
//           >
//             <img src="https://i.imgur.com/cVl0iDy.png" alt="logo" width="100" />
//           </Link>
//           <nav className="flex flex-wrap items-center text-base justify-center text-[#c88572] md:ml-auto md:mr-auto">
//             <Link to="/" className="mr-5 justify-between hover:text-[#505f2f] text-xl mx-20 bold ">
//               Home
//             </Link>
//             <Link to="/findPet" className="mr-5 hover:text-[#505f2f] text-xl mx-20">
//               Find a pet
//             </Link>
//             <Link to="/chat" className="mr-5 hover:text-[#505f2f] text-xl mx-20">
//               Chat
//             </Link>
//             <Link to="/profile" className="mr-5 hover:text-[#505f2f] text-xl mx-20 ">
//               Profile
//             </Link>
//           </nav>
//           <div>
//             <button className="button">Create Account</button>
//           </div>
//         </div>
//       </header>
//     </>
//   );
// };

// export default Navbar;
