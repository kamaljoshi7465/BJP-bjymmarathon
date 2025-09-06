import React, { useState } from "react";
import Layout from "../Components/Layout";
import Header from "../Components/Header";

// Utility to import all images from a folder
function importAll(r) {
  return r.keys().map(r);
}

// Import all blog and news images
const images = importAll(
  require.context("../Assets/BlogImages", false, /\.(png|jpe?g|svg)$/)
);
const newsArticles = importAll(
  require.context("../Assets/NewsImages", false, /\.(png|jpe?g|svg)$/)
);

// YouTube video links
const youtubeVideos = [
  "https://www.youtube.com/embed/HyXs8wtlrJU",
  "https://www.youtube.com/embed/retmYQ-OY8w",
  "https://www.youtube.com/embed/e7zOW8pbN08",
  "https://www.youtube.com/embed/nHqTe_Jd7dY",
  "https://www.youtube.com/embed/Bv0fj88hP2o",
  "https://www.youtube.com/embed/N-_jQiWxFyk",
  "https://www.youtube.com/embed/Csq0YaS5k7s",
  "https://www.youtube.com/embed/_4xQaf7WWj0",
  "https://www.youtube.com/embed/hGbe23riuL4",
  "https://www.youtube.com/embed/l6hve4QdpbU",
  "https://www.youtube.com/embed/vW2bj5CUC4w",
  "https://www.youtube.com/embed/DYMaBq78G6A",

];

function Blogs() {
  const [activeTab, setActiveTab] = useState("images");
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (imgSrc) => setSelectedImage(imgSrc);
  const closeImage = () => setSelectedImage(null);

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4">
        <Header heading="Our Blog Gallery" showBackButton={true} />

        {/* Tabs */}
        <div className="flex space-x-4 mt-4 mb-6 items-center justify-center">
          {["images", "videos", "news"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full font-semibold transition ${activeTab === tab
                ? "bg-[#fb5d16] text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
            >
              {tab === "images"
                ? "Images"
                : tab === "videos"
                  ? "YouTube Videos"
                  : "News and Publications"}
            </button>
          ))}
        </div>

        {/* IMAGES Tab */}
        {activeTab === "images" && (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {images.map((imgSrc, index) => (
                <div
                  key={index}
                  onClick={() => openImage(imgSrc)}
                  className="cursor-pointer overflow-hidden rounded-xl shadow-lg group bg-gray-100"
                >
                  <img
                    src={imgSrc}
                    alt={`Blog ${index + 1}`}
                    className="w-full h-80 object-fill transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </>
        )}

        {/* VIDEOS Tab */}
        {activeTab === "videos" && (
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {youtubeVideos.map((url, index) => (
                <div
                  key={index}
                  className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-lg"
                >
                  <iframe
                    src={url}
                    title={`YouTube Video ${index + 1}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <a
                href="https://www.youtube.com/channel/UCH2byaiMI5q9em2CbHfbwWg"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#fb5d16] text-white font-semibold px-6 py-3 rounded-md hover:bg-orange-700 transition duration-300"
              >
                🔗 Watch More on YouTube
              </a>
            </div>
          </div>
        )}

        {/* NEWS Tab */}
        {activeTab === "news" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
            {newsArticles.map((imgSrc, index) => (
              <div
                key={index}
                onClick={() => openImage(imgSrc)}
                className="cursor-pointer overflow-hidden rounded-xl shadow-lg group bg-gray-100"
              >
                <div className="w-full max-h-80 overflow-hidden"> {/* Increased height */}
                  <img
                    src={imgSrc}
                    alt={`News ${index + 1}`}
                    className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* FULLSCREEN Image Modal */}
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
    </Layout>
  );
}

export default Blogs;
