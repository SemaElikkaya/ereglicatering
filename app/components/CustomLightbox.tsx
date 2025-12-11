"use client";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

export default function CustomLightbox({ images, open, initialIndex = 0, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  if (!open) return null;

  const prev = () =>
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);

  const next = () =>
    setCurrentIndex((currentIndex + 1) % images.length);

  return (
    <div
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
      onClick={onClose} // === dışa tıklayınca kapanır ===
    >
      {/* Lightbox box */}
      <div
        className="relative rounded-2xl p-4 max-w-3xl w-[90%]"
        onClick={(e) => e.stopPropagation()} // === içe tıklayınca kapanmasın ===
      >
        {/* Close button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            console.log("X tıklandı!!");
            onClose();
          }}
          className="absolute right-3 top-3 text-white hover:text-gray-300 transition z-10"
        >
          <X size={28} />
        </button>


        {/* Big Image */}
        <div className="relative flex items-center justify-center">
          <img
            src={images[currentIndex]}
            className="rounded-lg max-h-[70vh] object-contain mx-auto"
          />

          {/* Left Arrow */}
          <button
            onClick={prev}
            className="
              absolute left-0 -ml-10 top-1/2 -translate-y-1/2
              text-white hover:text-red-400
              transition-transform duration-200
              hover:scale-110
            "
          >
            <ChevronLeft size={48} />
          </button>

          {/* Right Arrow */}
          <button
            onClick={next}
            className="
              absolute right-0 -mr-10 top-1/2 -translate-y-1/2
              text-white hover:text-red-400
              transition-transform duration-200
              hover:scale-110
            "
          >
            <ChevronRight size={48} />
          </button>
        </div>

        {/* Thumbnail bar */}
        <div className="mt-4 flex gap-3 overflow-x-auto pb-2 px-1">
          {images.map((img, i) => (
            <div
              key={i}
              className={`
                cursor-pointer border-2 rounded-lg overflow-hidden
                ${i === currentIndex ? "border-red-500" : "border-transparent"}
                hover:border-red-400 transition-all
              `}
              onClick={() => setCurrentIndex(i)}
            >
              <img
                src={img}
                className="h-20 w-28 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}