import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import Header from './components/Header.jsx';
import Hero from './sections/Hero.jsx';
import Footer from './components/Footer.jsx';
import Profile from './sections/Profile.jsx';
import Experience from './sections/Experience.jsx';
import Projects from './sections/Projects.jsx';
import Contact from './sections/Contact.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';

import './index.css';

function App() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  const top = () => {
    window.scrollTo(0, 0);
  };

  const { t } = useTranslation();

  const darkMode = useSelector((state) => state.theme.darkMode);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  // Detectar scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) { 
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white text-black dark:bg-black dark:text-white">

      <Header />
      <Hero />

      <main className="flex-1">
        <Profile />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <Footer />

      {showTopBtn && <ScrollToTop onClick={top} />}
    </div>
  );
};

export default App;
