import React, { useEffect, useState } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Process from './components/sections/Process';
import Contact from './components/sections/Contact';
import FloatingWhatsApp from './components/ui/FloatingWhatsApp';
import HomePage from './pages/HomePage';

const getPath = () => {
  const cleanPath = window.location.pathname.replace(/\/+$/, '');
  return cleanPath || '/';
};

function App() {
  const [path, setPath] = useState(getPath);

  useEffect(() => {
    const onLocationChange = () => setPath(getPath());
    window.addEventListener('popstate', onLocationChange);
    return () => window.removeEventListener('popstate', onLocationChange);
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll('.reveal');
    if (!elements.length) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      elements.forEach((element) => element.classList.add('revealed'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = entry.target.getAttribute('data-delay');
            if (delay) {
              entry.target.style.transitionDelay = `${delay}ms`;
            }
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: '0px 0px -40px 0px' }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [path]);

  const pageMap = {
    '/': <HomePage />,
    '/about': <About />,
    '/services': <Services />,
    '/products': <Process />,
    '/process': <Process />,
    '/contact': <Contact />,
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        {pageMap[path] || (
          <div className="pt-32 pb-20 container mx-auto px-4 md:px-8 text-center">
            <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
            <p className="text-gray-600">The page you requested does not exist.</p>
          </div>
        )}
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
