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

function Horizontale({ title, category, image, uri, slug }: Props) {
  return (
    <Link
      href={`/articles/${uri}`}
    >
      <article className="horizontale-card mb-8 border border-gray-200 bg-white ">
        <div className="horizontale-card__image">
          <Image
            src={image}
            alt={title}
            width={200}
            height={250}
            className="object-cover h-[115px] w-[100%] bg-gray-200"
          />
        </div>
        <div className="horizontale-card__content  flex flex-col justify-center">
          <p className="horizontale-card__category bg-primary w-2/3 md:w-1/2 uppercase  text-white text-center font-semibold py-1 px-2 mb-2 text-sm ">
            {category}
          </p>
          <h3 className="horizontale-card__title text-md text-black font-semibold mb-2 line-clamp-2 ">
            {title}
          </h3>
        </div>
      </article>
    </Link>
  );
}

export default Horizontale;
