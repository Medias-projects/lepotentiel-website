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

function Background({ title, category, image, uri, slug }: Props) {
  return (
    <Link
      href={{
        pathname: `/articles/${uri}`,
        query: { slug: slug },
      }}
    >
      <article className="background-card relative">
        <div className="background-card__image">
          <Image
            src={image}
            alt={title}
            width={600}
            height={400}
            className="h-[300px] object-fit"
          />
        </div>
        <div className="background-card__content absolute inset-0 flex flex-col justify-end p-4 bg-[rgba(0,0,0,.4)]">
          <p className="background-card__category bg-primary w-1/2 md:w-1/3 text-white text-center font-semibold py-1 mb-2 text-md ">
            {category}
          </p>
          <h3 className="background-card__title text-md text-white font-semibold mb-2 line-clamp-2 md:line-clamp-3">
            {title}
          </h3>
        </div>
      </article>
    </Link>
  );
}

export default Background;
