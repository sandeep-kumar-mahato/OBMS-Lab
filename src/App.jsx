import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Team from "./components/Team";
import Publications from "./components/Publications";
import Research from "./components/Research";
import Courses from "./components/Courses";
import LabFacilities from "./components/LabFacilities";
import Gallery from "./components/Gallery";
import Services from "./components/Services";
import Fundings from "./components/Fundings";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Team" element={<Team />} />
          <Route path="/Publications" element={<Publications />} />
          <Route path="/Research" element={<Research />} />
          <Route path="/Courses" element={<Courses />} />
          <Route path="/LabFacilities" element={<LabFacilities />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Fundings" element={<Fundings />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
