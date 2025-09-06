import Header from "../Components/Header";
import Layout from "../Components/Layout";

const links = {
  BJYM_mock_parliament_1: "https://docs.google.com/forms/d/10hBLVOxCMOCL8NVFGPSTNbWtoGxqGcX5yRzuhwLJrEQ/edit?chromeless=1",
  BJYM_mock_parliament_2: "https://docs.google.com/forms/d/1seDDMf4vTTvemshodiYYi7ZD-GN5a9gfXdHKFb5Lz4k/edit?chromeless=1",
  BJYM_mock_parliament_3: "https://docs.google.com/forms/d/1B3DpN54oAxbzT4e2mFsiSYbBAo1WfZ7klkkBl5tlawU/edit?chromeless=1",
  BJYM_mock_parliament_4: "https://docs.google.com/forms/d/10eytCYYyXcDmEwaIM67JI2LXqD6t5DQiEvma48IKA1k/edit?chromeless=1",
  BJYM_mock_parliament_5: "https://docs.google.com/forms/d/1pD3X2bx_2jUziy4PzlZvkucRpu2dIShdCF8fYknInh4/edit?chromeless=1",
  BJYM_mock_parliament_6: "https://docs.google.com/forms/d/1QP66bGD1ogs37xuqYyepwJBrO1XFWBSwq8uNk4i-3x4/edit?chromeless=1",
  BJYM_mock_parliament_7: "https://docs.google.com/forms/d/1RQgWnFh0pvMYW04RiSbDkl3wDsR0QOBGFIC0G3Yhn7k/edit?chromeless=1",
  BJYM_mock_parliament_8: "https://docs.google.com/forms/d/1udIdNOXIHIP4WLQD4HuPYZjoDsOpvdWRkbfZeOn11Js/edit?chromeless=1",
  BJYM_mock_parliament_9: "https://docs.google.com/forms/d/1sjp6aDbx1UfIUg3jNjjw-3aNx0pYLBdIiCbNpHwrxng/edit?usp=drivesdk&ouid=104338527034671192809&chromeless=1",
};

function importAll(r) {
  return r.keys().map((key) => {
    const src = r(key);
    const filenameWithExt = key.replace('./', '');
    const baseName = filenameWithExt
      .split('.')[0]
      .replace(/-/g, '_');
    return {
      src,
      name: baseName,
      link: links[baseName] || "#"
    };
  });
}

const QRImages = importAll(
  require.context("../Assets/QRcode", false, /\.(png|jpe?g|svg)$/)
);

function RegistrationForm() {
  return (
    <Layout>
      <Header
        heading="BJYM Uttar Pradesh presents — Mock Parliament 2025"
        showBackButton={true}
      />

      <section className="bg-gray-50 py-10 px-4 flex flex-col items-center">
        <h2 className="text-3xl font-bold text-[#fb5d16] mb-4 text-center">
          Register for Mock Parliament 2025
        </h2>

        <p className="text-center max-w-2xl text-gray-700 text-lg mb-10">
          Scan the QR code below for your city to complete the registration.
          Choose the correct location and fill out the form to participate.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {QRImages.map((img, index) => (
            <a
              key={index}
              href={img.link}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl shadow-md overflow-hidden group transform hover:scale-105 transition duration-300 block"
            >
              <img
                src={img.src}
                alt={`QR for ${img.name}`}
                className="w-full h-30 p-6 object-contain"
              />
            </a>
          ))}
        </div>
      </section>
    </Layout>
  );
}

export default RegistrationForm;
