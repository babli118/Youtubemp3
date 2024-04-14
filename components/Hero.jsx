import React from "react";

const Hero = ({ text, tag }) => {
  return (
    <div className="mt-28 md:mt-[8.5rem]  md:w-[70vw] lg:w-[55vw] w-[85vw] sm:mb-4  mx-auto">
      <h1 className="text-text text-center font-bold text-4xl sm:text-5xl mx-2 mb-2 ">
        {text}
      </h1>
      <p className="text-center text-text  text-base   font-normal mb-10">
        {tag}
      </p>
    </div>
  );
};

export default Hero;
