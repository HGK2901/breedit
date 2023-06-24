import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";


const FindPetPage = () => {
  const [breed, setBreed] = useState("");
  const [age, setAge] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();

    console.log("Breed:", breed);
    console.log("Age:", age);
    console.log("Size:", size);
    console.log("Color:", color);

    setBreed("");
    setAge("");
    setSize("");
    setColor("");
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#f7ebdb] mt-[3.5rem] overflow-x-hidden ">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Find Link Pet
          </h1>
          <form className="flex flex-wrap gap-4 mb-4" onSubmit={handleSearch}>
            <div className="flex items-center gap-2">
              <label htmlFor="breed" className="font-medium text-gray-800">
                Breed:
              </label>
              <input
                id="breed"
                type="text"
                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter breed"
                value={breed}
                onChange={(e) => setBreed(e.target.vaue)}
              />
            </div>
            <div className="flex items-center gap-2">
              <label htmlFor="age" className="font-medium text-gray-800">
                Age:
              </label>
              <input
                id="age"
                type="text"
                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2">
              <label htmlFor="size" className="font-medium text-gray-800">
                Size:
              </label>
              <input
                id="size"
                type="text"
                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter size"
                value={size}
                onChange={(e) => setSize(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2">
              <label htmlFor="color" className="font-medium text-gray-800">
                Color:
              </label>
              <input
                id="color"
                type="text"
                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className=" text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 button"
            >
              Search
            </button>
          </form>
          {/* Display pet listings here */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {/* Placeholder for pet cards */}
            <div className="bg-white shadow-md rounded-md p-4 blogCard">
              <h3 className="text-lg font-semibold mb-2">Pet Name</h3>
              <p className="text-gray-600">Breed: Breed Name</p>
              <p className="text-gray-600">Age: 2 years</p>
              <p className="text-gray-600">Size: Medium</p>
              <p className="text-gray-600">Color: Brown</p>
            </div>
            <div className="bg-white shadow-md rounded-md p-4 blogCard">
              <h3 className="text-lg font-semibold mb-2">Pet Name</h3>
              <p className="text-gray-600">Breed: Breed Name</p>
              <p className="text-gray-600">Age: 3 years</p>
              <p className="text-gray-600">Size: Small</p>
              <p className="text-gray-600">Color: Black</p>
            </div>
            {/* Add more pet cards as needed */}
          </div>
          <section className="text-gray-600 body-font w-[100vw] overflow-hidden  " >
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 ">
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full findCard ">
              <Link className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="https://dummyimage.com/420x260"
                />
              </Link>
              {/* <Simple/> */}
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  CATEGORY
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  The Catalyzer
                </h2>
                <p className="mt-1">$16.00</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full findCard">
              <Link className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="https://dummyimage.com/421x261"
                />
              </Link>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  CATEGORY
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Shooting Stars
                </h2>
                <p className="mt-1">$21.15</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full findCard">
              <Link className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="https://dummyimage.com/422x262"
                />
              </Link>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  CATEGORY
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Neptune
                </h2>
                <p className="mt-1">$12.00</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full findCard">
              <Link className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="https://dummyimage.com/423x263"
                />
              </Link>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  CATEGORY
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  The 400 Blows
                </h2>
                <p className="mt-1">$18.40</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full findCard">
              <Link className="block relative h-48 rounded overflow-hidden ">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="https://dummyimage.com/424x264"
                />
              </Link>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  CATEGORY
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  The Catalyzer
                </h2>
                <p className="mt-1">$16.00</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full findCard">
              <Link className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="https://dummyimage.com/425x265"
                />
              </Link>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  CATEGORY
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Shooting Stars
                </h2>
                <p className="mt-1">$21.15</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full findCard">
              <Link className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="https://dummyimage.com/427x267"
                />
              </Link>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  CATEGORY
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Neptune
                </h2>
                <p className="mt-1">$12.00</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full findCard">
              <Link className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="https://dummyimage.com/428x268"
                />
              </Link>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  CATEGORY
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  The 400 Blows
                </h2>
                <p className="mt-1">$18.40</p>
              </div>
            </div>
          </div>
        </div>
      </section>
        </div>
  
      </div>

      
    </>
  );
};

export default FindPetPage;
