import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  category: string;
  image: string;
  uri: string;
  slug: string;
};

function Verticale({ title, category, image, uri, slug }: Props) {
  return (
    <Link
      href={`/articles/${uri}`}
    >
      <article className="verticale-card min-h-[400px] shadow-md ">
        <div className="verticale-card__image">
          <Image
            src={image}
            alt={title}
            width={600}
            height={300}
            className="h-[300px] bg-gray-200 "
          />
        </div>
        <div className="verticale-card__content  flex flex-col justify-start p-4 bg-white h-[180px] ">
          <p className="verticale-card__category bg-primary w-1/2 md:w-1/3 text-white text-center font-semibold py-1 mb-2 text-md uppercase ">
            {category}
          </p>
          <h3 className="verticale-card__title text-xl text-black font-semibold mb-2 line-clamp-2 md:line-clamp-3">
            {title}
          </h3>
        </div>
      </article>
    </Link>
  );
}

export default Verticale;
