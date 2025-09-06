import Layout from "../Components/Layout";
import Header from "../Components/Header";

function Highlight() {

  return (
    <Layout>
      <Header
        heading="BJYM Uttar Pradesh presents — Modi Yuva Marathon 2025"
        showBackButton={true}
      />
      <div className="flex flex-col items-center justify-center px-4 py-8 text-gray-700">
        <div className="w-full max-w-4xl space-y-8 text-lg leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-center text-gray-700">
              Event Highlights
            </h2>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li>
                <strong>Simulated Parliamentary Debates</strong> — Participants
                will assume the role of historical characters and debate on key
                legislations and decisions taken during Emergency.
              </li>
              <li>
                <strong>Keynote Speeches</strong> by senior political leaders,
                journalists, historians, and those who faced the brunt of
                Emergency.
              </li>
              {/* <li>
                <strong>Panel Discussions</strong> on media censorship, human
                rights violations, political arrests, and constitutional
                safeguards.
              </li> */}
              <li>
                <strong>Exhibitions</strong> showcasing rare photographs,
                newspaper cuttings, personal accounts, and documents from the
                Emergency era.
              </li>
              <li>
                <strong>Documentary Screenings</strong> capturing the resistance
                movement and voices of unsung heroes.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-center text-gray-700">
              Objectives of Modi Yuva Marathon: Emergency@50
            </h2>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li>
                To educate youth about the critical lessons from India’s
                Emergency period.
              </li>
              <li>
                To create awareness about the value of civil liberties, freedom
                of expression, and democratic institutions.
              </li>
              <li>
                To honor the sacrifices of those who stood up against
                authoritarianism.
              </li>
              <li>
                To build a generation that values, protects, and strengthens
                Indian democracy.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-center text-gray-700">
              Why Emergency@50 Matters
            </h2>
            <p className="text-gray-700">
              The Emergency remains a powerful reminder of how fragile democracy
              can be in the absence of public vigilance. As we observe 50 years
              of this historic event, it is our collective responsibility to
              ensure that such an assault on democracy is never repeated.
              Through this Modi Yuva Marathon, BJYM Uttar Pradesh is empowering
              youth to be informed, conscious, and responsible guardians of
              India’s democratic traditions.
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
}

export default Highlight;
