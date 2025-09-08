// import React from "react";
import Layout from "../Components/Layout";
import Header from "../Components/Header";
import RegisterButton from "../Buttons/RegisterButton";

function importAll(r) {
  return r.keys().map(r);
}
const topImages = importAll(
  require.context("../Assets/Top", false, /\.(png|jpe?g|JPG|svg)$/)
);
const HighLightImages = importAll(
  require.context("../Assets/HighLightImages", false, /\.(png|jpe?g|JPG|svg)$/)
);
// const ArticleImages = importAll(
//   require.context("../Assets/Article", false, /\.(png|jpe?g|svg)$/)
// );

const HomePage = () => {
  return (
    <Layout>
      <Header heading="Modi Yuva Marathon - For Nasha Mukt Bharat" />

      <div className="flex flex-col justify-center items-center px-4 py-6">
        <section className="w-full max-w-6xl mx-auto px-4 py-4 text-center">
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-6">
            {topImages.map((img, index) => (
              <div
                key={index}
                className="shadow-md overflow-hidden group transform hover:scale-105 transition duration-300"
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

        <div className="w-full max-w-6xl mx-auto space-y-8 text-gray-700 text-base md:text-lg leading-relaxed mt-4">
          <div className="bg-gray-50 rounded-2xl shadow-md p-6 md:p-8 text-center">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
              Youth Power for a Drug-Free India
            </h3>

            <p className="text-justify">
              <span className="font-semibold">
                Bharatiya Janata Yuva Morcha (BJYM) Uttar Pradesh
              </span>
              is proud to launch the{" "}
              <span className="font-semibold">Modi Yuva Marathon</span> – a
              statewide initiative to channel the strength, energy, and
              determination of our youth towards building a{" "}
              <span className="text-orange-600 font-semibold">
                Nasha Mukt Bharat (Drug-Free India)
              </span>
              . This grand marathon will be organized in{" "}
              <span className="font-semibold">
                6 major cities of Uttar Pradesh
              </span>
              , bringing together thousands of young participants, fitness
              enthusiasts, and change-makers with a single mission –
              <span className=""> Say No to Drugs, Yes to Life!</span>
            </p>
          </div>
        </div>

        <div className="w-full max-w-6xl mx-auto space-y-8 text-gray-700 text-base md:text-lg leading-relaxed mt-4">
          <div className="bg-gray-50 rounded-2xl shadow-md p-6 md:p-8 text-center">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
              Event Highlights
            </h3>

            <ul className="list-disc list-inside space-y-3 text-left md:text-lg text-gray-700">
              <li>
                Marathon Across 6 Cities: Covering key urban centers of Uttar
                Pradesh.
              </li>
              <li>
                Participation of Thousands of Youth: Students, athletes,
                professionals, and citizens.
              </li>
              <li>
                Awareness Drives: Motivational talks, street plays, and cultural
                activities.
              </li>
              <li>
                Special Guests & Leaders: Guidance from eminent leaders and
                fitness icons.
              </li>
              <li>
                Certificates & Recognition: All participants will be honored for
                their contribution.
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full max-w-6xl mx-auto space-y-8 text-gray-700 text-base md:text-lg leading-relaxed mt-4">
          <div className="bg-gray-50 rounded-2xl shadow-md p-6 md:p-8 text-center">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
              Why Join the Modi Yuva Marathon?
            </h3>

            <ul className="list-disc list-inside space-y-3 text-left md:text-lg text-gray-700">
              <li>Be part of a historic youth movement against drugs.</li>
              <li>
                Showcase your commitment to a fit, aware, and progressive India.
              </li>
              <li>
                Run not just for yourself, but for the future of the nation.
              </li>
              <li>Inspire others by becoming a youth icon of change.</li>
            </ul>
          </div>
        </div>

        <div className="w-full max-w-6xl mx-auto space-y-8 text-gray-700 text-base md:text-lg leading-relaxed mt-4">
          <div className="bg-gray-50 rounded-2xl shadow-md p-6 md:p-8 text-center">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
              Event Dates & Cities
            </h3>

            <ul className="list-disc list-inside space-y-3 text-left md:text-lg text-gray-700">
              <li>
                📍 Stay tuned for the official city-wise schedule and
                registration details.
              </li>
              <li>
                The marathon will cover 6 key cities across Uttar Pradesh to
                maximize participation and impact.
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full max-w-6xl mx-auto space-y-8 text-gray-700 text-base md:text-lg leading-relaxed mt-4">
          <div className="bg-gray-50 rounded-2xl shadow-md p-6 md:p-8 text-center">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
              Registration Details
            </h3>

            <ul className="list-disc list-inside space-y-3 text-left md:text-lg text-gray-700">
              <li>
                Who can participate? Youth, students, professionals, athletes,
                and citizens committed to a drug-free India.
              </li>
              <li>Registration Fee: Free (pre-registration required).</li>
              <li>
                How to Register: Registration link is available here, you can
                register yourself to be a part of this historic{" "}
                <span className="font-semibold underline">
                <a
                  href="https://docs.google.com/forms/d/1fsPfAQd07Nyj-4Dlfvf2YOW7LKlgs3R-1LSpcOsJtX4/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Modi Yuva Marathon
                </a> </span>.
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full max-w-6xl mx-auto space-y-8 text-gray-700 text-base md:text-lg leading-relaxed mt-4">
          <div className="bg-gray-50 rounded-2xl shadow-md p-6 md:p-8 text-center">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
              Join the Movement
            </h3>

            <p className="text-justify">
              Let us unite under the leadership of Prime Minister Shri Narendra
              Modi Ji and the guidance of BJYM Uttar Pradesh to fulfill the
              dream of a Nasha Mukt Bharat.
            </p>

            <ul className="list-disc list-inside space-y-3 text-left md:text-lg text-gray-700 mt-3">
              <li>👉 Run for Fitness.</li>
              <li>👉 Run for Awareness.</li>
              <li>👉 Run for a Drug-Free India.</li>
            </ul>
          </div>
        </div>

        <section className="w-full max-w-6xl mx-auto px-4 py-4 text-center">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {HighLightImages.map((img, index) => (
              <div
                key={index}
                className="shadow-md overflow-hidden group transform hover:scale-105 transition duration-300"
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
        {/* Registresion  */}
        <div className="fixed bottom-12 left-0 right-0 flex justify-center z-50">
          <RegisterButton />
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
