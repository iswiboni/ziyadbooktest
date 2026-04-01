import { Star } from "lucide-react";
import Link from "next/link";

interface Product {
  id: number;
  name: string;
  price_formatted: string;
  final_price_formatted: string;
  image_url: string;
  diskon?: string | number;
}

export default function ProductItem({ product }: { product: Product }) {
  // Mock rating
  const rating = 5;

  return (
    <Link href={`/product/${product.id}`} className="flex flex-col items-center bg-white p-4 rounded-2xl shadow-sm border border-gray-50 hover:shadow-md transition-shadow group">
      <div className="relative w-full aspect-square mb-4 bg-gray-50 rounded-xl overflow-hidden flex items-center justify-center">
        {product.diskon && parseFloat(product.diskon.toString()) > 0 && (
          <div className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-md z-10">
            {product.diskon}% OFF
          </div>
        )}
        {product.image_url ? (
          <img 
            src={product.image_url} 
            alt={product.name}
            className="w-full h-full object-contain"
          />
        ) : (
          <div className="text-gray-300">No Image</div>
        )}
      </div>
      
      <h3 className="text-center font-medium text-gray-800 text-sm mb-2 line-clamp-2 h-10">
        {product.name}
      </h3>
      
      <div className="flex gap-1 mb-2">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={14} className={i < rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"} />
        ))}
      </div>
      
      <div className="flex flex-col items-center">
        {product.price_formatted !== product.final_price_formatted ? (
          <>
            <span className="text-green-500 font-bold text-lg">{product.final_price_formatted}</span>
            <span className="text-gray-400 text-sm line-through">{product.price_formatted}</span>
          </>
        ) : (
          <span className="text-green-500 font-bold text-lg">{product.final_price_formatted}</span>
        )}
      </div>
    </Link>
  );
}
