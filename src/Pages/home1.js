import React from "react";
import Nav from "../Components/Nav";
import front from "../Assests/front-removebg-preview.png";
import cat from "../Assests/catimages-removebg-preview.png";
import dog from "../Assests/lastdog1-removebg-preview.png";
import hamster from "../Assests/hama-removebg-preview.png";
import rabbit from "../Assests/lastbcute-rabbit-illustration-rabbit-kawaii-chibi-drawing-style-rabbit-cartoon-bunny-vector-removebg-preview.png";


const Home = () => {
 
  return (


    <>
      <Nav />

      <main className="flex justify-around">
        <div className="main h-60 py-80 pl-9 rounded-3xl">
          <div className="heade text-6xl">Empowering Pet Care.</div>
          <p className="w-1/3 pasa text-xl">
            Elevate Your Pet's Well-being with BREEDIT's Cutting-Edge Solutions.
            Unleash the Best for Your Furry Friend with BREEDIT's Comprehensive
            Pet Care.
          </p>
          <div className="btns">
            <button className="creatbutton2">FIND A PET</button>
          </div>
          <div className="imegd">
            <img src={front} className="imeg w-1/2 h-" alt="" />
          </div>
        </div>
      </main>
      <div className="bg-[#264143] rounded-3xl m-10 w-[90rem]">
        <div className="m-1 text-center text-3xl text-[#f2ebe9] pt-4 ">
          CHOOSE YOUR PET
        </div>
        <div className="flex justify-evenly m-10 pb-10 hover15">
          <figure>
            <img
              src={cat}
              className="h-72 cursor-pointer bg-[#eddcd9] rounded-full "
              alt=""
            />
          </figure>
          <figure>
            <img
              src={dog}
              className="cursor-pointer h-72 bg-[#eddcd9] rounded-full"
              alt=""
            />
          </figure>
          <figure>
            <img
              src={hamster}
              className="cursor-pointer h-60 bg-[#eddcd9] rounded-full "
              alt=""
            />
          </figure>
          <figure>
            <img
              src={rabbit}
              className="cursor-pointer h-72 bg-[#eddcd9] rounded-full"
              alt=""
            />
          </figure>
        </div>
      </div>
      <div className="flex justify-center align-middle">
        <div className="bg-[#e99f4c] w-[60rem] h-[22rem] text-center p-5 rounded-3xl text-[#f2ebe9]">
          <h1 className="text-3xl pb-10">Connect & Meet Pets on BREEDIT </h1>
          <p className="text-xl">
            Whether you’re looking for a new pet, want to breed your furry
            friend, or need to find a forever home for your pet, we have you
            covered.
          </p>
          <br />
          <p className="text-xl">
            Petmeetly is your one-stop solution for pet adoption, pet breeding,
            and pet for sale.
          </p>
          <br />
          <p className="text-xl">
            We provide a safe and secure platform for pet owners to connect,
            chat, and meet up with their furry friends </p>
            </div>

<div class="bg-[#eddcd9] p-3 rounded-3xl border-r-8 border-b-8 border-[#de5499] flex-1">
  <h2 class="text-center text-xl font-semibold mb-2 text-[#264143]">
    Dogs
  </h2>
  <p class="text-justify text-[#264143]">
    Dogs are domestic mammals and are one of the most popular pets
    worldwide. They are known for their loyalty, companionship, and
    protective nature.
  </p>
</div>

<div class="bg-[#eddcd9] p-3 rounded-3xl border-r-8 border-b-8 border-[#de5499] flex-1">
  <h2 class="text-center text-xl font-semibold mb-2 text-[#264143]">
    Hamsters
  </h2>
  <p class="text-justify text-[#264143]">
    Hamsters are small rodents and are commonly kept as pets. They are
    known for their small size, low maintenance, and cute appearance.
  </p>
</div>

<div class="bg-[#eddcd9] p-3 rounded-3xl border-r-8 border-b-8 border-[#de5499] flex-1">
  <h2 class="text-center text-xl font-semibold mb-2 text-[#264143]">
    Rabbits
  </h2>
  <p class="text-justify text-[#264143]">
    Rabbits are small mammals and are often kept as pets. They are
    known for their cute appearance, gentle nature, and ability to bond
    with their owners.
  </p>
</div>
</div>
 
</>
);
};

export default Home;
