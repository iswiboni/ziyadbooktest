interface ArticleProps {
  image: string;
  date: string;
  title: string;
  snippet: string;
}

export default function ArticleItem({ image, date, title, snippet }: ArticleProps) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col group border border-gray-100">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-gray-800 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
          {date}
        </div>
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-gray-800 mb-3 hover:text-green-500 cursor-pointer transition-colors line-clamp-2">
          {title}
        </h3>
        <p className="text-gray-600 text-sm mb-6 flex-1 line-clamp-3 leading-relaxed">
          {snippet}
        </p>
        <button className="self-start px-6 py-2 bg-green-400 hover:bg-green-500 text-white rounded-full text-sm font-bold transition-colors">
          Baca Selengkapnya
        </button>
      </div>
    </div>
  );
}
