import { useQuery } from '@tanstack/react-query';
import { getProducts } from './products.service';

/**
 * Fetch Products
 * 
 * @returns Query result with product data
 */
export const useProductsQuery = () =>
  useQuery({
    queryKey: ['productsList'],
    queryFn: async () => await getProducts()
  });
