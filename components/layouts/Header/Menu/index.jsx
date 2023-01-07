import React, { useState } from "react";
import Link from "next/link";
import Item from "./Item";
import Iconify from "../../../shared/Iconify";
import Dropdown from "./Dropdown";

function Menu() {
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
  ]);

  const [plus] = useState({
    label: "Plus",
    children: [
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
    ],
  });
  return (
    <nav>
      <ul className="flex items-center justify-center">
        <li>
          <Link
            href="/"
            className="flex items-center gap-2 hover:bg-red-500 p-4"
          >
            <Iconify
              icon="material-symbols:home-outline-rounded"
              className="text-2xl text-white"
            />
            <span className="text-white font-semibold uppercase mr-4">
              Accueil
            </span>
          </Link>
        </li>
        {menu.map((item, index) => (
          <Item key={index} {...item} />
        ))}
        <Dropdown {...plus} />
      </ul>
    </nav>
  );
}

export default Menu;
