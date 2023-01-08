import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetcher } from "../graphql/utils";

export const useArticle = (slug: string) => {
  const { data, isLoading, error } = useQuery(["articles", slug], () =>
    fetcher(`/api/articles/${slug}`)
  );

  const article = useMemo(() => data, [data]);

  return { article, ArticleLoading: isLoading, error };
};
