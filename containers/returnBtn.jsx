import Link from "next/link";
import React from "react";

const ReturnBtn = ({ text }) => {
  return (
    <div className="my-10 transform  transition-all mx-auto items-center flex justify-center  ">
      <Link
        href={"/"}
        className="bg-primary1  hover:scale-105   transition-all   text-lg text-black font-medium px-4 py-3   mx-2 rounded-md"
      >
        {text}
      </Link>
    </div>
  );
};

export default ReturnBtn;
