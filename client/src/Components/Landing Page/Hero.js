import React from "react";
// import Navbar from "./Navbar";
import videobg from "file:///C:/BREEDIT/client/src/Assests/pexels-hespinosafilms-4070324-1920x1080-50fps.mp4";

const Hero = () => {
  return (
    <>
      
      <div className="relative">
        <video src={videobg} autoPlay loop muted className="w-full h-auto filter brightness-50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-transparent p-4 text-center  ">
            <h1 className="text-4xl text-[#f7ebdb] mb-4">welcome</h1>
            <p className="text-[#f7ebdb] mb-4">
              just breedit breedti....breaking news 6 man raps a lizard by
              listening song breedit by nirupam
            </p>
            <div className="mt-4">
              <button className="button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
                Button 1
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;




//     <div>
//  <section className="text-[#505f2f] body-font mx-20 ">
//   <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
//     <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
//       <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium  text-[#c88572]">Before they sold out
//         <br className="hidden lg:inline-block"/>readymade gluten
//       </h1>
//       <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
//       <div className="flex justify-center">
//         <button className="inline-flex  border-0 py-2 px-6 focus:outline-none  rounded text-lg button">Button</button>

//       </div>
//     </div>
//     <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
//       <img className="object-cover object-center rounded-lg " alt="hero" src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1886&q=80" />
//     </div>
//   </div>
// </section>
//     </div>
