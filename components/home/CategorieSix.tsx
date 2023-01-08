import React, { useMemo } from "react";
import Horizontale from "../card/Horizontale";
import VerticaleLarge from "../card/VerticaleLarge";
import CategorieLoader from "../Loader/CategorieLoader";

export default function CategorieSix({ articles, loading, title }: any) {
  const firstArticle = useMemo(
    () => articles && articles.slice(0, 8),
    [articles]
  );

  if (loading) {
    return <CategorieLoader />;
  }
  return (
    <section className="px-4 md:px-16 py-8 md:py-16 mx-auto bg-secondary ">
      <div className="title flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-black uppercase">{title}</h2>
        <p className="bg-primary px-2 py-1 uppercase text-white cursor-pointer">
          Voir Plus
        </p>
      </div>
      <div className="background mb-8">
        <div className="background-card grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {firstArticle?.map((article: any) => (
            <div className="verticale-card" key={article.id}>
              <VerticaleLarge {...article} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
