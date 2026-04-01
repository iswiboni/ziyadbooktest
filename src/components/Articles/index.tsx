import ArticleItem from "./ArticleItem";

export default function Articles() {
  const articles = [
    {
      image: "https://images.unsplash.com/photo-1543332164-6e82f355badc?w=600&h=400&fit=crop",
      date: "02 APR 2024",
      title: "Manfaat Membaca Buku Sejak Dini untuk Tumbuh Kembang Anak",
      snippet: "Membacakan buku sejak bayi terbukti merangsang perkembangan bahasa dan kognitif anak secara optimal. Yuk kenali manfaatnya lebih dalam!"
    },
    {
      image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?w=600&h=400&fit=crop",
      date: "10 MAR 2024",
      title: "Tips Memilih Buku Anak Sesuai Usia dan Tahap Perkembangan",
      snippet: "Tidak semua buku cocok untuk semua usia. Pelajari cara memilih buku yang tepat agar anak semakin semangat membaca setiap harinya."
    },
    {
      image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=400&fit=crop",
      date: "15 FEB 2024",
      title: "Cara Menumbuhkan Kebiasaan Membaca pada Anak di Rumah",
      snippet: "Membangun kebiasaan membaca tidak harus sulit. Dengan pendekatan yang menyenangkan, anak bisa jatuh cinta pada buku sejak usia dini."
    }
  ];

  return (
    <section className="container mx-auto px-4 py-20 pb-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Artikel Terkini</h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Lihat pembaruan, tips, dan panduan parenting terbaru di blog Ziyad Books di sini.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article, index) => (
          <ArticleItem
            key={index}
            image={article.image}
            date={article.date}
            title={article.title}
            snippet={article.snippet}
          />
        ))}
      </div>
    </section>
  );
}
