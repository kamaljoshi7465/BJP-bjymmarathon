import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../Components/Layout";
import Header from "../Components/Header";
import RegisterButton from "../Buttons/RegisterButton";
import logo from "../Assets/Logo/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import CertificateButton from "../Buttons/CertificateButton";

function importAll(r) {
  return r.keys().map(r);
}
const topImages = importAll(
  require.context("../Assets/Top", false, /\.(png|jpe?g|JPG|svg)$/)
);
const HighLightImages = [
  "https://drive.google.com/thumbnail?id=10RpFUKppbwby83mHljAhcKCCP22ggE7o&sz=s2048",
  "https://drive.google.com/thumbnail?id=15jsyKexnms916J-3zMoDQtsytzOwJxpC&sz=s2048",
  "https://drive.google.com/thumbnail?id=174lZ5Hl4-6L4hwwX9SLgTAm1yAtWAHYK&sz=s2048",
  "https://drive.google.com/thumbnail?id=17p0gnLRJHt-X7DRSaDj7WtByH4X_Mqzq&sz=s2048",
  "https://drive.google.com/thumbnail?id=1CPv4zh_nfbDO-qcNgHLWANF-uLP5KKXq&sz=s2048",
  "https://drive.google.com/thumbnail?id=1Ibe1MNY2ZYiKbZrPbw0anYAmlMlPbhw5&sz=s2048",
  "https://drive.google.com/thumbnail?id=1K2-pxudmu0dCfuTFHqgQDlVhzpKkG9kp&sz=s2048",
  "https://drive.google.com/thumbnail?id=1qmhUWzmYJ6ayWrYIsyTwP0FlcQCU3-qb&sz=s2048",
  "https://drive.google.com/thumbnail?id=1ljHzAA8VAlW5bbSIfcD9lYhagRV08_eq&sz=s2048",
  "https://drive.google.com/thumbnail?id=1XLQxvDsP2yZjXCfGhwLZOQVM4jHb884W&sz=s2048",
  "https://drive.google.com/thumbnail?id=1WVpUY8wepU-FzK5Zl6yqTT0p5DaEH0P4&sz=s2048",
  "https://drive.google.com/thumbnail?id=1SLJ973KLvLZoAGbAoiUWzFzjFEDrL4uz&sz=s2048",
  "https://drive.google.com/thumbnail?id=1TKKyIMJ-V_-bpbvysCqGkRg0kPBNr56q&sz=s2048",
  "https://drive.google.com/thumbnail?id=1Np9tOHsTKaPKR0INyzdObQtmLhta3umM&sz=s2048",
  "https://drive.google.com/thumbnail?id=1MDDOvl-1-nc1MU-dKJ0vh9ECs0Qf93k-&sz=s2048",
  "https://drive.google.com/thumbnail?id=1DT89umoT4_B61nDHkvWiAB3WL5pqOF3k&sz=s2048",
  "https://drive.google.com/thumbnail?id=1AfbFcGVkrMpNLzgQ0O4gT5-YWOexVYQ0&sz=s2048",
  "https://drive.google.com/thumbnail?id=1BTXq0y0pCPVtwXdPASIgPAzZk2tfl8z4&sz=s2048",
  "https://drive.google.com/thumbnail?id=1LIJ49cZHOzSVIk9u7uTYWprAi1HoAxWL&sz=s2048",
  "https://drive.google.com/thumbnail?id=1LpwDAVgRxO1ckptwJLE6fmnkA46IVHul&sz=s2048",
  "https://drive.google.com/thumbnail?id=1NCVCzP0aYkM3TFEsm4TtqEoVoJcWqcEj&sz=s2048",
  "https://drive.google.com/thumbnail?id=1SErN3K8zTME7bC3QSMo1Fp9mextg9bX3&sz=s2048",
  "https://drive.google.com/thumbnail?id=1VBAl7kPvgoWvQ3p-AJyYIGLFNsuRpIMb&sz=s2048",
  "https://drive.google.com/thumbnail?id=1bbx1fG9Oxmo4ZkfUP4_BLys6l-G3bnG3&sz=s2048",
  "https://drive.google.com/thumbnail?id=1i-qkWHRwdnbTMFBCsgTR-WbeEmIP-97n&sz=s2048",
  "https://drive.google.com/thumbnail?id=1lIWvAdKK6lxDrTMiWadem8Ikyp_igkdo&sz=s2048",
  "https://drive.google.com/thumbnail?id=1n-j10MCHSpPhDz3wpwh2BAYX5qwzZv1Q&sz=s2048",
  "https://drive.google.com/thumbnail?id=1tZpJZjcqmVX0zbKXiYw6uVszORVS2B9V&sz=s2048",
  "https://drive.google.com/thumbnail?id=1uqfPWbUajQdL6AAVoDeY4a_UAG6JLcjo&sz=s2048",
  "https://drive.google.com/thumbnail?id=11bd7r6mNKOS3_qMB7YlyBheFlwQYAZMV&sz=s2048",
];

