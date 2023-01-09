import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetcher } from "../graphql/utils";
import { formatDate } from "../graphql/utils";

export const useSearch = (search: string) => {
  const { data, isFetching, error } = useQuery(["searchResults", search], () =>
    fetcher(`/api/recherche?search=${search}`)
  );

    const searchResults = useMemo(() => data, [data]);

  return { searchResults, ArticleLoading: isFetching, error };
};
