import React, {useState} from "react";
import Iconify from "../../shared/Iconify";
import { useRouter } from "next/router";

function SearchBar() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/recherche?search=${search}`);
  };


  return (
    <form onSubmit={handleSearch} className="search-bar flex items-center bg-primary py-2 px-5 rounded-full">
      <input
        type="text"
        placeholder="Rechercher"
        className="rounded bg-transparent w-full focus:outline-none placeholder:text-white text-gray-300 "
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Iconify
        icon="bx:bx-search"
        className="text-white text-2xl font-semibold mr-2"
      />
    </form>
  );
}

export default SearchBar;
