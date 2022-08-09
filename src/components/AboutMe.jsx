import React from "react";
import myImg from "../images/hero.jpg";
import SectionTitle from "./SectionTitle";

function AboutMe() {
  return (
    <div
      id="about"
      className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 py-12"
    >
      <img src={myImg} alt="Fernando" className="w-full md:w-6/12 rounded-lg object-cover" />
      <div className="w-full md:w-6/12">
        <SectionTitle>About Me</SectionTitle>
        <p className="text-md text-gray-600 dark:text-gray-300">
          I have been studying software development for a year, learning the stack PERN and
          continuoslly improving myself technically and as a person. I enjoy going through a
          development proccess as much as i love any of my hobbies. There's a time where we all find
          what we are looking for and I believe software IT is a world where i can leave my mark.
          I'm a graduated from soyHenry, an autidadictic student and currently accelerating in
          Alkemy. I love to play sports, games and music instruments.
        </p>
        <a
          href="mailto:arriondovfernando@gmail.com"
          className="block mt-3 text-md md:text-lg text-gray-700 dark:text-gray-300 underline decoration-1 hover:text-indigo-500 dark:hover:text-indigo-500"
        >
          arriondovfernando@gmail.com
        </a>
      </div>
    </div>
  );
}

export default AboutMe;
