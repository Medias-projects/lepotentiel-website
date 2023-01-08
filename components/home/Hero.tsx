import React, { useMemo } from "react";
import BackgroundLarge from "../card/BackgroundLarge";
import Horizontale from "../card/Horizontale";
import Verticale from "../card/Verticale";
import HeroLoader from "../Loader/HeroLoader";

function Hero({ articles, loading }: any) {
  const firstArticle = useMemo(() => articles && articles[0], [articles]);
  const twoArticles = useMemo(
    () => articles && articles.slice(1, 3),
    [articles]
  );

  const restArticles = useMemo(
    () => articles && articles.slice(3, articles.length),
    [articles]
  );

  if (loading) {
    return <HeroLoader />;
  }

  return (
    <section className="px-4 md:px-16 py-8 md:py-16 mx-auto">
      <div className="hero hero-grid">
        <div className="backgroundLarge-card flex flex-col gap-8">
          <BackgroundLarge
            title={firstArticle?.title}
            category={firstArticle?.category}
            image={firstArticle?.image}
            uri={firstArticle?.uri}
            slug={firstArticle?.slug}
          />
          <div className="horizontal-card grid grid-cols-1 md:grid-cols-2 gap-8">
            {twoArticles?.map((article: any) => (
              <div className="verticale-card" key={article.id}>
                <Verticale {...article} />
              </div>
            ))}
          </div>
        </div>
        <div className="horizontal">
          {restArticles?.map((article: any) => (
            <div className="verticale-card" key={article.id}>
              <Horizontale {...article} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
