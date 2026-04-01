"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Deals() {
  const [timeLeft, setTimeLeft] = useState({
    days: 28,
    hours: 14,
    minutes: 21,
    seconds: 59,
  });

  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    "https://ziyadbooks.com/storage/banner/1772685827_69a90a0351db9.webp",
    "https://ziyadbooks.com/storage/banner/1774573353_69c5d7293c12b.webp",
    "https://ziyadbooks.com/storage/banner/1772685817_69a909f99e714.webp"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;
        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              hours = 23;
              if (days > 0) {
                days--;
              } else {
                return { days: 0, hours: 0, minutes: 0, seconds: 0 };
              }
            }
          }
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(slideTimer);
  }, [slides.length]);

  return (
    <section className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Banner Promo Spesial */}
        <div className="flex-1 bg-gradient-to-r from-cyan-200 to-cyan-400 rounded-4xl p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center min-h-[400px]">
          {/* Content */}
          <div className="w-full md:w-1/2 relative z-10 text-white">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-800">Promo Spesial</h2>
            <p className="mb-8 text-gray-700 text-lg">Dapatkan diskon untuk semua mainan kayu dan boneka.</p>
            
            {/* Countdown timer */}
            <div className="flex gap-4 mb-8">
              <div className="bg-white text-gray-800 w-16 h-16 rounded-xl flex flex-col items-center justify-center shadow-sm">
                <span className="text-xl font-bold">{String(timeLeft.days).padStart(2, '0')}</span>
                <span className="text-xs">HARI</span>
              </div>
              <div className="bg-white text-gray-800 w-16 h-16 rounded-xl flex flex-col items-center justify-center shadow-sm">
                <span className="text-xl font-bold">{String(timeLeft.hours).padStart(2, '0')}</span>
                <span className="text-xs">JAM</span>
              </div>
              <div className="bg-white text-gray-800 w-16 h-16 rounded-xl flex flex-col items-center justify-center shadow-sm">
                <span className="text-xl font-bold">{String(timeLeft.minutes).padStart(2, '0')}</span>
                <span className="text-xs">MNT</span>
              </div>
              <div className="bg-white text-gray-800 w-16 h-16 rounded-xl flex flex-col items-center justify-center shadow-sm">
                <span className="text-xl font-bold">{String(timeLeft.seconds).padStart(2, '0')}</span>
                <span className="text-xs">DTK</span>
              </div>
            </div>
            
            <button className="bg-green-400 hover:bg-green-500 text-white font-bold py-3 px-8 rounded-full transition-colors">
              Belanja Sekarang
            </button>
          </div>
          
          {/* Decorative elements */}
          <div className="w-full md:w-1/2 relative z-0 mt-8 md:mt-0">
            <div className="w-64 h-64 md:w-96 md:h-96 bg-cyan-300 rounded-full opacity-50 absolute right-0 top-1/2 -translate-y-1/2"></div>
          </div>
        </div>

        {/* slider promo */}
        <div className="w-full lg:w-[400px] shrink-0 relative overflow-hidden rounded-4xl bg-gray-50 border border-gray-100 aspect-square">
          <div 
            className="flex h-full transition-transform duration-700 ease-in-out" 
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="w-full h-full shrink-0 relative">
                <Image 
                  src={slide} 
                  alt={`Promo banner ${index + 1}`} 
                  fill 
                  className="object-cover" 
                  sizes="(max-width: 1024px) 100vw, 400px"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>
          
          {/* Slider Controls */}
          <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 z-10">
            {slides.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentSlide(index)}
                className={`h-2.5 rounded-full transition-all ${currentSlide === index ? 'bg-white w-8' : 'bg-white/60 hover:bg-white/90 w-2.5'}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
