import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Profile from './sections/Profile.jsx';
import Experience from './sections/Experience.jsx';
import Projects from './sections/Projects.jsx';
import Contact from './sections/Contact.jsx';
import { motion } from 'framer-motion';
import { IoIosArrowUp } from 'react-icons/io';
import './index.css';

import headerPhoto from './assets/headerPhoto.png';

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

      {/* Sección del banner  */}
      <section className="relative w-full h-[40vh] md:h-[70vh] lg:h-[80vh] flex items-center justify-center text-center mt-[-35px]">
        {/* Imagen de fondo */}
        <div
          className="absolute inset-0 w-full h-full bg-fixed bg-contain bg-center brightness-90"
          style={{
            backgroundImage: `url(${headerPhoto})`,
          }}
        ></div>

        {/* Overlay semitransparente */}
        <div className="absolute inset-0 bg-black/40 "></div> 

        {/* Texto */}
        <div className="relative z-10 px-6 banner-text">
          <motion.h1
            className="text-[clamp(1.5rem,4vw,4rem)] text-xl sm:text-3xl md:text-5xl font-bold text-white text-center"
            initial={{ width: 0, borderRightWidth: 4 }}
            animate={{ width: "100%", borderRightWidth: 0 }}
            transition={{ duration: 2, ease: "linear" }}
            style={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              borderRight: "4px solid white",
              display: "inline-block",
              maxWidth: "90vw", 
            }}
          >
            {t('bannerTitle')}
          </motion.h1>
        </div>
      </section>

      <main className="flex-1">
        <Profile />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />

      {showTopBtn && (
      <button onClick={top} className="topbtn">
        <IoIosArrowUp className="w-6 h-6" />
      </button>
      )}
    </div>
  );
};

export default App;
