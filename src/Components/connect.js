import React from "react";

const Connect = () => {
  return (
    <section class="text-gray-600 body-font rounded-3xl">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-12">
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-[#264143]">
            CONNECT WITH US
          </h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably
            haven't heard of them man bun deep.
          </p>
        </div>
        <div class="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
          <div class="relative flex-grow w-full">
            <label for="full-name" class="leading-7 text-sm text-[#264143]">
              Full Name
            </label>
            <input
              type="text"
              id="full-name"
              name="full-name"
              class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-[#de5499] focus:bg-transparent focus:ring-2 focus:ring-[#e8a5c7] text-base outline-none text-[#264143] py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div class="relative flex-grow w-full">
            <label for="email" class="leading-7 text-sm text-[#264143]">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-[#de5499] focus:bg-transparent focus:ring-2 focus:ring-[#e8a5c7] text-base outline-none text-[#264143] py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button class="button-74 text-white  border-0 py-2 px-8 focus:outline-none rounded text-lg">
            SUBMIT
          </button>
        </div>
      </div>
    </section>
  );
};

export default Connect;
