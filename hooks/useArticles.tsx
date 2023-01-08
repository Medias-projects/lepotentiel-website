import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetcher } from "../graphql/utils";
import { formatDate } from "../graphql/utils";

export const useArticles = (offset: number) => {
  const { data, isFetching, error } = useQuery(["articles", offset], () =>
    fetcher(`/api/articles?offset=${offset}`)
  );

  const articles = useMemo(
    () =>
      data?.map((article: any) => ({
        id: article?.id,
        title: article.title,
        category: article?.categories?.edges[0]?.node?.name,
        image: article?.featuredImage?.node?.sourceUrl ?? "/images/placeholder.png",
        date: formatDate(article.date),
        uri: article.uri,
        slug: article.slug,
      })),
    [data]
  );

  return { articles, ArticleLoading: isFetching, error };
};
