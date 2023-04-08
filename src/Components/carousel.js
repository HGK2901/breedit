import React, { useState } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const Slideshow = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div className="relative">
      {/* Display current image */}
      <img src={images[activeIndex]} alt={`Slide ${activeIndex}`} className="w-full h-full object-cover" />

      {/* Display next and previous buttons */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-md"
      >
        Previous
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-md"
      >
        Next
      </button>
    </div>
  );
};

export default Slideshow;

//create a slideshow using tailwind in react?