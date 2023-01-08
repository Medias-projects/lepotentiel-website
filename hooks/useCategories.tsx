import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetcher } from "../graphql/utils";

export const useCategories = () => {
  const { data, isLoading, error } = useQuery(["articles"], () =>
    fetcher(`/api/categories`)
  );

  const categories = useMemo(() => data, [data]);

  return { categories, categoryLoading: isLoading, error };
};
