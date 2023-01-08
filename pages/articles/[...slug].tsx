import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { GetStaticProps, GetStaticPaths } from "next";
import { useArticle } from "../../hooks/useArticle";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import { fetcher } from "../../graphql/utils";
import Seo from "../../components/shared/Seo";
import SocialsShareButtons from "../../components/shared/SocialsShareButtons";
import Horizontale from "../../components/card/Horizontale";

function ArticlesDetail() {
  const router = useRouter();
  const { slug } = router.query;

  const id = slug && slug[3];

  const { article, ArticleLoading, error } = useArticle(id as string);

  return (
    <>
      <Seo
        title={article?.title}
        description={article?.title}
        image={article?.image}
      />
      <section className="px-4 md:px-16 py-8 md:py-16 mx-auto">
        <div className="categorie">
          <p className="w-1/2 md:w-1/3 lg:w-1/5 bg-primary text-white uppercase text-center font-semibold mb-6 text-lg py-1">
            {article?.categories}
          </p>
        </div>
        <div className="title">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            {article?.title}
          </h1>
        </div>

        <div className="content article-grid">
          <div className="article-content">
            <div
              className="text-black font-semibold italic mb-6"
              dangerouslySetInnerHTML={{ __html: article?.excerpt }}
            />

            <div className="article-image mb-6">
              <Image
                src={article?.image}
                alt={article?.title}
                width={800}
                height={600}
                layout="responsive"
              />
            </div>
            <div className="meta flex flex-wrap justify-between items-center mb-6">
              <div className="author">
                <div className="image-author flex items-center gap-4">
                  <Image
                    src={article?.imageAuthor}
                    alt={article?.author?.name}
                    width={50}
                    height={50}
                    layout="fixed"
                    className="rounded-full"
                  />
                  <p className="font-bold text-primary">{article?.author}</p>
                </div>
              </div>
              <p className="text-sm text-black font-medium">
                publié le {article?.date}
              </p>

              <SocialsShareButtons />
            </div>
            <div className="content">
              <div dangerouslySetInnerHTML={{ __html: article?.content }}></div>
            </div>
          </div>
          <div className="similar-articles">
            <h2 className="text-2xl font-bold mb-6">Articles similaires</h2>

            {article?.similarPosts[0]?.filter(
              (item: any) => item.title !== article?.title
            ).map((item: any) => (
              <Horizontale
                key={item.id}
                title={item.title}
                image={item.featuredImage?.node?.sourceUrl}
                slug={item.slug}
                category={article.categories}
                uri={item.uri}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default ArticlesDetail;
