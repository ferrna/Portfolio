import React from "react";
import { FiChevronsDown } from "react-icons/fi";
import avatar from "./avataaars.svg";

function HeroSection() {
  return (
    <div id="hero" className="flex items-center justify-evenly py-10 flex-col-reverse md:flex-row">
      <div>
        <h1 className="text-center md:text-left text-4xl mt-6 md:mt-0 mb-1 md:mb-3 text-indigo-600 dark:text-indigo-500 font-semibold">
          Hi ! <p className="inline-block animate-wave origin-[70%_70%]">👋🏻</p>
          <br /> i'm Fernando Arriondo
        </h1>
        <p className="text-xl max-w-md my-3 md:mt-0 text-center md:text-left text-gray-600 dark:text-gray-300">
          I'm a full stack developer!
        </p>
        <a
          href="#works"
          className="block mx-auto px-8 py-3 text-base font-medium text-indigo-600 hover:text-indigo-700 md:text-md
          w-max relative after:absolute after:w-0 after:left-1/2 after:hover:left-[5%] after:bottom-0 after:bg-indigo-600 after:h-[2px] after:hover:w-[90%] after:transition-all after:duration-500"
        >
          Explore my projects! &nbsp;
          <FiChevronsDown className="inline" />
        </a>
      </div>
      <img src={avatar} alt="Avatar Logo" className="w-48 md:w-64" />
    </div>
  );
}

export default HeroSection;
