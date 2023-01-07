import React, { useState } from "react";
import Logo from "../../shared/Logo";
import SearchBar from "./SearchBar";
import Headericons from "./Headericons";
import Menu from "./Menu";
import Drawer from "./Menu/Drawer";
import Iconify from "../../shared/Iconify";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header className="shadow-md lg:shadow-sm">
        <div className="flex justify-around p-2 items-center">
          <Logo />
          <div className="search hidden lg:flex">
            <SearchBar />
          </div>
          <div className="socials hidden lg:flex">
            <Headericons />
          </div>
          <div
            className="hamburger lg:hidden cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <Iconify
                icon="material-symbols:close"
                className="text-primary text-4xl"
              />
            ) : (
              <Iconify icon="bx:bx-menu" className="text-primary text-4xl" />
            )}
          </div>
        </div>
        <div className="menu-container bg-primary hidden lg:block">
          <Menu />
        </div>
      </header>
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}

export default Header;
