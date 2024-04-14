import React from "react";

const FeaturesCard = ({ heading, text }) => {
  return (
    <div
      style={{
        borderRadius: "0.75rem",
        // backgroundColor: "rgb(255 0 0 / 0.4)",
      }}
      className="flex flex-col bg-clip-border text-gray-700 shadow-md p-4  w-full relative bg-white"
    >
      <div className="my-2 block text-center text-lg font-semibold leading-snug tracking-normal  antialiased">
        {heading}
      </div>
      <p className="block px-2 text-base font-normal text-text/90 leading-relaxed text-inherit antialiased">
        {text}
      </p>
    </div>
  );
};

export default FeaturesCard;
