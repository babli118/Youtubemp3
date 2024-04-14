import React from "react";

const Skeleton = () => {
  return (
    <div style={{ width: "240px", height: "230px" }} className="bg-white ">
      <div className="skelecontainer">
        <div className="skeletonContainer">
          <div className="skeleton"></div>
        </div>
        <div className="textContainer">
          <div className="textSkeleton"></div>
        </div>
        <div className="flex justify-start items-center">
          <div className="logoContainer">
            <div className="logoSkeleton"></div>
          </div>
          <div className="channelContainer">
            <div className="channelSkeleton"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
