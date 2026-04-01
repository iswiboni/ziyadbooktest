import Header from "@/components/Header";
import Deals from "@/components/Deals";
import OurStory from "@/components/OurStory";
import Products from "@/components/Products";
import Testimonials from "@/components/Testimonials";
import EmailSubs from "@/components/EmailSubs";
import Articles from "@/components/Articles";
import Footer from "@/components/Footer";

export const metadata = {
  title: "ZiyadBooks",
  description: "Buku pembelajaran anak terbaik #1 Indonesia.",
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-gray-800">
      <Header />
      <main className="flex-1 w-full flex-col items-center">
        <Deals />
        <OurStory />
        <Products />
        {/* Banner Section matching the image */}
        <section className="container mx-auto px-4 py-8 relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-teal-400 rounded-2xl p-6 text-white text-center flex flex-col justify-center min-h-[160px] relative overflow-hidden group hover:-translate-y-1 transition-transform">
              <h3 className="text-2xl font-bold mb-2 relative z-10">Reseller kami!</h3>
              <p className="text-sm bg-teal-500 rounded-full py-1 px-4 inline-block self-center relative z-10 mb-4 cursor-pointer">Belanja Sekarang &rarr;</p>
              <div className="absolute opacity-20 -right-4 -bottom-4 w-24 h-24 rounded-full bg-white z-0"></div>
            </div>
            
            <div className="bg-yellow-400 rounded-2xl p-6 text-gray-800 text-center flex flex-col justify-center min-h-[160px] relative overflow-hidden group hover:-translate-y-1 transition-transform">
              <h3 className="text-2xl font-bold mb-2 relative z-10">Gabung Member!</h3>
              <p className="text-sm bg-yellow-500 rounded-full py-1 px-4 inline-block self-center relative z-10 mb-4 cursor-pointer">Belanja Sekarang &rarr;</p>
              <div className="absolute opacity-20 -left-6 top-6 w-16 h-16 rounded-full bg-white z-0"></div>
            </div>
            
            <div className="bg-violet-500 rounded-2xl p-6 text-white text-center flex flex-col justify-center min-h-[160px] relative overflow-hidden group hover:-translate-y-1 transition-transform">
              <h3 className="text-2xl font-bold mb-2 relative z-10">Aneka Buku!</h3>
              <p className="text-sm bg-violet-600 rounded-full py-1 px-4 inline-block self-center relative z-10 mb-4 cursor-pointer">Belanja Sekarang &rarr;</p>
              <div className="absolute opacity-20 right-8 -top-8 w-20 h-20 rounded-full bg-white z-0"></div>
            </div>
          </div>
        </section>
        
        <Testimonials />
        <EmailSubs />
        <Articles />
      </main>
      <Footer />
    </div>
  );
}
