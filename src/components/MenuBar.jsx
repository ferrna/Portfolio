import React from "react";

function MenuBar() {
  return (
    <header className="sticky top-[-1px] w-[100%] text-gray-600 text-base py-2 flex justify-between menu-bg-color transition-all">
      <div>
        <a href="#home">Home</a>
      </div>
      <aside className="flex min-w-[80%] md:min-w-[35%] justify-around">
        <a href="#about">
          <p className="menu-title-beforeHover">About Me</p>
        </a>
        <a href="#skills">
          <p className="menu-title-beforeHover">Skills</p>
        </a>
        <a href="#works">
          <p className="menu-title-beforeHover">Projects</p>
        </a>
      </aside>
    </header>
  );
}

export default MenuBar;
