"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import logo1 from "../public/logo1.svg";
import Link from "next/link";
import config from "../config";
import { RiArrowDropDownLine, RiMenuLine } from "react-icons/ri";

const TaskBar = ({ t }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const closeOpenMenus = useCallback(
    (e) => {
      if (
        isOpen &&
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target)
      ) {
        setIsOpen(false);
      }
    },
    [isOpen]
  );

  useEffect(() => {
    document.addEventListener("mousedown", closeOpenMenus);
    return () => {
      document.removeEventListener("mousedown", closeOpenMenus);
    };
  }, [closeOpenMenus]);

  const links = config.lang_name.map((ln, index) => {
    // Dynamically import the image based on language
    const flag = require(`../public/flags/${config.flags_name_prefix[index]}.svg`);

    return (
      <Link
        key={index}
        className="py-2 sm:py-3 px-6 cursor-pointer text-text bg-white text-sm font-medium hover:bg-background1 flex items-center active:scale-95"
        href={`/${config.lang[index]}${config.splitter}${config.current_version}`}
      >
        <Image className="w-4 h-4 mr-2" src={flag} alt="flag"></Image>
        {ln}
      </Link>
    );
  });
  // console.log(`Current version: ${config.current_version}`)
  return (
    <nav className="h-[50px] sm:h-[70px] w-full shadow-sm grid grid-cols-2 items-center px-5 sm:px-20 bg-white backdrop-blur-xl z-10 fixed top-0">
      <div className="flex">
        <Link
          href={`/${t && t.lang ? t.lang : "en"}${config.splitter}${
            config.current_version
          }`}
          className="font-bold text-2xl text-text flex active:scale-95 justify-center items-center transition-all "
        >
          <Image
            className="mx-2"
            src={logo1}
            alt="Logo"
            width={36}
            height={30}
          ></Image>
          <span className="hidden sm:inline ">
            <span className="text-text font-bold ">{config.site_name}</span>
            <span className="text-primary1 text-sm font-bold ">.io</span>
          </span>
        </Link>
      </div>
      <div className="justify-end flex gap-4 relative" ref={dropdownRef}>
        <span
          onClick={toggleOpen}
          className={`cursor-pointer font-normal text-md text-text flex items-center px-3 py-2 hover:bg-background1 rounded-lg transition-all active:scale-95 ${
            isOpen && "bg-[white]"
          }`}
        >
          Languages
          <RiArrowDropDownLine
            size={28}
            className={`transition-transform transform ${
              isOpen && "rotate-180"
            }`}
          />
        </span>
        {isOpen ? (
          <div className="divide-y divide-background1 rounded-lg flex flex-col shadow-sm w-36 z-10 bg-gray-50/95 backdrop-blur-2xl h-max absolute sm:mt-12 mt-8 transition-all duration-200 ease-in-out opacity-100 scale-100 pt-2">
            {links}
          </div>
        ) : (
          <div className="w-32 z-10 backdrop-blur-xl bg-gray-50 h-max absolute mt-12 rounded-xl hidden">
            {links}
          </div>
        )}
      </div>
    </nav>
  );
};

export default TaskBar;
