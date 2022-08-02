import React from "react";
import { FiChevronsDown } from "react-icons/fi";
//import avatar from "../images/avataaars.svg";

function HeroSection() {
  return (
    <div
      id="hero"
      className="flex items-center justify-between py-20 flex-col-reverse md:flex-row h-[100vh]"
    >
      <div className="max-w-8xl px-6  mx-auto">
        <h2 className="text-center md:text-left text-6xl mt-6 md:mt-0 mb-1 md:mb-3 text-indigo-500 dark:text-indigo-600 font-semibold">
          Hello <span className="inline-block animate-wave origin-[70%_70%]">👋</span>
          <br />
          <br />
          {/* 
          <span className="text-center md:text-left text-3xl mb-1 md:mb-3 text-indigo-500 dark:text-indigo-600">
            my name is
          </span> */}
          <span className="flex flex-col items-center justify-center m-0">
          <span className="before:content-['my_name_is'] relative before:absolute before:left-[-8.1ch] before:bottom-0 before:text-3xl before:text-indigo-500 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 ">
            Fernando Arriondo
          </span>
          <span className="before:content-['and_i\'m_a'] relative before:absolute before:left-[-6.4ch] before:bottom-0 before:text-3xl before:text-indigo-500 text-center ">
            Full stack web developer
          </span>
          </span>
        </h2>
        <br />
          <br />
        <a
          href="#works"
          className="block mx-auto px-8 py-3 text-base font-medium text-indigo-600 hover:text-indigo-700 dark:text-indigo-500 dark:hover:text-indigo-600 md:text-md
          w-max relative after:absolute after:w-0 after:left-1/2 after:hover:left-[5%] after:bottom-0 after:bg-indigo-600 dark:after:bg-indigo-600 after:h-[2px] after:hover:w-[90%] after:transition-all after:duration-500"
        >
          Explore my projects! &nbsp;
          <FiChevronsDown className="inline" />
        </a>
      </div>
    </div>
  );
}

export default HeroSection;
