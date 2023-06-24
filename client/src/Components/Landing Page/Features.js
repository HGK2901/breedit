import React from "react";
// import cat from "../../Assests/catimages-removebg-preview.png";
// import dog from "../../Assests/dog-drawing__1_-removebg-preview.png";
// import hamster from "../../Assests/cute-hamster-illustration-hamster-kawaii-chibi-drawing-style-hamster-cartoon-vector__1_-removebg-preview.png";
// import rabbit from "../../Assests/cute-rabbit-illustration-rabbit-kawaii-chibi-drawing-style-rabbit-cartoon-bunny-vector.webp";
import { Link } from "react-router-dom";

const Features = () => {
  return (
    <>
      {/* <div className="rounded-3xl m-10 max-w-[90rem] md:flex md:flex-col space-y-4 bg-[#505f2f]  ">
        <div className="m-1 text-3xl max-w-full h-auto text-[#c88572] pt-4">
          CHOOSE YOUR PET
        </div>
        <div className="flex flex-wrap justify-center items-center text-center max-w-full h-auto m-10 pb-10 hover15 cursor-pointer border border-[#] border-r space-x-4 space-y-4 overflow-x-auto">
          <figure className="flex-shrink-0">
            <img
              src={cat}
              className="h-72 w-72 cursor-pointer rounded-full"
              alt=""
            />
          </figure>
          <figure className="flex-shrink-0">
            <img
              src={dog}
              className="h-72 w-72 cursor-pointer rounded-full"
              alt=""
            />
          </figure>
          <figure className="flex-shrink-0">
            <img
              src={hamster}
              className="h-60 w-60 cursor-pointer rounded-full"
              alt=""
            />
          </figure>
          <figure className="flex-shrink-0">
            <img
              src={rabbit}
              className="h-72 w-72 cursor-pointer rounded-full"
              alt=""
            />
          </figure>
        </div>
      </div> */}

      <section className="text-gray-600 body-font bg-[#c88572] mt[-1rem] md:m-0 lg:m-16 lg:rounded-3xl md:rounded-none blogCard pt-8 ">
        <div className="container px-8 py-12 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4">
              ME AGAR KAHU TUMSA HASI{" "}
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-[#505f2f]">
              lodda koie nahi bottle crucifix vinyl post-ironic four dollar
              toast vegan taxidermy. Gastropub indxgo juice poutine, ramps
              microdosing banh mi pug.
            </p>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-[#505f2f] inline-flex"></div>
            </div>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-[#505f2f] text-[#f7ebdb] mb-5 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-10 h-10"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-[#f7ebdb] text-lg title-font font-medium mb-3">
                  Shooting Stars
                </h2>
                <p className="leading-relaxed text-base text-[#505f2f]">
                  Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                  taxidermy. Gastropub indxgo juice poutine, ramps microdosing
                  banh mi pug VHS try-hard.
                </p>
                <Link className="mt-3 text-[#f7ebdb] hover:text-[#505f2f] inline-flex items-center">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-[#505f2f] text-[#f7ebdb] mb-5 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-10 h-10"
                  viewBox="0 0 24 24"
                >
                  <circle cx="6" cy="6" r="3"></circle>
                  <circle cx="6" cy="18" r="3"></circle>
                  <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-[#f7ebdb] text-lg title-font font-medium mb-3">
                  The Catalyzer
                </h2>
                <p className="leading-relaxed text-base text-[#505f2f]">
                  Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                  taxidermy. Gastropub indxgo juice poutine, ramps microdosing
                  banh mi pug VHS try-hard.
                </p>
                <Link className="mt-3 text-[#f7ebdb] inline-flex items-center hover:text-[#505f2f]">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-[#505f2f] text-[#f7ebdb] mb-5 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-10 h-10"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-[#f7ebdb] text-lg title-font font-medium mb-3">
                  END FEATURE
                </h2>
                <p className="leading-relaxed text-base text-[#505f2f]">
                  Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                  taxidermy. Gastropub indxgo juice poutine, ramps microdosing
                  banh mi pug VHS try-hard.
                </p>
                <Link className="mt-3 text-[#f7ebdb] inline-flex items-center hover:text-[#505f2f]">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <button className="flex mx-auto mt-16 border-0 py-2 px-8 focus:outline-none hover:bg- rounded text-lg button text-[#f7ebdb] bg-[#505f2f]">
            Button
          </button>
        </div>
      </section>
    </>
  );
};

export default Features;
