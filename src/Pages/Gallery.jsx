import Layout from "../Components/Layout";
import Header from "../Components/Header";
import { useState } from "react";

function importAll(r) {
  return r.keys().map(r);
}

const GalleryImage = importAll(
  require.context("../Assets/Gallery", false, /\.(png|jpe?g|svg)$/)
);

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const openImage = (imgSrc) => setSelectedImage(imgSrc);
  const closeImage = () => setSelectedImage(null);

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4">
        <Header
          heading="BJYM Uttar Pradesh presents — Mock Parliament 2025"
          showBackButton={true}
        />

        <div className="flex flex-col items-center justify-center py-2 px-4 text-center">
          <div className="w-full max-w-8xl text-center space-y-6 text-gray-700 text-lg leading-relaxed">
            <h2 className="text-2xl font-bold mb-4 text-center text-gray-700">
              Photo Gallery
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...GalleryImage].map((imgSrc, index) => (
                <div
                  key={index}
                  onClick={() => openImage(imgSrc)}
                  className="cursor-pointer overflow-hidden rounded-xl shadow-lg group bg-gray-100"
                >
                  <div className="w-full h-[30rem]">
                    <img
                      src={imgSrc}
                      alt={`Mock Parliament ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </div>
              ))}
            </div>
            {selectedImage && (
              <div
                className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center"
                onClick={closeImage}
              >
                <img
                  src={selectedImage}
                  alt="Fullscreen"
                  className="max-w-full max-h-full object-contain rounded-lg shadow-lg"
                  onClick={(e) => e.stopPropagation()}
                />
                <button
                  onClick={closeImage}
                  className="absolute top-4 right-4 text-white text-3xl font-bold"
                >
                  &times;
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Gallery;
