import React, { useState } from "react";
import Logo from "../../../shared/Logo";
import Headericons from "../Headericons";
import SearchBar from "../SearchBar";
import Item from "./Item";
import Dropdown from "./Dropdown";

function Drawer({ isOpen, setIsOpen }) {
  const [menu] = useState(() => [
    {
      label: "Focus",
      link: "/categories/focus",
    },
    {
      label: "A haute voix",
      link: "/categories/a-haute-voix",
    },
    {
      label: "Nation",
      link: "/categories/nation",
    },
    {
      label: "International",
      link: "/categories/international",
    },
    {
      label: "Annonces",
      link: "/categories/annonces",
    },
    {
      label: "Apostrophe",
      link: "/categories/apostrophe",
    },
    {
      label: "Economie",
      link: "/categories/economie",
    },
    {
      label: "Culture",
      link: "/categories/culture",
    },
    {
      label: "Sports",
      link: "/categories/sports",
    },
    {
      label: "Société",
      link: "/categories/societe",
    },
    {
      label: "Forum",
      link: "/categories/forum",
    },
  ]);

  return (
    <div
      className={
        isOpen
          ? "bg-black min-h-screen fixed top-0 z-10 w-[75%] p-4 transition-all duration-1000 delay-200 ease-in-out lg:hidden"
          : "hidden"
      }
    >
      <div className="flex flex-col w-full gap-4 px-8 mb-6">
        <Logo />
        <SearchBar />
      </div>
      <div className="menu mb-6">
        <ul className="flex items-start flex-col px-8 gap-1">
          {menu.map((item, index) => (
            <Item key={index} {...item} onClick={() => setIsOpen(false)} />
          ))}
        </ul>
      </div>
      <div className="icons flex justify-start px-8 ">
        <Headericons />
      </div>
    </div>
  );
}

export default Drawer;
