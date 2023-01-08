import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetcher } from "../graphql/utils";

export const useCategories = () => {
  const { data, isFetching, error } = useQuery(["articles"], () =>
    fetcher(`/api/categories`)
  );

  const categories = useMemo(() => data, [data]);

  return { categories, categoryLoading: isFetching, error };
};
