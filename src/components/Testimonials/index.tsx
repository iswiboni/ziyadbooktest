import TestimonyItem from "./TestimonyItem";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sinta Pratiwi",
      review: "Awalnya saya ragu, tapi ternyata anak saya sangat suka membaca buku dari Ziyad Books. Ilustrasinya menarik dan ceritanya mudah dipahami!",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
    },
    {
      name: "Budi Setiawan",
      review: "Kualitas buku sungguh di luar ekspektasi saya. Anak saya jadi lebih suka membaca dan kosakatanya berkembang pesat sejak rutin baca buku dari sini.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
    },
    {
      name: "Amanda Sari",
      review: "Pengiriman sangat cepat dan buku dikemas dengan rapi. Anak saya langsung excited membaca begitu paket sampai di rumah!",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop"
    }
  ];

  return (
    <section className="bg-cyan-50 py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Apa Kata Orang Tua?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Lihat seberapa baik anak-anak bermain melalui penilaian luar biasa dan ulasan bintang 5 dari produk Ziyad Books!
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 justify-center">
          {testimonials.map((testi, index) => (
            <TestimonyItem
              key={index}
              name={testi.name}
              review={testi.review}
              avatar={testi.avatar}
            />
          ))}
        </div>

        {/* Navigation arrows placeholder */}
        <div className="flex justify-center gap-4 mt-8">
          <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-white transition-colors">
            ←
          </button>
          <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-white transition-colors">
            →
          </button>
        </div>
      </div>

      {/* Wave decoration top and bottom */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-white rounded-b-[50%] -translate-y-1/2 scale-x-150"></div>
    </section>
  );
}
