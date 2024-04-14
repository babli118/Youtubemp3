import React from "react";
import Skeleton from "../containers/skeleton.jsx";

const SkeletonContainer = ({ keywords }) => {
  const numberOfSkeletons = 20;
  return (
    <div>
      <h3 className="text-text text-3xl  mb-4 text-start mx-8 sm:mx-0 ">
        Showing Search Results For:
        <span className="font-semibold"> {keywords}</span>
      </h3>
      <div className="flex flex-col justify-center items-center text-start ">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {/* Loop or map over the array to render multiple Skeleton components */}
          {[...Array(numberOfSkeletons)].map((_, index) => (
            <Skeleton key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkeletonContainer;
