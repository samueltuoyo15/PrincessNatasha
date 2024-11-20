import React, { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './components/ThemeContext';
import Navbar from './components/Navbar';
import HeroSection from './components/Hero';
import ServicesSection from './components/ServicesSection';
import TestimonialsSection from './components/Testimonials';
import ProcessSection from './components/Process';
import ServicesTwoSection from './components/ServicesTwoSection';
import ServicesThreeSection from './components/ServicesThreeSection.jsx';
// import WritingProcess from './components/WritingProcess.jsx';
import Footer from './components/Footer';
import AboutMe from './components/Aboutme'; // Update the import to AboutMe

function App() {
  const servicesRef = useRef(null);

  const handleScrollToServices = () => {
    if (servicesRef.current) {
      servicesRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Router>
      <div className="min-h-screen">
        <Navbar onScrollToServices={handleScrollToServices} />
        <Routes>
          <Route path="/" element={
            <main>
              <HeroSection />
              <ServicesSection ref={servicesRef} />
              <TestimonialsSection />
              <ProcessSection />
              <ServicesTwoSection />
              <ServicesThreeSection />
              {/* <WritingProcess/> */}
            </main>
          } />
          <Route path="/about" element={<AboutMe />} /> {/* Update the element to AboutMe */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default function WrappedApp() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}