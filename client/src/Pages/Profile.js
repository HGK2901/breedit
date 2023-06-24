import React from 'react';
import Navbar from '../Components/Navbar'


function Profile() {
  return (
    <>
    
    <Navbar/>
    <div className=" h-auto   flex items-center justify-center">
      <div className="bg-white max-w-lg w-full p-8 h-auto rounded shadow blogCard mt-[4.5rem] ">
        <div className="text-center mb-8">
          <img
            src="https://placekitten.com/200/200"
            alt="Profile"
            className="rounded-full mx-auto mb-4 w-40  object-cover"
          />
          <h2 className="text-3xl font-bold text-[#505f2f]">John Doe</h2>
          <p className="text-[#f7ebdb]">Front-end Developer</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4 text-[#505f2f]">About Me</h3>
          <p className="text-[#f7ebdb] leading-relaxed">
            Hi, I'm John Doe, a passionate front-end developer with a love for pets. meon meow nigga 
          </p>
        </div>
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-4 text-[#505f2f]">Contact</h3>
          <ul className="text-[#f7ebdb]">
            <li className="flex items-center mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
              john@example.com
            </li>
            <li className="flex items-center mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
              123-456-7890
            </li>
            <li className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
              <a href="https://example.com" className=" hover:underline">example.com</a>
            </li>
          </ul>
          
        </div>
        <div className="text-left mt-4">
          <button
            className="button py-2 px-4 rounded"
          
          >
            Edit Profile
          </button>
          </div>
      </div>
    </div>
    </>
  );
}

export default Profile;
