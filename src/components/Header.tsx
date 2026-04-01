import { Search, Heart, User, ShoppingCart, MapPin, Phone, Mail } from "lucide-react";
import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full bg-white shadow-sm font-sans">
      {/* Top bar */}
      <div className="bg-gray-50 border-b border-gray-100 py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-xs text-gray-500">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1"><MapPin size={14} /> Temukan Toko</span>
            <span className="flex items-center gap-1"><Phone size={14} /> +62 800 - 123 4567</span>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <span>Gratis Ongkir untuk pembelanjaan di atas Rp 500.000</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1"><Mail size={14} /> info@ziyadbooks.com</span>
          </div>
        </div>
      </div>
      
      {/* Main header */}
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <a href="/" className="flex items-center">
            <Image 
              src="https://ziyadbooks.com/storage/ziyad/logonew.svg" 
              alt="Ziyad Books" 
              width={160} 
              height={45} 
              className="h-10 w-auto"
              priority
            />
          </a>
          <nav className="hidden md:flex items-center gap-6 font-medium text-gray-700">
            <a href="/" className="text-green-400">Beranda</a>
            <a href="/shop" className="hover:text-green-400">Belanja</a>
            <a href="/features" className="hover:text-green-400">Fitur</a>
            <a href="/pages" className="hover:text-green-400">Halaman</a>
            <a href="/blog" className="hover:text-green-400">Blog</a>
          </nav>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden lg:flex relative items-center">
            <input 
              type="text" 
              placeholder="Cari produk disini..." 
              className="bg-gray-100 rounded-full pl-6 pr-12 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-green-200 text-sm"
            />
            <button className="absolute right-0 top-0 bottom-0 bg-green-400 text-white rounded-full p-2 w-10 flex items-center justify-center">
              <Search size={16} />
            </button>
          </div>
          <div className="flex items-center gap-4 text-gray-700">
            <button className="hover:text-green-400 hidden sm:block"><User size={20} /></button>
            <button className="hover:text-green-400 relative hidden sm:block">
              <Heart size={20} />
              <span className="absolute -top-2 -right-2 bg-green-400 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">0</span>
            </button>
            <button className="hover:text-green-400 relative">
              <ShoppingCart size={20} />
              <span className="absolute -top-2 -right-2 bg-green-400 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">0</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
