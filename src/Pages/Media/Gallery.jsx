import { useState } from "react";
import { useLocation } from "react-router-dom";
import Layout from "../../Components/Layout";
import Header from "../../Components/Header";
import NavigationMenu from "../../Menu/NavigationMenu";

import { CityImages } from "../../data/CityImages";

function Gallery() {
  const params = new URLSearchParams(useLocation().search);
  const city = params.get("city") || "gorakhpur";

  const images = CityImages[city] || [];

  const [selectedImage, setSelectedImage] = useState(null);
  // console.log("City:", city, "Images:", images);

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4">
        <Header heading="Namo Yuva Run - For Nasha Mukt Bharat" showBackButton />
        <NavigationMenu />

        <h2 className="text-2xl font-bold m-4 capitalize flex justify-center">{city} Marathon</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((imgSrc, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(imgSrc)}
              className="cursor-pointer overflow-hidden rounded-xl shadow-lg group bg-gray-100"
            >
              <div className="w-full h-[30rem]">
                <img
                  src={imgSrc}
                  alt={`${city} Marathon ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>
          ))}

          {images.length === 0 && (
            <p className="text-red-500 font-semibold">
              No images available for {city}.
            </p>
          )}
        </div>

        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center"
            onClick={() => setSelectedImage(null)}
          >
            <img
              src={selectedImage}
              alt="Fullscreen"
              className="max-w-full max-h-full object-contain rounded-lg shadow-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white text-3xl font-bold"
            >
              &times;
            </button>
          </div>
        )}
      </div>
    </Layout>
  );
}

export default Gallery;
