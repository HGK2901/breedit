// import TinderCardSwipe from '../Components/swiper.js';
// import Index from "../Components/index.js"
import React from "react";
import Nav from "../Components/Nav";
import front from "../Assests/front-removebg-preview.png";
import cat from "../Assests/catimages-removebg-preview.png";
import dog from "../Assests/lastdog1-removebg-preview.png";
import hamster from "../Assests/hama-removebg-preview.png";
import rabbit from "../Assests/lastbcute-rabbit-illustration-rabbit-kawaii-chibi-drawing-style-rabbit-cartoon-bunny-vector-removebg-preview.png";
import Footer from "./Footer";
import Testimonial from "../Components/Testimonials";
import Features from "../Components/Features";

// import Slideshow from "../Components/carousel";
import Gallery from "../Components/carousel";
import Connect from "../Components/connect";

const Home = () => {
  return (
    <>
      <Nav />

      <main className="flex justify-around ">
        <div className="main  h-60 py-80 pl-9 rounded-3xl">
          <div className="heade text-6xl ">Empowering Pet Care.</div>
          <p className=" w-1/3 pasa text-xl">
            {" "}
            Elevate Your Pet's Well-being with BREEDIT's Cutting-Edge Solutions.
            Unleash the Best for Your Furry Friend with BREEDIT's Comprehensive
            Pet Care.
          </p>
          <div className="btns">
            <button className="creatbutton2">FIND A PET</button>
          </div>
          <div className="imegd">
            <img src={front} className="imeg w-1/2 object-contain overflow-hidden  " alt="" />
          </div>
        </div>
      </main>
      <div className=" bg-[#264143] rounded-3xl m-10 w-[90rem]">
        <div className=" m-1 text-center text-3xl text-[#f2ebe9] pt-4 ">
          CHOOSE YOUR PET
        </div>
        <div className="flex justify-evenly m-10 pb-10 hover15 cursor-pointer">
          <figure>
            {" "}
            <img
              src={cat}
              className=" h-72 cursor-pointer bg-[#eddcd9] rounded-full "
              alt=""
            />
          </figure>
          <figure>
            {" "}
            <img
              src={dog}
              className=" cursor-pointer h-72 bg-[#eddcd9] rounded-full"
              alt=""
            />
          </figure>
          <figure>
            <img
              src={hamster}
              className="  cursor-pointer h-60 bg-[#eddcd9] rounded-full "
              alt=""
            />
          </figure>
          <figure>
            {" "}
            <img
              src={rabbit}
              className=" cursor-pointer h-72 bg-[#eddcd9] rounded-full"
              alt=""
            />
          </figure>
        </div>
      </div>
      <div className="flex justify-center align-middle">
        <div className="bg-[#e99f4c]  w-[60rem]  h-[22rem] text-center p-5 rounded-3xl text-[#f2ebe9]">
          <h1 className="text-3xl pb-10">Connect & Meet Pets on BREEDIT </h1>
          <p className=" text-xl ">
            Whether you’re looking for a new pet, want to breed your furry
            friend, or need to find a forever home for your pet, we have you
            covered.
          </p>{" "}
          <br />
          <p className=" text-xl ">
            Petmeetly is your one-stop solution for pet adoption, pet breeding,
            and pet for sale.
          </p>{" "}
          <br />
          <p className=" text-xl ">
            We provide a safe and secure platform for pet owners to connect,
            chat, and meet up with their furry friends. Our goal is to make sure
            that every pet owner has the opportunity to meet their pet’s needs
            and provide them with the best possible experience.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <button className="button-74 flex  mt-10  text-white bg-indigo-500 border-0 mx-8 py-2 px-8 focus:outline-none  rounded-3xl text-lg">
          FIND MATES
        </button>
        <button className="button-74  mt-10  flex rounded border-0 bg-indigo-500 px-8 py-2 text-lg text-white mx-8 focus:outline-none">
          BUY PETS
        </button>
        <button className="button-74  mt-10  flex rounded border-0 bg-indigo-500 px-8 py-2 text-lg text-white mx-8 focus:outline-none">
          SELL PETS
        </button>
        <button className="button-74  mt-10 flex rounded border-0 bg-indigo-500 px-8 py-2 text-lg text-white mx-8 focus:outline-none">
          ADOPT A PET
        </button>
        <button className="button-74  mt-10 flex rounded border-0 bg-indigo-500 px-8 py-2 text-lg text-white mx-8 focus:outline-none">
          REHOME A PET
        </button>
      </div>

      <div>
        <Features />
      </div>

      <div className="container mx-auto w-auto h-auto m-0">
        <Gallery />
      </div>

      <div>
        <Testimonial />
      </div>
      <div>
        <Connect />
      </div>

      <div className=" h-auto">
        <Footer />
      </div>
    </>
  );
};

// Usage of TinderCardSwipe component

// const cards = [
//   {
//     id: 1,
//     name: 'John',
//     bio: 'Software Engineer',
//     imageSrc: 'https://example.com/john.jpg',
//   },
//   {
//     id: 2,
//     name: 'Sarah',
//     bio: 'UX Designer',
//     imageSrc: 'https://example.com/sarah.jpg',
//   },
//   // Add more card objects as needed
// ];

//     <div>
//       {/* Render other components */}
//       {/* <TinderCardSwipe cards={cards} /> */}
//     </div>

export default Home;
