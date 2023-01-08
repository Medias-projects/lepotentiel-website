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
      href={{
        pathname: `/articles/${uri}`,
        query: { slug: slug },
      }}
    >
      <article className="verticale-card min-h-[350px] shadow-md ">
        <div className="verticale-card__image">
          <Image
            src={image}
            alt={title}
            width={600}
            height={300}
            className="h-[200px] bg-gray-200"
          />
        </div>
        <div className="verticale-card__content  flex flex-col  p-4 bg-white h-[150px] ">
          <p className="verticale-card__category bg-primary w-1/2  text-white text-center font-semibold py-1 mb-2 text-sm uppercase">
            {category}
          </p>
          <h3 className="verticale-card__title text-md text-black font-semibold mb-2 line-clamp-2 md:line-clamp-3">
            {title}
          </h3>
        </div>
      </article>
    </Link>
  );
}

export default Verticale;
