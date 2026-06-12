import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const Estimator = lazy(() => import("./pages/Estimator"));
const Contact = lazy(() => import("./pages/Contact"));

export default function App() {
  return (
    <Router>
      <div className="bg-[#EAE0CF] text-[#111844] font-sans antialiased overflow-x-hidden min-h-screen relative flex flex-col">
        <div className="relative z-10 w-full flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-[#EAE0CF]">Loading...</div>}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/estimator" element={<Estimator />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
          <WhatsAppButton />
        </div>
      </div>
    </Router>
  );
}
