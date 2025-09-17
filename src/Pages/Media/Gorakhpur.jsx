import { useState } from "react";
import Layout from "../../Components/Layout";
import Header from "../../Components/Header";
import NavigationMenu from "../../Menu/NavigationMenu";

const GorakhpurImageUrls = [
  "https://drive.google.com/thumbnail?id=1ZnRxchTTBEsiivtuEm1PUEFDvNmXkUoR&sz=s2048",
  "https://drive.google.com/thumbnail?id=1gdpLMs3gGcwBiHlJJXqn6gdVwgzFwV8e&sz=s2048",
  "https://drive.google.com/thumbnail?id=1tadfupbbiYs9kgyxehEfjg9Mu6gXO4kM&sz=s2048",
  "https://drive.google.com/thumbnail?id=1YbQQndumnvsseU7gJiEu-m67pdOV1lU3&sz=s2048",
  "https://drive.google.com/thumbnail?id=1Sw-RFDvnVQh4VpJQF8sHZa9BoNCXyQVF&sz=s2048",
  "https://drive.google.com/thumbnail?id=1uHEuSiVUUpd_8QyfHLPGXgmPpIbgIDD7&sz=s2048",
  "https://drive.google.com/thumbnail?id=1Uf-LCQlEsGIckHe-wq36vj3HKijHvDgK&sz=s2048",
  "https://drive.google.com/thumbnail?id=1TBCbLbd8sF5KTaGpUtqU1fpZMLKwrbQd&sz=s2048",
  "https://drive.google.com/thumbnail?id=1bpj0Hn9n03bJsKwf4wOJzw5CrehPTFwa&sz=s2048",
  "https://drive.google.com/thumbnail?id=1BZdwsLNyD7dhsl0s6hdhss0yvAM7sBiM&sz=s2048",
  "https://drive.google.com/thumbnail?id=1wfuR8u11qK5DTvPLlEq4_v0JzYtcRnWf&sz=s2048",
  "https://drive.google.com/thumbnail?id=1J7ms6q9K2MSPV3fHz85JDyxunopMkkUn&sz=s2048",
  "https://drive.google.com/thumbnail?id=1Tjijqg52DrdFn5GtD1Sq45JxXEqH9MGy&sz=s2048",
  "https://drive.google.com/thumbnail?id=10eR-ba_54PHD-X-8KieWOJy_h22iiGqv&sz=s2048",
  "https://drive.google.com/thumbnail?id=14QFFMR3kYJQErD9vjk5iIi1fpb9Ta3oj&sz=s2048",
  "https://drive.google.com/thumbnail?id=1FQsy4Wm-3b_MXt4q4_JM44SfouW7ivND&sz=s2048",
  "https://drive.google.com/thumbnail?id=1D9d_qLr4UGU0jVtMf6ZEkxzLy_0Mzy5M&sz=s2048",
  "https://drive.google.com/thumbnail?id=1Ndwx1rt10aOffhbnR0ieMEEDSqFjwku0&sz=s2048",
  "https://drive.google.com/thumbnail?id=1t5eNotf8_xxrNsMAOY4Ua6RMFay-I-LB&sz=s2048",
  "https://drive.google.com/thumbnail?id=1I_hCm6K63IVnpPPl_rxKHS516jy5iNM9&sz=s2048",
  "https://drive.google.com/thumbnail?id=1QEkp4OXgrLxPwvNYXVLNJbZx-EX6ph02&sz=s2048",
  "https://drive.google.com/thumbnail?id=1w4YOjSvE127HebcEfErnEOd3wYu91NZ9&sz=s2048",
  "https://drive.google.com/thumbnail?id=1jpXTWpS32GDVj5ri-cL-gSkWwrUwWV3g&sz=s2048",
  "https://drive.google.com/thumbnail?id=1-8iNvxoTIOhH3IMRF9XH6Z-poj6GfbYw&sz=s2048",
  "https://drive.google.com/thumbnail?id=1-f7HQkmX3Yj8ET0j8gcWxxSVZjtTO7MS&sz=s2048",
  "https://drive.google.com/thumbnail?id=1ykgLzPzIHpUFCf18asHuteHuU0Zvhj21&sz=s2048",
  "https://drive.google.com/thumbnail?id=1hQuGhmscHUbsWBnoMqkvvUIPksKTDVqM&sz=s2048",
  "https://drive.google.com/thumbnail?id=1hMN3Bp9TffG4rrgC1_ES81Ms26j17C8G&sz=s2048",
  "https://drive.google.com/thumbnail?id=1YoqSYpiYMvbQRWEYROVe4iPtBfRsWJ2t&sz=s2048",
  "https://drive.google.com/thumbnail?id=1__Jg3MW_6fN0OQcFzEITbhdanMlWwY3Q&sz=s2048",
  "https://drive.google.com/thumbnail?id=1j0tDUrOCncI81rZfHzolAgaGw_ZRHJR3&sz=s2048",
  "https://drive.google.com/thumbnail?id=1mBvPI7jaXNus7Piq5KnOPqGuXM97KvRf&sz=s2048",
  "https://drive.google.com/thumbnail?id=1v3tWcoBj2sTiLvN7WLqDH_CIUbC023qj&sz=s2048",
  "https://drive.google.com/thumbnail?id=124yEGd-3KCcyYl6gCDKI_XAbMCbzRAdR&sz=s2048",
  "https://drive.google.com/thumbnail?id=1iFGPXgid3uw_Nmtw5R3nUy3GEEAF0Tu9&sz=s2048"
];

function Gorakhpur() {
  const [selectedImage, setSelectedImage] = useState(null);
  const openImage = (imgSrc) => setSelectedImage(imgSrc);
  const closeImage = () => setSelectedImage(null);

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4">
        <Header
          heading="Namo Yuva Run - For Nasha Mukt Bharat"
          showBackButton={true}
        />

        <div className="flex flex-col items-center justify-center py-2 px-4 text-center">
          <div className="w-full max-w-8xl text-center space-y-6 text-gray-700 text-lg leading-relaxed">
            <NavigationMenu />
            {/* <h2 className="text-2xl font-bold mb-4 text-center text-gray-700">
              Gorakhpur Marathon
            </h2> */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {GorakhpurImageUrls.map((imgSrc, index) => (
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

export default Gorakhpur;
