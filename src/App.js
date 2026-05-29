import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppNavbar from "./components/AppNavbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import CTFWriteups from "./pages/CTFWriteups";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import "./App.css";

function App() {
  return (
    <Router>
      <AppNavbar />
      <Routes>
        <Route path="/"         element={<Home />}        />
        <Route path="/about"    element={<About />}       />
        <Route path="/projects" element={<Projects />}    />
        <Route path="/ctf"      element={<CTFWriteups />} />
        <Route path="/resume"   element={<Resume />}      />
        <Route path="/contact"  element={<Contact />}     />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;