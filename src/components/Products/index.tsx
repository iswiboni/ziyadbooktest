"use client";

import Category from "./Category";
import ProductItem from "./ProductItem";
import { useProductsQuery } from "@/services/products.query";

export default function Products() {
  const { data: responseData, isLoading, isError } = useProductsQuery();

  let products = [];
  
  if (responseData?.status && responseData.data?.data) {
    products = responseData.data.data;
  }

  const displayProducts = products.length > 0 ? products.slice(0, 8) : [];

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="flex flex-col lg:flex-row gap-8">
        <Category />
        
        <div className="w-full lg:w-3/4">
          {isLoading ? (
            <div className="flex items-center justify-center h-64 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200">
              <p className="text-gray-500 font-medium">Memuat data produk...</p>
            </div>
          ) : isError ? (
            <div className="flex items-center justify-center h-64 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200">
              <p className="text-red-500 font-medium">Terjadi kesalahan saat memuat data produk.</p>
            </div>
          ) : displayProducts.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {displayProducts.map((product: any) => (
                <ProductItem key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="flex items-center justify-center h-64 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200">
              <p className="text-gray-500 font-medium">Belum ada produk atau gagal memuat data.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
