import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import "./Burgermenu.css";

function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  let closeMenu = () => {
    setIsOpen(false);
  };

  let handleStateChange = (state) => {
    setIsOpen(state.isOpen);
  };

  return (
    <div className="md:hidden">
      <Menu
        id="burger-menu"
        right
        width={"100%"}
        isOpen={isOpen}
        onStateChange={(state) => handleStateChange(state)}
      >
        <a onClick={() => closeMenu()} id="burger-home" className="menu-item" href="#hero">
          Home
        </a>
        <a onClick={() => closeMenu()} id="burger-about" className="menu-item" href="#about">
          About me
        </a>
        <a onClick={() => closeMenu()} id="burger-portfolio" className="menu-item" href="#works">
          Portfolio
        </a>
        <a onClick={() => closeMenu()} id="burger-contact" className="menu-item" href="#contact">
          Contact me
        </a>
      </Menu>
    </div>
  );
}

export default BurgerMenu;
