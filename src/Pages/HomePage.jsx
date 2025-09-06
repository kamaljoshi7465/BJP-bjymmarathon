// import React from "react";
import Layout from "../Components/Layout";
import Header from "../Components/Header";
import RegisterButton from "../Buttons/RegisterButton";
// import GalleryButton from "../Buttons/GalleryButton";
// import MediaCoverageButton from "../Buttons/MediaCoverageButton";

function importAll(r) {
  return r.keys().map(r);
}
const topImages = importAll(
  require.context("../Assets/Top", false, /\.(png|jpe?g|JPG|svg)$/)
);
// const HighLightImages = importAll(
//   require.context("../Assets/HighLightImage", false, /\.(png|jpe?g|JPG|svg)$/)
// );
// const ArticleImages = importAll(
//   require.context("../Assets/Article", false, /\.(png|jpe?g|svg)$/)
// );

const HomePage = () => {
  return (
    <Layout>
      <Header
        heading="Modi Yuva Marathon - For Nasha Mukt Bharat"
        showBackButton={true}
      />

      <div className="flex flex-col justify-center items-center px-4 py-6">
        <section className="w-full max-w-3xl mx-auto px-4 py-4 text-center">
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-6">
            {topImages.map((img, index) => (
              <div
                key={index}
                className="rounded-xl shadow-md overflow-hidden group transform hover:scale-105 transition duration-300"
              >
                <img
                  src={img}
                  alt={`Modi Yuva Marathon ${index + 1}`}
                  className="w-full object-cover"
                />
              </div>
            ))}
          </div>
        </section>
        <div className="w-full max-w-3xl text-center mb-6">
          <h2 className="text-xl font-semibold text-gray-700">
            Emergency@50 Modi Yuva Marathon Overview
          </h2>
        </div>

        <div className="w-full max-w-3xl space-y-6 text-gray-700 text-lg leading-relaxed">
          {/* <p className="font-semibold"> */}
          <p>
            On 21st of Sept, BJYM will be organising marathons in 75 cities,
            where more than 5-lakh youths will participate across India to
            promote #FitIndia and #NashaMuktBharat as a part of Hon'ble Prime
            Minister Sh. @narendramodi Ji's Birthday celebrations.
          </p>

          <p>
            Come celebrate the spirit of youth, fitness, and nation-building.
          </p>

          <p>
            These marathons will not only serve as a tribute to the visionary
            and youth-centric leadership of PM Modi ji, but will also inspire
            millions to embrace a healthier and more active lifestyle.
          </p>

          <p>
            A meeting was held today under the leadership of Hon'ble BJYM
            National President Sh. @Tejasvi_Surya ji, to ensure a flawless
            organisation or marathons across the country.
          </p>

          <p>
            We request all the marathon runners, sports persons, fitness
            enthusiasts and youths from across the country to join the run and
            help promote #FitIndia and #NashaMukt Bharat.
          </p>

          <p>
            21 sept को प्रदेश में 6 स्थानों पर नमो मैराथन का आयोजन करना है, गोरखपुर, वाराणसी, लखनऊ महानगर, कानपुर महानगर, आगरा महानगर, गाजियाबाद महानगर।
          </p>

          <p>
            सेवा पखवाड़ा
          </p>
        </div>
        {/* Registresion  */}
        <div className="fixed bottom-5 left-0 right-0 flex justify-center z-50">
          <RegisterButton />
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
