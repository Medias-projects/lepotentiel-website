import React, { useMemo } from "react";
import Horizontale from "../card/Horizontale";
import Verticale from "../card/Verticale";
import Background from "../card/Background";
import CategorieLoader from "../Loader/CategorieLoader";

export default function CategorieThree({ articles, loading, title }: any) {
  const firstArticle = useMemo(
    () => articles && articles.slice(0, 4),
    [articles]
  );
  const twoArticles = useMemo(
    () => articles && articles.slice(4, 10),
    [articles]
  );
  if (loading) {
    return <CategorieLoader />;
  }
  return (
    <section className="px-4 md:px-16 py-8 md:py-16 mx-auto bg-gray-50 ">
      <div className="title flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-gray-800 uppercase">{title}</h2>
        <p className="bg-primary px-2 py-1 uppercase text-white cursor-pointer">
          Voir Plus
        </p>
      </div>
      <div className="background mb-8">
        <div className="background-card grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {firstArticle?.map((article: any) => (
            <div className="verticale-card" key={article.id}>
              <Background {...article} />
            </div>
          ))}
        </div>
      </div>
      <div className="horizontale">
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-8">
          {twoArticles?.map((article: any) => (
            <div className="horizontale-card__item" key={article.id}>
              <Horizontale {...article} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
