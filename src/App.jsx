import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="min-h-screen flex flex-col ">
        <Navbar></Navbar>

        <div className="mx-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            {/*<Route path="/services" element={<Services />} />
            <Route path="/franchise" element={<Franchise />} /> */}
          </Routes>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
