import { Star, Minus, Plus, Share2, ShieldCheck, Truck, Percent, HeadphonesIcon } from "lucide-react";
import { useState } from "react";

export default function InfoProduct({ product }: { product: any }) {
  const [quantity, setQuantity] = useState(1);
  const rating = 5;

  return (
    <div className="flex flex-col lg:flex-row gap-10">
      {/* Product Image section */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        <div className="w-full aspect-square bg-gray-50 rounded-2xl flex items-center justify-center border border-gray-100 p-8 overflow-hidden relative">
          {product?.diskon && parseFloat(product.diskon.toString()) > 0 && (
            <div className="absolute top-4 left-4 bg-green-500 text-white text-sm font-bold px-3 py-1.5 rounded-md z-10">
              {product.diskon}% OFF
            </div>
          )}
          <img
            src={product?.image_url || "/placeholder.png"}
            alt={product?.name}
            className="w-full h-full object-contain"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjFmMjYmIi8+PC9zdmc+'; // placeholder
            }}
          />
        </div>
        <div className="flex gap-4">
          {/* Thumbnails */}
          {[1, 2, 3, 4].map((_, i) => (
            <div key={i} className={`w-20 h-20 rounded-xl bg-gray-50 border p-2 flex items-center justify-center cursor-pointer ${i === 0 ? "border-slate-800" : "border-gray-100"}`}>
              <img
                src={product?.image_url || "/placeholder.png"}
                className="w-full h-full object-contain"
                alt=""
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjFmMjYmIi8+PC9zdmc+';
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Product Info section */}
      <div className="w-full lg:w-1/2 flex flex-col">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{product?.name || "Nama Produk"}</h1>
        <div className="flex items-center gap-2 mb-4">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} className="fill-current" />
            ))}
          </div>
          <span className="text-sm text-gray-500">5 ulasan dari pembeli</span>
        </div>

        <div className="mb-6 flex items-center gap-3">
          {product?.price_formatted !== product?.final_price_formatted ? (
            <>
              <span className="text-3xl font-bold text-green-500">{product?.final_price_formatted || "Rp0"}</span>
              <span className="text-xl text-gray-400 line-through">{product?.price_formatted}</span>
            </>
          ) : (
            <span className="text-3xl font-bold text-green-500">{product?.final_price_formatted || "Rp0"}</span>
          )}
        </div>

        <p className="text-gray-600 mb-8 leading-relaxed">
          {product?.description || "Produk ini adalah pilihan tepat dengan tampilan fleksibel yang cocok digunakan pada berbagai kesempatan. Terbuat dari bahan berkualitas, menjamin kenyamanan sepanjang hari dan daya tahan lama."}
        </p>

        <div className="flex items-center gap-4 mb-8">
          <div className="flex items-center border border-gray-200 rounded-full bg-gray-50 px-4 py-2 w-32 justify-between">
            <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="text-gray-500 hover:text-gray-900"><Minus size={18} /></button>
            <span className="font-semibold">{quantity}</span>
            <button onClick={() => setQuantity(quantity + 1)} className="text-gray-500 hover:text-gray-900"><Plus size={18} /></button>
          </div>
          <button className="flex-1 bg-slate-800 text-white font-semibold rounded-full py-3 hover:bg-slate-700 transition-colors">
            Tambah ke Keranjang
          </button>
          <button className="border border-gray-200 rounded-full p-3 hover:bg-gray-50 text-gray-500">
            <Star size={20} />
          </button>
        </div>

        <div className="flex items-center gap-6 mb-8 text-sm text-gray-600 font-medium">
          <button className="flex items-center gap-2 hover:text-gray-900">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 3h5v5M4 21h5v-5M21 3l-7 7M3 21l7-7" /></svg>
            Bandingkan
          </button>
          <button className="flex items-center gap-2 hover:text-gray-900">
            <Share2 size={18} />
            Bagikan
          </button>
        </div>

        {/* Benefits Section */}
        <div className="border border-gray-200 rounded-xl p-6 mb-8">
          <h3 className="text-center text-xs font-bold text-gray-400 tracking-wider mb-6">KEUNTUNGAN MEMILIH KAMI</h3>
          <div className="grid grid-cols-4 gap-4">
            <div className="flex flex-col items-center text-center">
              <div className="text-green-500 mb-2"><Percent size={28} /></div>
              <span className="text-xs font-semibold text-gray-800">HARGA TERJANGKAU</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="text-green-500 mb-2"><Truck size={28} /></div>
              <span className="text-xs font-semibold text-gray-800">PENGIRIMAN AMAN</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="text-yellow-500 mb-2"><ShieldCheck size={28} /></div>
              <span className="text-xs font-semibold text-gray-800">PENAWARAN EKSKLUSIF</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="text-blue-500 mb-2"><HeadphonesIcon size={28} /></div>
              <span className="text-xs font-semibold text-gray-800">DUKUNGAN KHUSUS</span>
            </div>
          </div>
        </div>

        <div className="text-sm text-gray-600 space-y-2 mb-8">
          <p className="flex items-center gap-2"><Truck size={18} className="text-gray-800" /> <strong>Estimasi Pengiriman:</strong> 03 - 06 Apr, 2026</p>
          <p className="flex items-center gap-2"><ShieldCheck size={18} className="text-gray-800" /> <strong>Gratis Ongkir & Pengembalian:</strong> Untuk pesanan di atas Rp 200.000</p>
        </div>

        <div className="text-sm text-gray-600 mb-8 border-t pt-6 space-y-2">
          <p><span className="font-semibold text-gray-900">SKU:</span> PRD-{product?.id || "000"}</p>
          <p><span className="font-semibold text-gray-900">Kategori:</span> <span className="text-blue-500">Buku anak</span></p>
          <p><span className="font-semibold text-gray-900">Tagar:</span> Kebutuhan Bayi, Aman & Lembut</p>
          <p><span className="font-semibold text-gray-900">Merek:</span> <span className="text-blue-500">Ziyad Books</span></p>
        </div>
      </div>
    </div>
  );
}
