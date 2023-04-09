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
// import niru1 from "../Assests/niru1.png";
// import niru2 from "../Assests/niru2.png";
// import niru3 from "../Assests/niru3.png";
// import niru4 from "../Assests/niru4.png";
// import Slideshow from "../Components/carousel";
import Slideshow from "../Components/carousel"

const Home = () => {
  const images = [
    'https://images.unsplash.com/photo-1450778869180-41d0601e046e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1886&q=80',
    'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
    'https://images.unsplash.com/photo-1612267168669-679c961c5b31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    'https://images.unsplash.com/photo-1638255402906-e838358069ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80'

    // {niru1},
    // {niru2},{niru3}, {niru4}
   ]
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
            <img src={front} className="imeg w-1/2 h- " alt="" />
          </div>
        </div>
      </main>
      <div className=" bg-[#264143] rounded-3xl m-10 w-[90rem]">
        <div className=" m-1 text-center text-3xl text-[#f2ebe9] pt-4 ">
          CHOOSE YOUR PET
        </div>
        <div className="flex justify-evenly m-10 pb-10 hover15">
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
      <div className=" h-[4rem] m-10 flex justify-evenly align-middle ">
        <div className="">
          <button className="bg-white button-74 mr-[3rem]">FIND PETS</button>
          <button className="mr-[3rem] button-74">SELL PETS</button>
          <button className="button-74 mr-[3rem]">ADOPT A PET</button>
          <button className="button-74 mr-[3rem]">REHOME A PET</button>
        </div>
      </div>
      <div class="bg-[#264143] max-w-full mx-auto py-8">
  <div class="flex justify-between gap-4 px-4">
    <div class="bg-[#eddcd9] p-3 rounded-3xl border-r-8 border-b-8 border-[#de5499] flex-1">
      <h2 class="text-center text-xl font-semibold mb-2 text-[#264143]">
        Cats
      </h2>
      <p class="text-justify text-[#264143]">
        Cats are domestic mammals and are often kept as pets. They are
        known for their agility, independence, and playful behavior.
      </p>
    </div>

    <div class="bg-[#eddcd9] p-3 rounded-3xl border-r-8 border-b-8 border-[#de5499] flex-1">
      <h2 class="text-center text-xl font-semibold mb-2 text-[#264143]">
        Dogs
      </h2>
      <p class="text-justify text-[#264143]">
        Dogs are domestic mammals and are one of the most popular pets.
        They are known for their loyalty, companionship, and ability to be
        trained.
      </p>
    </div>
    
    <div class="bg-[#eddcd9] p-3 rounded-3xl border-r-8 border-b-8 border-[#de5499] flex-1">
      <h2 class="text-center text-xl font-semibold mb-2 text-[#264143]">
        Birds
      </h2>
      <p class="text-justify text-[#264143]">
        Birds are feathered creatures and can make great pets. They come
        in various species and are known for their colorful plumage,
        ability to mimic sounds, and companionship.
      </p>
    </div>
    
    <div class="bg-[#eddcd9] p-3 rounded-3xl border-r-8 border-b-8 border-[#de5499] flex-1">
      <h2 class="text-center text-xl font-semibold mb-2 text-[#264143]">
        Fish
      </h2>
      <p class="text-justify text-[#264143]">
        Fish are aquatic creatures that can be kept as pets in aquariums.
        They come in different shapes, sizes, and colors, and are known
        for their calming effect and low maintenance requirements.
      </p>
    </div>
  </div>
</div>


          {/* Box 5 */}
          {/* <div className="bg-[#eddcd9] p-6 rounded-3xl border-r-8 border-b-8 border-[#de5499]">
            <h2 className="text-center text-2xl font-semibold mb-4 text-[#264143] bg-[#eddcd9]">
              Hamsters
            </h2>
            <p className="text-justify bg-[#eddcd9] text-[#264143]">
              Hamsters are small rodents and are often kept as pets. They are
              known for their compact size, cute appearance, and playful nature.
            </p>
          </div> */}
          {/* Box 6 */}
          {/* <div className="bg-[#eddcd9] p-6 rounded-3xl border-r-8 border-b-8 border-[#de5499]">
            <h2 className="text-center text-2xl font-semibold mb-4 text-[#264143] bg-[#eddcd9]">
              Turtles
            </h2>
            <p className="text-justify bg-[#eddcd9] text-[#264143]">
              Turtles are reptiles that can make unique pets. They are known for
              their slow-moving nature, longevity, and ability to adapt to
              various environments.
            </p>
          </div> */}
        
   



          {/* <div className=" h-96 ">
     
      <Slideshow images={images} />
    </div> */}

        
        <div className="container mx-auto w-auto h-auto m-0">
      <Slideshow images={images} />
    </div>
        
    <div className=" h-auto">
<Footer/>
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
