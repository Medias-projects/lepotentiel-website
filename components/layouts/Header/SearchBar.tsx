import React from "react";
import Iconify from "../../shared/Iconify";

function SearchBar() {
  return (
    <div className="search-bar flex items-center bg-primary py-2 px-5 rounded-full">
      <input
        type="text"
        placeholder="Rechercher"
        className="rounded bg-transparent w-full focus:outline-none placeholder:text-white text-gray-300 "
      />
      <Iconify
        icon="bx:bx-search"
        className="text-white text-2xl font-semibold mr-2"
      />
    </div>
  );
}

export default SearchBar;
