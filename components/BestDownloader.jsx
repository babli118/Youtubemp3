import React from "react";

const BestDownloader = ({ bestHeading, p1, p2, p3, p4 }) => {
  return (
    <div>
      <h2 className="text-3xl font-semibold text-center my-6 text-text">
        {bestHeading}
      </h2>
      <div className="text-base text-text leading-7">
        <p>{p1}</p>
        <p>{p2}</p>
        <p>{p4}</p>
        <p>{p3}</p>
      </div>
    </div>
  );
};

export default BestDownloader;
