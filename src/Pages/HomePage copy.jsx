import React from "react";
import Layout from "../Components/Layout";
import Header from "../Components/Header";
import RegisterButton from "../Buttons/RegisterButton";
import GalleryButton from "../Buttons/GalleryButton";
import MediaCoverageButton from "../Buttons/MediaCoverageButton";

function importAll(r) {
  return r.keys().map(r);
}
const topImages = importAll(
  require.context("../Assets/Top", false, /\.(png|jpe?g|JPG|svg)$/)
);
const HighLightImages = importAll(
  require.context("../Assets/HighLightImage", false, /\.(png|jpe?g|JPG|svg)$/)
);
const ArticleImages = importAll(
  require.context("../Assets/Article", false, /\.(png|jpe?g|svg)$/)
);

const HomePage = () => {
  return (
    <Layout>
      <Header heading="BJYM Uttar Pradesh presents — Mock Parliament 2025" />

      <div className="flex gap-4 md:hidden mt-4">
        <GalleryButton />
        <MediaCoverageButton />
      </div>

      <div className="flex flex-col items-center justify-center py-2 px-4 text-center">
        <div className="hidden md:flex w-full max-w-2xl mx-auto justify-center items-center gap-4 py-1 text-lg font-semibold text-orange-600">
          {/* <span>Introduction</span> */}
        </div>
        <section className="w-full max-w-6xl mx-auto px-4 py-4 text-center">
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-6">
            {topImages.map((img, index) => (
              <div
                key={index}
                className="rounded-xl shadow-md overflow-hidden group transform hover:scale-105 transition duration-300"
              >
                <img
                  src={img}
                  alt={`Mock Parliament ${index + 1}`}
                  className="w-full object-cover"
                />
              </div>
            ))}
          </div>
        </section>

        {/* <div className="mb-4">
          <div className="w-full max-w-2xl mx-auto flex justify-center items-center gap-4 py-1 text-orange-600">
            <span>
              On the midnight of 25th June 1975, India witnessed one of the
              darkest nights of its democratic journey — The Emergency. Declared
              by the then Prime Minister Indira Gandhi, the Emergency
              (1975-1977) suspended fundamental rights, curtailed press freedom,
              imprisoned political leaders, censored dissent, and shook the very
              foundation of our constitutional values.
            </span>
          </div>
          <div className="w-full max-w-2xl mx-auto flex justify-center items-center gap-4 py-1 text-orange-600">
            <span>
              As India marks 50 years of the Emergency, BJYM Uttar Pradesh is
              organizing a special Mock Parliament: Emergency@50 to educate,
              engage and inspire today's youth about this critical phase of
              India’s political history.
            </span>
          </div>
        </div> */}


        {/* Sequence of Events of Emergency */}
        <section className="w-full max-w-6xl mx-auto px-4 py-4 text-center">
          <h2 className="text-3xl font-bold text-[#fb5d16] mb-8">
            Sequence of Events of Emergency Imposed by Congress
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ArticleImages.map((img, index) => (
              <div
                key={index}
                className="rounded-xl shadow-md overflow-hidden group transform hover:scale-105 transition duration-300"
              >
                <img
                  src={img}
                  alt={`Mock Parliament ${index + 1}`}
                  className="w-50 h-full object-cover"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Highlight Images Section */}
        <section className="w-full max-w-6xl mx-auto px-4 py-4 text-center">
          <h2 className="text-3xl font-bold text-[#fb5d16] mb-8">
            Remembering the Darkest Chapter of Indian Democracy
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {HighLightImages.map((img, index) => (
              <div
                key={index}
                className="rounded-xl shadow-md overflow-hidden group transform hover:scale-105 transition duration-300"
              >
                <img
                  src={img}
                  alt={`Mock Parliament ${index + 1}`}
                  className="w-full h-64 object-cover"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Registresion  */}
        <div className="fixed bottom-5 left-0 right-0 flex justify-center z-50">
          <RegisterButton />
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
