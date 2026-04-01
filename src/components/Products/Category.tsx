export default function Category() {
  const categories = [
    "Dongeng & Fabel",
    "Petualangan",
    "Fantasi & Sihir",
    "Misteri",
    "Humor & Komedi",
    "Fiksi Ilmiah",
    "Keseharian"
  ];

  return (
    <div className="w-full lg:w-1/4 pr-4">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-green-200 inline-block pb-2">
        Kategori
      </h2>
      <ul className="flex flex-row lg:flex-col gap-4 text-gray-600 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 scrollbar-hide">
        {categories.map((cat, i) => (
          <li key={i} className="flex-shrink-0">
            <button className="hover:text-green-500 hover:font-bold transition-all text-left capitalize text-sm font-medium whitespace-nowrap">
              {cat}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
