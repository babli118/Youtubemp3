import React from "react";

const YtDlInfo = ({ ytInfo }) => {
  return (
    <div className="text-text text-start mx-auto flex flex-col items-center mb-6 justify-center md:w-[77vw] xl:w-[45vw] w-[90vw] ">
      <p className=" mt-4 text-base text-text leading-7">{ytInfo}</p>
    </div>
  );
};

export default YtDlInfo;
