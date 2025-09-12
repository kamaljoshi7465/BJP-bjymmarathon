import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './Pages/HomePage';
import RegistrationForm from './Pages/RegistrationForm';
import GorakhpurMarathon from './Pages/GorakhpurMarathon';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/introduction" element={<Introduction />} />
        <Route path="/about" element={<About />} />
        <Route path="/highlights" element={<Highlight />} /> */}
        <Route path="/register" element={<RegistrationForm />} />
        {/* <Route path="/certificate" element={<Certificate />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/media-coverage" element={<MediaCoverage />} /> */}
        <Route path="/gorakhpur-marathon" element={<GorakhpurMarathon />} />
      </Routes>
    </Router>
  );
}

export default App;
