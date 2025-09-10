import React from "react";
import Header from "../Components/Header";
import Layout from "../Components/Layout";

function Introduction() {
  return (
    <Layout>
      <Header
        heading="BJYM Uttar Pradesh presents — Namo Yuva Run 2025"
        showBackButton={true}
      />

      <div className="flex flex-col items-center justify-center px-4 py-6">
        <div className="w-full max-w-3xl text-center space-y-6 text-gray-700 text-lg leading-relaxed">
          <h2 className="text-2xl font-bold mb-4 text-center text-gray-700">
            Introduction
          </h2>
          <p>
            On the midnight of <strong>25th June 1975</strong>, India witnessed
            one of the darkest nights of its democratic journey —{" "}
            <strong>The Emergency</strong>. Declared by the then Prime Minister
            Indira Gandhi, the Emergency (1975–1977) suspended fundamental
            rights, curtailed press freedom, imprisoned political leaders,
            censored dissent, and shook the very foundation of our
            constitutional values.
          </p>

          <p>
            As India marks <strong>50 years</strong> of the Emergency,{" "}
            <strong>BJYM Uttar Pradesh</strong> is organizing a special Youth
            Parliament: <strong>Emergency@50</strong> to educate, engage, and
            inspire today's youth about this critical phase of India’s political
            history.
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default Introduction;
