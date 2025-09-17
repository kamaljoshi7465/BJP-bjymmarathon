import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './Pages/HomePage';
import Gorakhpur from './Pages/Media/Gorakhpur';
import Meerut from './Pages/Media/Meerut';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/media/gorakhpur" element={<Gorakhpur />} />
        <Route path="/media/meerut" element={<Meerut />} />
      </Routes>
    </Router>
  );
}

export default App;
