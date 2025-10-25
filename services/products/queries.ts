import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { getProductById, getProducts } from "./services";

export const useProductQuery = (id: number) => {
  return useQuery({
    queryKey: ["product", id],
    queryFn: () => getProductById(id),
    enabled: !!id,
  });
};

export const useProductsInfiniteQuery = () => {
  return useInfiniteQuery({
    queryKey: ["products"],
    queryFn: ({ pageParam }: { pageParam: number }) => getProducts(pageParam),
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.length === 0) return undefined;
      return allPages.length + 1;
    },
    initialPageParam: 1,
  });
};