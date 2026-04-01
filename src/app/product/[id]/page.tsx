"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InfoProduct from "@/components/ProductDetail/InfoProduct";
import RelateProduct from "@/components/ProductDetail/RelateProduct";
import { useProductsQuery } from "@/services/products.query";
import { useParams } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

export default function ProductDetailPage() {
  const params = useParams();
  const id = params.id as string;
  const { data: responseData, isLoading, isError } = useProductsQuery();
  const [activeTab, setActiveTab] = useState("description");

  let product = null;

  if (responseData?.status && responseData.data?.data) {
    // Cari produk berdasarkan ID
    product = responseData.data.data.find((p: any) => p.id.toString() === id);
    // Jika tidak ketemu dengan ID yang pas, pakai index pertama sbg dummy
    if (!product && responseData.data.data.length > 0) {
      product = responseData.data.data[0];
    }
  }

  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <div className="container mx-auto px-4 py-8 flex-grow">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-8 mt-4">
          <Link href="/" className="hover:text-green-500">Beranda</Link>
          <span>›</span>
          <Link href="/" className="hover:text-green-500">Toko</Link>
          <span>›</span>
          <Link href="/" className="hover:text-green-500">Produk</Link>
          <span>›</span>
          <span className="text-gray-900">{product?.name || "Detail Produk"}</span>
        </div>

        {isLoading ? (
          <div className="flex items-center justify-center h-96">
            <p className="text-xl text-gray-500 font-medium">Memuat detail produk...</p>
          </div>
        ) : isError ? (
          <div className="flex items-center justify-center h-96">
            <p className="text-xl text-red-500 font-medium">Gagal memuat detail produk.</p>
          </div>
        ) : product ? (
          <>
            <InfoProduct product={product} />

            {/* Tabs Section */}
            <div className="mt-16">
              <div className="flex gap-8 border-b border-gray-200">
                <button 
                  onClick={() => setActiveTab('description')}
                  className={`text-lg font-bold pb-4 border-b-2 transition-colors ${activeTab === 'description' ? 'text-green-500 border-green-500' : 'text-gray-400 border-transparent hover:text-gray-700'}`}
                >
                  Deskripsi
                </button>
                <button 
                  onClick={() => setActiveTab('reviews')}
                  className={`text-lg font-bold pb-4 border-b-2 transition-colors ${activeTab === 'reviews' ? 'text-green-500 border-green-500' : 'text-gray-400 border-transparent hover:text-gray-700'}`}
                >
                  Ulasan (0)
                </button>
              </div>
              
              <div className="py-8">
                {activeTab === 'description' && (
                  <div className="text-gray-600 text-sm leading-relaxed space-y-4">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas consectetur finibus euismod. Nam id interdum magna, a semper lorem. In et ligula at odio consequat ullamcorper sit amet et purus. Mauris ut diam nibh. Vivamus cursus purus sed porta bibendum. Ut in volutpat libero. Phasellus posuere risus sed hendrerit interdum. Quisque rutrum turpis et lobortis semper. Vivamus ligula elit, efficitur et eleifend in, aliquet a massa. Vivamus lorem ligula, maximus sagittis tristique sed, placerat quis elit. Donec accumsan sit amet tellus sit amet maximus. Sed sollicitudin sodales leo, ut tincidunt sapien condimentum non. Fusce vitae neque at urna semper efficitur a at ante. Mauris hendrerit pulvinar ipsum id ullamcorper. Nullam rutrum odio magna, et accumsan eros dictum id. Nulla sem eros, dictum et ornare sit amet, molestie sed velit. Morbi porta consequat felis. Phasellus fringilla consequat nibh eu sodales. Vestibulum tempor scelerisque nulla et faucibus. Ut eros massa, facilisis quis maximus quis, fermentum vel ipsum. Curabitur quis nisl pretium nibh convallis suscipit at ac tellus. Etiam quis eros nibh. Ut varius convallis.
                    </p>
                    <p>
                      In hac habitasse platea dictumst. Maecenas fermentum velit non ligula lacinia, sed imperdiet ligula fermentum. Maecenas vitae est id justo euismod congue. Aenean sapien purus, vehicula sit amet posuere at, porttitor ut neque. Vivamus justo nibh, mollis vitae aliquet in, rhoncus eu nisi. Nunc et mauris risus. Proin placerat velit odio, at sodales turpis laoreet imperdiet.
                    </p>
                  </div>
                )}
                {activeTab === 'reviews' && (
                  <div className="text-gray-600">
                     <p>Belum ada ulasan untuk produk ini.</p>
                  </div>
                )}
              </div>
            </div>

            <RelateProduct />
          </>
        ) : (
          <div className="flex items-center justify-center h-96">
            <p className="text-xl text-gray-500 font-medium">Produk tidak ditemukan.</p>
          </div>
        )}
      </div>

      <Footer />
    </main>
  );
}
