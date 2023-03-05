// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Router basename="/">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
