import { MapPin, Phone, Mail } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-cyan-50 pt-16 pb-8 border-t border-cyan-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12 text-sm text-gray-600">
          
          <div className="lg:col-span-2">
            <h3 className="font-bold text-gray-800 mb-4 uppercase">Hubungi Kami</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="text-green-400 flex-shrink-0" size={18} />
                <span>Jl. Banyuanyar Selatan No.01, RT.02/RW.XII, Banyuanyar, Kec. Banjarsari, Kota Surakarta, Jawa Tengah 57137</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-green-400 flex-shrink-0" size={18} />
                <span>0271-727027</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-green-400 flex-shrink-0" size={18} />
                <span>Informasi & Layanan : official@ziyadbooks.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-gray-800 mb-4 uppercase">Kebijakan</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-green-500 transition-colors">Pengiriman Ulang</a></li>
              <li><a href="#" className="hover:text-green-500 transition-colors">Privasi & Kebijakan</a></li>
              <li><a href="#" className="hover:text-green-500 transition-colors">Syarat & Ketentuan</a></li>
              <li><a href="#" className="hover:text-green-500 transition-colors">Pelacakan Pesanan</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-gray-800 mb-4 uppercase">Akun Saya</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-green-500 transition-colors">Masuk Akun</a></li>
              <li><a href="#" className="hover:text-green-500 transition-colors">Troli Belanja</a></li>
              <li><a href="#" className="hover:text-green-500 transition-colors">Daftar Keinginan</a></li>
              <li><a href="#" className="hover:text-green-500 transition-colors">Checkout</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-gray-800 mb-4 uppercase">Jam Buka</h3>
            <ul className="space-y-3">
              <li>Pukul 09:00 - 18:00</li>
              <li>Senin hingga Jumat</li>
              <li>Tutup pada hari Libur Nasional</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center py-6 border-t border-cyan-200 gap-4 mt-8">
          <div className="flex items-center gap-1">
            <Image 
              src="https://ziyadbooks.com/storage/ziyad/logonew.svg" 
              alt="Ziyad Books" 
              width={140} 
              height={40} 
              className="h-8 w-auto"
            />
          </div>
          
          <p className="text-gray-500 text-sm">
            &copy; 2026 iswiboni@gmail.com. Hak Cipta Dilindungi.
          </p>

          <div className="flex gap-4">
            <a href="#" className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-gray-500 hover:text-green-500 hover:shadow-md transition-all">
              <span className="font-bold text-xs">FB</span>
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-gray-500 hover:text-cyan-500 hover:shadow-md transition-all">
              <span className="font-bold text-xs">TW</span>
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-gray-500 hover:text-green-600 hover:shadow-md transition-all">
              <span className="font-bold text-xs">IG</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
