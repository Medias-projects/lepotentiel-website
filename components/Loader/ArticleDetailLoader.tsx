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

function ArticlesDetailLoader() {
  const router = useRouter();
  const { slug } = router.query;

  const id = slug && slug[3];

  const { article, ArticleLoading, error } = useArticle(id as string);

  return (
    <>
      <section className="px-4 md:px-16 py-8 md:py-16 mx-auto animate-pulse">
        <div className="categorie">
          <p className="w-1/2 md:w-1/3 lg:w-1/5 bg-gray-300 h-10 text-white uppercase text-center font-semibold mb-6 text-lg py-1"></p>
        </div>
        <div className="title">
          <h1 className="text-3xl h-10 md:text-5xl bg-gray-300 font-bold mb-6"></h1>
          <h1 className="text-3xl h-10 md:text-5xl bg-gray-300 font-bold mb-6"></h1>
        </div>

        <div className="content article-grid">
          <div className="article-content">
            <div className="bg-gray-300 font-semibold italic mb-6 h-40" />

            <div className="article-image mb-6">
              <div className="bg-gray-300 font-semibold italic mb-6 h-[600px]" />
            </div>
            <div className="meta flex flex-wrap justify-between items-center mb-6"></div>
            <div className="content">
              <div className="bg-gray-300 font-semibold italic mb-6 h-[600px]" />
            </div>
          </div>
          <div className="similar-articles">
            <h2 className="text-2xl font-bold mb-6">Articles similaires</h2>
            <div className="verticale-card flex gap-8">
              <div className="verticale-card__image bg-gray-300 h-30 w-full mb-8"></div>
              <div className="verticale-card__image  h-30 w-full mb-8">
                <p className="bg-gray-300 h-8 w-[60%] mb-2"></p>
                <p className="bg-gray-300 h-5 w-[100%] mb-2"></p>
                <p className="bg-gray-300 h-5 w-[60%] mb-2"></p>
              </div>
            </div>
            <div className="verticale-card flex gap-8">
              <div className="verticale-card__image bg-gray-300 h-30 w-full mb-8"></div>
              <div className="verticale-card__image  h-30 w-full mb-8">
                <p className="bg-gray-300 h-8 w-[60%] mb-2"></p>
                <p className="bg-gray-300 h-5 w-[100%] mb-2"></p>
                <p className="bg-gray-300 h-5 w-[60%] mb-2"></p>
              </div>
            </div>
            <div className="verticale-card flex gap-8">
              <div className="verticale-card__image bg-gray-300 h-30 w-full mb-8"></div>
              <div className="verticale-card__image  h-30 w-full mb-8">
                <p className="bg-gray-300 h-8 w-[60%] mb-2"></p>
                <p className="bg-gray-300 h-5 w-[100%] mb-2"></p>
                <p className="bg-gray-300 h-5 w-[60%] mb-2"></p>
              </div>
            </div>
            <div className="verticale-card flex gap-8">
              <div className="verticale-card__image bg-gray-300 h-30 w-full mb-8"></div>
              <div className="verticale-card__image  h-30 w-full mb-8">
                <p className="bg-gray-300 h-8 w-[60%] mb-2"></p>
                <p className="bg-gray-300 h-5 w-[100%] mb-2"></p>
                <p className="bg-gray-300 h-5 w-[60%] mb-2"></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ArticlesDetailLoader;