const LazyLoadedImage = ({ src, alt, className }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsLoaded(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "100px",
      }
    );

    const currentImageRef = imageRef.current;

    if (currentImageRef) {
      observer.observe(currentImageRef);
    }

    return () => {
      if (currentImageRef) {
        observer.unobserve(currentImageRef);
      }
    };
  }, []);

  return (
    <img
      ref={imageRef}
      src={isLoaded ? src : null}
      alt={alt}
      className={`${className} ${
        isLoaded ? "opacity-100" : "opacity-0"
      } transition-opacity duration-500`}
    />
  );
};

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <Header heading="Namo Yuva Run - For Nasha Mukt Bharat" />

      <img src={logo} alt="Namo Yuva Run" className="w-full object-cover" />

      <div className="flex flex-col justify-center items-center px-4 py-2">
        {/* <section className="w-full max-w-6xl mx-auto px-4 py-4 text-center">
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-6">
            {logo.map((img, index) => (
              <div
                key={index}
                // className="shadow-md overflow-hidden group transform hover:scale-105 transition duration-300"
              >
                <img
                  src={img}
                  alt={`Namo Yuva Run ${index + 1}`}
                  className="w-full object-cover"
                />
              </div>
            ))}
          </div>
        </section> */}

      <div className="flex justify-center gap-4">
        <button
          onClick={() => navigate("/media/gorakhpur")}
          className="group relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium rounded-xl shadow-lg transition duration-300 ease-out bg-[#fb5d16] text-white hover:scale-105 hover:shadow-xl"
        >
          {/* <FaImages className="mr-2 text-lg transition-transform duration-300 group-hover:rotate-12" /> */}
          Media
          <FontAwesomeIcon icon={faArrowRight} className="ml-1" />
        </button>
        <CertificateButton />
      </div>

        <section className="w-full max-w-8xl mx-auto py-2 text-center">
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-6">
            {topImages.map((img, index) => (
              <div
                key={index}
                className="shadow-md overflow-hidden group transform  transition duration-300"
              >
                <img
                  src={img}
                  alt={`Namo Yuva Run ${index + 1}`}
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
              <span className="font-semibold">Namo Yuva Run</span> – a statewide
              initiative to channel the strength, energy, and determination of
              our youth towards building a{" "}
              <span className="text-orange-600 font-semibold">
                Nasha Mukt Bharat (Drug-Free India)
              </span>
              . This grand marathon will be organized in{" "}
              <span className="font-semibold">
                16 major cities of Uttar Pradesh
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
                Marathon Across 16 Cities (<span className="text-orange-600 font-semibold">Lucknow Mahanagar, Gorakhpur, Varanasi, Ghaziabad, Agra Mahanagar, Bareilly, Moradabad, Meerut Mahanagar, Aligarh Mahanagar, Prayagraj Mahanagar, Ayodhya Mahanagar, Jhansi Mahanagar, Mathura, Firozabad, Saharanpur, Shahjahanpur</span>): Covering key urban centers of Uttar Pradesh.
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
              Why Join the Namo Yuva Run?
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
                    Namo Yuva Run
                  </a>{" "}
                </span>
                .
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
                {/* Correctly using the LazyLoadedImage component */}
                <LazyLoadedImage
                  src={img}
                  alt={`Namo Yuva Run ${index + 1}`}
                  className="w-full object-cover"
                />
              </div>
            ))}
          </div>
        </section>
        {/* Registration  */}
        <div className="fixed bottom-12 left-0 right-0 flex justify-center z-50">
          <RegisterButton />
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
