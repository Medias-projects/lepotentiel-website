import React, { useMemo } from "react";
import { useSearch } from "../hooks/useSearch";
import { useArticles } from "../hooks/useArticles";
import { useRouter } from "next/router";
import Search from "../components/card/Search";
import HeroLoader from "../components/Loader/HeroLoader";

function Recherche() {
  const router = useRouter();
  const { search } = router.query;
  const { searchResults, ArticleLoading, error } = useSearch(search as string);

  const numberOfResult = useMemo(
    () => searchResults?.length || 0,
    [searchResults]
  );

  if (ArticleLoading) {
    return (
        <div className="animate-pulse px-4 md:px-16 py-8 md:py-16 mx-auto">
            <span>
                Chargement en cours...
            </span>
        <h1 className="h-10 bg-gray-300 w-2/3 rounded-full mb-8"></h1>
        <div className="container">
          <div className="verticale-card">
            <div className="h-40 bg-gray-300 w-full md:w-2/3 rounded-lg mb-6"></div>
            <div className="h-40 bg-gray-300 w-full md:w-2/3 rounded-lg mb-6"></div>
            <div className="h-40 bg-gray-300 w-full md:w-2/3 rounded-lg mb-6"></div>
            <div className="h-40 bg-gray-300 w-full md:w-2/3 rounded-lg mb-6"></div>
            <div className="h-40 bg-gray-300 w-full md:w-2/3 rounded-lg mb-6"></div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <section className="px-4 md:px-16 py-8 md:py-16 mx-auto">
      {search && (
        <h1 className="text-2xl font-semibold mb-8 text-primary">
          il y a {numberOfResult} résultats pour la recherche : {`"${search}"`}
        </h1>
      )}
      <div className="container">
        {searchResults?.map((article: any) => (
          <div className="verticale-card" key={article.id}>
            <Search {...article} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Recherche;
