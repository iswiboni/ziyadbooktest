import { api } from '@/utils/api';

/**
 * Fetch products list
 * 
 * @returns any
 */
export const getProducts = async () => {
  const { data } = await api.get('ecommerce/auth/products/all/category');
  return data;
};
