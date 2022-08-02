import React from "react";

function HeaderMenu() {
  return (
    <div className="hidden md:block sticky top-[-1px] z-30 w-[100%] text-gray-200 dark:text-gray-300 bg-indigo-500 dark:bg-slate-800 text-md">
      <header className="max-w-5xl mx-auto py-3 flex justify-between">
        <div className="pl-10">
          <a href="#hero">Home</a>
        </div>
        <aside className="flex min-w-[80%] md:min-w-[50%] justify-around">
          <a href="#about">
            <p className="menu-title-beforeHoverB">About Me</p>
          </a>
          <a href="#skills">
            <p className="menu-title-beforeHoverB">Skills</p>
          </a>
          <a href="#works">
            <p className="menu-title-beforeHoverB">Projects</p>
          </a>
          <a href="#contact">
            <p className="menu-title-beforeHoverB">Contact me</p>
          </a>
        </aside>
      </header>
    </div>
  );
}

export default HeaderMenu;
