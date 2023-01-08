import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetcher } from "../graphql/utils";

export const useArticlesByCategories = (category: string, offset: number) => {
  const { data, isFetching, error } = useQuery(
    ["categories", category, offset],
    () => fetcher(`/api/categories/${category}?offset=${offset}`)
  );

  const categories = useMemo(
    () =>
      data &&
      data?.map((article: any) => ({
        id: article.id,
        title: article.title,
        image: article.featuredImage?.node?.sourceUrl,
        uri: article.uri,
        slug: article.slug,
        category: article.categories?.edges[0]?.node?.name,
      })),
    [data]
  );

  return { categories, isFetching, error };
};
