import React, { useMemo } from "react";
import { useRouter } from "next/router";
import { useArticlesByCategories } from "../../hooks/useArticlesByCategories";
import Horizontale from "../../components/card/Horizontale";
import Background from "../../components/card/Background";
import Verticale from "../../components/card/Verticale";
import HeroLoader from "../../components/Loader/HeroLoader";
import Seo from "../../components/shared/Seo";

function Categoriesdetails() {
  const router = useRouter();
  const { name } = router.query;
  const { categories, isFetching } = useArticlesByCategories(
    name as string,
    50
  );
  const firstTenArticles = useMemo(() => categories?.slice(0, 9), [categories]);
  const secondTenArticles = useMemo(
    () => categories?.slice(9, 20),
    [categories]
  );

  const title = useMemo(() => name?.toString().toLowerCase(), [name]);

  const thirdTenArticles = useMemo(() => categories?.slice(20), [categories]);

  if (isFetching) {
    return <HeroLoader />;
  }

  return (
    <>
      <Seo title={title} />
      <section className="px-4 md:px-16 py-8 md:py-16 mx-auto">
        <h1 className="text-primary font-bold text-3xl uppercase mb-6">
          {name}
        </h1>
        <div className="first-ten-articles grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {firstTenArticles?.map((article: any) => (
            <Background
              key={article.id}
              title={article.title}
              image={article.image}
              slug={article.slug}
              uri={article.uri}
              category={name as string}
            />
          ))}
        </div>
        <div className="first-ten-articles grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {secondTenArticles?.map((article: any) => (
            <Verticale
              key={article.id}
              title={article.title}
              image={article.image}
              slug={article.slug}
              uri={article.uri}
              category={name as string}
            />
          ))}
        </div>
        <div className="first-ten-articles grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {thirdTenArticles?.map((article: any) => (
            <Horizontale
              key={article.id}
              title={article.title}
              image={article.image}
              slug={article.slug}
              uri={article.uri}
              category={name as string}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default Categoriesdetails;
