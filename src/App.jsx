import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/Hero';
import ServicesSection from './components/ServicesSection';
import TestimonialsSection from './components/Testimonials';
import ProcessSection from './components/Process';
import ServicesTwoSection from './components/ServicesTwoSection';
import Footer from './components/Footer';
import AboutMe from './components/Aboutme';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost'; // Import the BlogPost component
import Portfolio from './pages/Portfolio'; // Import the Portfolio component
import Admin from './admin/Admin';
import Login from './admin/Login';
import NotFoundPage from './pages/NotFoundPage';
import ContactForm from './components/ContactForm';
import { FaSun, FaMoon } from 'react-icons/fa';

function App() {
  const [theme, setTheme] = useState(false);
  const [isAdmin, setIsAdmin] = useState(() => localStorage.getItem('isAdmin') === 'true');

  useEffect(() => {
    const Status = localStorage.getItem('isAdmin');
    setIsAdmin(Status === 'true');
  }, []);

  const location = useLocation();

  return (
    <div className={`${theme ? 'bg-black text-white' : 'bg-white text-black'} min-h-screen overflow-x-hidden`}>
      {location.pathname !== '/admin' && location.pathname !== '/login' && <Navbar />}
      <Routes>
        <Route path="/" element={
          <main>
            <HeroSection />
            <ServicesSection />
            <TestimonialsSection />
            <ProcessSection />
            <ServicesTwoSection />
            <ContactForm />
          </main>
        } />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPost />} /> {/* Route for individual blog posts */}
        <Route path="/portfolio" element={<Portfolio />} /> {/* Route for Portfolio */}
        <Route path="/login" element={<Login setIsAdmin={setIsAdmin} />} />
        <Route path="/admin" element={isAdmin ? <Admin /> : <Navigate to="/login" />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      {location.pathname !== '/admin' && location.pathname !== '/login' && <Footer />}

      {/* Toggle Theme */}
      {/* <div
        onClick={() => setTheme((prev) => !prev)}
        className={`fixed bottom-2 right-4 flex items-center justify-between w-14 h-7 px-1 rounded-full cursor-pointer transition-all ${theme ? 'bg-gray-600' : 'bg-yellow-400'}`}
      >
        <div
          className={`absolute w-6 h-6 rounded-full bg-white shadow-lg transition-transform ${theme ? 'translate-x-6' : ''}`}
        />
        <FaSun
          className={`text-yellow-300 text-lg absolute left-1 transition-opacity ${theme ? 'opacity-0' : 'opacity-100'}`}
        />
        <FaMoon
          className={`text-blue-400 text-lg absolute right-1 transition-opacity ${theme ? 'opacity-100' : 'opacity-0'}`}
        />
      </div> */}
    </div>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
