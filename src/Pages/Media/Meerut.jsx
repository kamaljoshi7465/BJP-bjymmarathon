import { useState } from "react";
import Layout from "../../Components/Layout";
import Header from "../../Components/Header";
import NavigationMenu from "../../Menu/NavigationMenu";

const MeerutImageUrls = [
  "https://drive.google.com/thumbnail?id=1SbyHb5UDUnoXvOvtt-Chl4mXVqxyPF71&sz=s2048",
  "https://drive.google.com/thumbnail?id=1nx5nC_zTlLhVGKpfyprSNp0HyFkpuaOp&sz=s2048",
  "https://drive.google.com/thumbnail?id=1tO0OHzSlh3f48pNvRGdxklh2TFz6Otyd&sz=s2048",
  "https://drive.google.com/thumbnail?id=1ii_1p0-yV_zUbq0I_Of5AVxd_TKn9DVi&sz=s2048",
  "https://drive.google.com/thumbnail?id=1AzElzOz0DLoRkM10Bi53N6xFPRQH3HQK&sz=s2048",
  "https://drive.google.com/thumbnail?id=1zJbLXuPR_L3b4L-aL8BycbTroa7Gl_13&sz=s2048",
  "https://drive.google.com/thumbnail?id=1gp7d1-K6tzhYeFnPiOnbRaheqj9fpI_w&sz=s2048",
  "https://drive.google.com/thumbnail?id=1Hwfo4dM94hfLOfO0m5xTN26NQa4XazW4&sz=s2048",
  "https://drive.google.com/thumbnail?id=1s0T0yhibwyYuwKgFXxae5-ZqUZLnpw2T&sz=s2048",
  "https://drive.google.com/thumbnail?id=1Wr6EIWiR6sT4pzhLoVUbb3ShEY4vPPpK&sz=s2048",
  "https://drive.google.com/thumbnail?id=1OZgO0Qe48uVqyHf6-VtNASZgmoQEt6p2&sz=s2048",
  "https://drive.google.com/thumbnail?id=1B__RYbxu2zscLhGbGvMLrovbQWs8o8-0&sz=s2048",
  "https://drive.google.com/thumbnail?id=1s9annOgSpioXPtzSAASPpflObQxqv8qg&sz=s2048",
  "https://drive.google.com/thumbnail?id=16gth2QLR8kAzCTHqYsTDE92qyyOlMoEw&sz=s2048",
  "https://drive.google.com/thumbnail?id=1i24wjAZscxa8XWtrz3gz0peB-6shJ6AJ&sz=s2048",
  "https://drive.google.com/thumbnail?id=1WCvbpQzrkMazk_n9iZR0RL9DbfpQDHT8&sz=s2048",
  "https://drive.google.com/thumbnail?id=1frOdm0vyLzatij4zX3gPnAfR_Uy_SQCd&sz=s2048",
  "https://drive.google.com/thumbnail?id=1nVJ1y3evk91Wp_v3ukHpYa7aKwWOF3fB&sz=s2048",
  "https://drive.google.com/thumbnail?id=1kbddBGy8UgeVFo1GemHQvikaoQq07e8r&sz=s2048",
  "https://drive.google.com/thumbnail?id=1pnxhwvEzblQZXLjUR0GQdjryo-5_x0Ha&sz=s2048",
  "https://drive.google.com/thumbnail?id=1mIRUn19Ur59jyzuVMrOMKKVshZV1AsIi&sz=s2048",
  "https://drive.google.com/thumbnail?id=1n-2lGLyPJTJArjS_zU9Sg1xvlQei5IMB&sz=s2048",
  "https://drive.google.com/thumbnail?id=1DXlvEz32PtaH4t7JPqer0fEyOgPwgaaN&sz=s2048",
  "https://drive.google.com/thumbnail?id=1xgRpSXhEAcpfm46yGOL8F9VU0G5xv-5k&sz=s2048",
];

function Meerut() {
  const [selectedImage, setSelectedImage] = useState(null);
  const openImage = (imgSrc) => setSelectedImage(imgSrc);
  const closeImage = () => setSelectedImage(null);

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4">
      <Header heading="Namo Yuva Run - For Nasha Mukt Bharat" showBackButton={true} />

        <div className="flex flex-col items-center justify-center py-2 px-4 text-center">
          <div className="w-full max-w-8xl text-center space-y-6 text-gray-700 text-lg leading-relaxed">
            <NavigationMenu />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {MeerutImageUrls.map((imgSrc, index) => (
                <div
                  key={index}
                  onClick={() => openImage(imgSrc)}
                  className="cursor-pointer overflow-hidden rounded-xl shadow-lg group bg-gray-100"
                >
                  <div className="w-full h-[30rem]">
                    <img
                      src={imgSrc}
                      alt={`Namo Yuva Run ${index + 1}`}
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

export default Meerut;
