import React from "react";
import Header from "../Components/Header";
import Layout from "../Components/Layout";

function About() {
  return (
    <Layout>
      <Header
        heading="BJYM Uttar Pradesh presents — Mock Parliament 2025"
        showBackButton={true}
      />

      <div className="flex flex-col justify-center items-center px-4 py-6">
        <div className="w-full max-w-3xl text-center mb-6">
          <h2 className="text-xl font-semibold text-gray-700">
            Emergency@50 Mock Parliament Overview
          </h2>
        </div>

        <div className="w-full max-w-3xl space-y-6 text-gray-700 text-lg leading-relaxed">
          <p className="font-semibold">
            Emergency@50 is a Mock Parliament that will bring
            together students, youth leaders, academicians, historians, and
            political thinkers to deliberate upon:
          </p>

          <ul className="list-disc list-inside pl-4 space-y-2">
            <li>The causes that led to the declaration of Emergency.</li>
            <li>The suppression of democratic institutions during the period.</li>
            <li>
              The heroic resistance of countless political activists and common
              citizens.
            </li>
            <li>
              The long-lasting impact of Emergency on India's democratic fabric.
            </li>
            <li>
              This Mock Parliament is not just a commemoration; it is a call
              to the youth of India to remain ever vigilant and safeguard the
              democratic values enshrined in our Constitution.
            </li>
          </ul>

          <p>
            As India marks 50 years of the Emergency, BJYM Uttar Pradesh is
            organizing a special Mock Parliament: <strong>Emergency@50</strong> to
            educate, engage and inspire today's youth about this critical phase
            of India’s political history.
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default About;
