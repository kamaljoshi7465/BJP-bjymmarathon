import React, { useState } from "react";
import Header from "../Components/Header";
import Layout from "../Components/Layout";

function importAll(r) {
  return r.keys().map(r);
}
const mediaCoverages = importAll(
  require.context("../Assets/MediaCoverage", false, /\.(png|jpe?g|JPG|svg)$/)
);

function MediaCoverage() {
  const [selectedImage, setSelectedImage] = useState(null);
  const openImage = (imgSrc) => setSelectedImage(imgSrc);
  const closeImage = () => setSelectedImage(null);
  return (
    <Layout>
      <Header
        heading="BJYM Uttar Pradesh presents — Mock Parliament 2025"
        showBackButton={true}
      />
      <div className="flex flex-col items-center justify-center py-2 px-4 text-center">
        <section className="w-full max-w-6xl mx-auto px-4 py-4 text-center">
          <h2 className="text-3xl font-bold text-gray-700 mb-8">
            Media Coverage
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {mediaCoverages.map((img, index) => (
              <div
                key={index}
                onClick={() => openImage(img)}
                className="rounded-xl shadow-md overflow-hidden group transform hover:scale-105 transition duration-300"
              >
                <div className="h-64 bg-white flex items-center justify-center">
                  <img
                    src={img}
                    alt={`Mock Parliament ${index + 1}`}
                    className="object-contain h-full"
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
        </section>
      </div>
    </Layout>
  );
}

export default MediaCoverage;
