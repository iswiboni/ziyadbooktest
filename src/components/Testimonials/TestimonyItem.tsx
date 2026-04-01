import { Star } from "lucide-react";

interface TestimonyProps {
  name: string;
  review: string;
  avatar: string;
}

export default function TestimonyItem({ name, review, avatar }: TestimonyProps) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm text-center border mt-8 border-gray-100 flex-1 min-w-[300px] mb-4 relative z-10 w-full md:w-1/3">
      <div className="flex justify-center mb-4">
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={16} className="fill-gray-800 text-gray-800" />
          ))}
        </div>
      </div>
      <p className="text-gray-600 font-medium mb-6 italic text-sm">
        "{review}"
      </p>
      
      <div className="flex flex-col items-center">
        <img 
          src={avatar} 
          alt={name} 
          className="w-12 h-12 rounded-full mb-2 object-cover bg-gray-200"
        />
        <h4 className="font-bold text-gray-800 text-sm">{name}</h4>
      </div>
    </div>
  );
}
