import ProductItem from "../Products/ProductItem";
import { useProductsQuery } from "@/services/products.query";

export default function RelateProduct() {
  const { data: responseData, isLoading, isError } = useProductsQuery();

  let products = [];
  
  if (responseData?.status && responseData.data?.data) {
    products = responseData.data.data;
  }

  // Ambil 4 produk pertama sebagai produk terkait
  const displayProducts = products.length > 0 ? products.slice(0, 4) : [];

  return (
    <div className="mt-16 border-t border-gray-100 pt-16">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-slate-800">Produk Terkait</h2>
        {/* Carousel indicators dummy */}
        <div className="flex gap-2">
          {[...Array(6)].map((_, i) => (
            <div key={i} className={`w-2.5 h-2.5 rounded-full ${i === 0 ? "bg-slate-800" : "bg-gray-200"}`}></div>
          ))}
        </div>
      </div>

      {isLoading ? (
        <div className="flex items-center justify-center p-10 bg-gray-50 rounded-2xl">
          <p className="text-gray-500 font-medium">Memuat produk terkait...</p>
        </div>
      ) : isError ? (
        <div className="flex items-center justify-center p-10 bg-gray-50 rounded-2xl">
          <p className="text-red-500 font-medium">Terjadi kesalahan saat memuat data.</p>
        </div>
      ) : displayProducts.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {displayProducts.map((product: any) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">Tidak ada produk terkait</p>
      )}
    </div>
  );
}
