import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import Layout from "../Components/Layout";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import Papa from "papaparse";
import logo from "../Assets/Logo/logo512.png";

const Certificate = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [certificateData, setCertificateData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    Papa.parse("/registrations.csv", {
      download: true,
      header: true,
      complete: (results) => {
        setData(results.data);
      },
    });
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchTerm) {
      setError("Please enter a valid email or phone number.");
      return;
    }
    setError(null);
    setLoading(true);

    // Find user by email or phone
    const user = data.find(
      (row) =>
        row.email?.trim() === searchTerm.trim() ||
        row.phone?.trim() === searchTerm.trim()
    );

    if (user) {
      setCertificateData(user);
    } else {
      setCertificateData(null);
      setError("No user found for this email or phone number.");
    }
    setLoading(false);
  };

  const downloadPDF = async () => {
    const certificateElement = document.getElementById("certificate");
    if (!certificateElement) return;

    window.scrollTo(0, 0);

    const canvas = await html2canvas(certificateElement, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF({
      orientation: "landscape",
      unit: "mm",
      format: [150, 100],
    });

    pdf.addImage(imgData, "PNG", 0, 0, 150, 100);
    pdf.save(`${certificateData.Full_Name}_certificate.pdf`);
  };

  return (
    <Layout>
      <Header heading="Prize Money Cross Country Race" showBackButton={true} />
      <div className="flex items-center justify-center p-4">
        <div className="bg-white shadow-xl rounded-xl border-2 border-[#fb5d16] w-full max-w-3xl p-2">
          <h4 className="text-2xl font-bold text-[#fb5d16] text-center mb-4">
            Search Your Certificate
          </h4>
          <form onSubmit={handleSearch} className="text-center mb-4">
            <input
              type="text"
              placeholder="Enter Email or Phone"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="p-3 border rounded-md w-full max-w-sm mb-4"
            />
            <br />
            <button
              type="submit"
              className="bg-[#fb5d16] text-white py-2 px-6 rounded-md font-semibold"
            >
              Search
            </button>
          </form>
          {loading && <p className="text-center">Loading...</p>}
          {error && <p className="text-center text-red-500">{error}</p>}
        </div>
      </div>

      {certificateData && (
        <div className="flex flex-col items-center justify-center">
          <div
            id="certificate"
            className="relative w-[150mm] h-[100mm] bg-[#fff4e6]"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#fff4e6] shadow-lg rounded-lg border-2 border-[#fb5d16] w-[140mm] h-[90mm] flex flex-col justify-between p-4">
              {/* Watermark */}
              <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none select-none">
                <img
                  src={logo}
                  alt="Watermark Logo"
                  className="w-[50mm] h-auto opacity-30"
                />
              </div>

              {/* Ribbon */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#fb5d16] text-white px-4 py-1 rounded-full text-base font-semibold shadow z-10">
                Marathon – Noida
              </div>

              {/* Certificate Content */}
              <div className="relative z-10 text-center mt-6">
                <h1 className="text-[#fb5d16] font-bold text-xl mb-1">
                  Certificate of Participation
                </h1>
                <p className="text-sm">This is proudly presented to</p>
                <h2 className="font-semibold underline text-lg mt-1">
                  {certificateData?.Full_Name}
                </h2>

                <div className="text-sm text-gray-600 mt-2">
                  <div>
                    <strong>Phone:</strong> {certificateData.phone}
                  </div>
                  <div>
                    {certificateData.Address && (
                      <>
                        <strong>Address:</strong> {certificateData.Address}
                      </>
                    )}
                  </div>
                </div>

                <p className="text-sm text-gray-700 mt-3 px-4 leading-snug">
                  For actively participating in the national initiative and
                  promoting civic awareness through the <br />
                  <span className="font-semibold text-[#fb5d16]">
                    "Namo Yuva Run - For Nasha Mukt Bharat"
                  </span>
                  .
                </p>

                <div className="flex justify-between items-center text-xs mt-6 px-6">
                  <p className="border-t border-black w-2/5 text-center pt-1">
                    Authorized Signature
                  </p>
                  <p className="border-t border-black w-2/5 text-center pt-1">
                    21 Sep 2025
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* <button
            onClick={downloadPDF}
            className="mt-6 bg-[#fb5d16] text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-[#e65c1c] transition"
          >
            Download Certificate
          </button> */}
        </div>
      )}
    </Layout>
  );
};

export default Certificate;
