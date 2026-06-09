import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import ServicesPage from './pages/ServicesPage';
import Portfolio from './pages/Portfolio';
import Estimator from './pages/Estimator';
import Contact from './pages/Contact';

export default function App() {
  return (
    <Router>
      <div className="bg-[#EAE0CF] text-[#111844] font-sans antialiased overflow-x-hidden min-h-screen relative flex flex-col">
        <div className="relative z-10 w-full flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/estimator" element={<Estimator />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}
