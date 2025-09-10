import Header from "../Components/Header";
import Layout from "../Components/Layout";

const Certificate = () => {
  return (
    <Layout>
      <Header
        heading="BJYM Uttar Pradesh presents — Namo Yuva Run 2025"
        showBackButton={true}
      />

      <div className="flex flex-col items-center justify-center px-4 py-6">
        <div className="w-full max-w-3xl text-center space-y-6 text-gray-700 text-lg leading-relaxed">
          <h2 className="text-2xl font-bold mb-4 text-center text-gray-700">
            Certification
          </h2>
          <p>
            Certificates will be available for download after 28th june 2025.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Certificate;
