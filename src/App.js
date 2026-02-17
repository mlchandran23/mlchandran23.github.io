import { HashRouter, Routes, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer.js';
import NavBar from './components/NavBar.js';
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
        <header>
          <HashRouter>
            <NavBar />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </HashRouter>
        </header>

        <div>
          <Footer />
        </div>
    </div>
  );
}

export default App;
