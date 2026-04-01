import { Mail } from 'lucide-react';

export default function EmailSubs() {
  return (
    <section className="bg-green-50 py-16 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 justify-center">
          
          {/* Illustration Placeholder */}
          <div className="w-32 h-32 md:w-64 md:h-64 rounded-full bg-green-100 flex items-center justify-center ">
            <Mail className="w-24 h-24 md:w-32 md:h-32 text-green-500" />
          </div>
          
          <div className="max-w-xl text-center md:text-left z-10">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-6 leading-tight">
              Dapatkan promo terbaik kami setiap bulannya
            </h2>
            <p className="text-gray-500 mb-6">Tulis email anda untuk info terupdate.</p>
            
            <form className="flex w-full mt-4 bg-white rounded-full p-1 shadow-sm border border-gray-200">
              <input 
                type="email" 
                placeholder="Alamat email Anda..." 
                className="flex-1 bg-transparent px-6 py-3 outline-none text-gray-700"
                required
              />
              <button 
                type="submit" 
                className="bg-green-400 hover:bg-green-500 text-white px-8 py-3 rounded-full font-bold transition-colors whitespace-nowrap"
              >
                Berlangganan
              </button>
            </form>
          </div>
          
        </div>
      </div>
    </section>
  );
}
