import { API_ENDPOINTS } from "@/api/api.enum";
import { api } from "@/api/instance";
import { Product } from "./types";

export const getProducts = async (page: number = 1, limit: number = 20): Promise<Product[]> => {
  const { data } = await api.get<Product[]>(
    `/v1/products?offset=${(page - 1) * limit}&limit=${limit}`
  );
  return data;
};

export const getProductById = async (id: number): Promise<Product> => {
  const { data } = await api.get<Product>(`${API_ENDPOINTS.PRODUCTS}/${id}`);
  return data;
};