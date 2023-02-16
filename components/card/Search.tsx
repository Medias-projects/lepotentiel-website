import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  category: string;
  date: string;
  uri: string;
  slug: string;
};

function Search({ title, category, date, uri, slug }: Props) {
  return (
    <Link
      href={`/articles/${uri}`}
    >
      <article className="mb-8 border border-gray-200 bg-white p-4 md:w-[80%] ">
        <div className="horizontale-card__content  flex flex-col justify-center">
          <p className="horizontale-card__category bg-primary w-1/2 md:w-1/3 lg:w-1/4 uppercase  text-white text-center font-semibold py-1 px-2 mb-2 text-sm ">
            {category}
          </p>
          <h3 className="horizontale-card__title text-md text-black font-semibold mb-2 line-clamp-2 ">
            {title}
          </h3>
          <p>
            <span className="horizontale-card__date text-gray-500 text-sm">
              {date}
            </span>
          </p>
        </div>
      </article>
    </Link>
  );
}

export default Search;
