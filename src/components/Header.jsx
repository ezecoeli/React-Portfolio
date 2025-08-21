import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { HiMenu, HiX } from "react-icons/hi";
import { FaSun, FaMoon } from "react-icons/fa";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const headerRef = useRef(null);

  // para detectar si el body ya tiene dark o si el SO esta en modo oscuro
  useEffect(() => {
    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    const bodyHasDark = document.body.classList.contains("dark");

    if (bodyHasDark || prefersDark) {
      setIsDarkMode(true);
      document.body.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.body.classList.remove("dark");
    }
  }, []);

  // Menu hamburguesa
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const handleLinkClick = () => setIsMenuOpen(false);

  // Cerrar el menú hamburguesa al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isMenuOpen]);

  // Cerrar menú hamb. al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMenuOpen]);

  // Idioma
  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "es" ? "en" : "es");
  };

  // Tema claro/oscuro
  const toggleTheme = () => {
    setIsDarkMode((prev) => {
      const newMode = !prev;
      document.body.classList.toggle("dark", newMode);
      return newMode;
    });
  };

  return (
    <header 
      ref={headerRef}
      className="fixed top-0 left-0 right-0 flex justify-between items-center py-4 px-4 md:px-8 z-50"
    >
      {/* NAV ESCRITORIO */}
      <nav className="nav-desktop items-center">
        <a href="#profile" onClick={handleLinkClick} className="mx-4 hover:text-gray-300 transition-colors">
          {t("profile")}
        </a>
        <a href="#experience" onClick={handleLinkClick} className="mx-4 hover:text-gray-300 transition-colors">
          {t("experience")}
        </a>
        <a href="#projects" onClick={handleLinkClick} className="mx-4 hover:text-gray-300 transition-colors">
          {t("projects")}
        </a>
        <a href="#contact" onClick={handleLinkClick} className="mx-4 hover:text-gray-300 transition-colors">
          {t("contact")}
        </a>
      </nav>

      {/* BOTÓN HAMBURGUESA */}
      <button onClick={toggleMenu} className="ml-[10px] hamburger">
        {isMenuOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
      </button>

      {/* IDIOMA / TEMA */}
      <div className="flex items-center space-x-2 md:space-x-4">
        <button onClick={toggleLanguage} className="px-3 py-1 text-sm font-semibold border rounded">
          {i18n.language === "es" ? "EN" : "ES"}
        </button>
        <button onClick={toggleTheme}>
          {isDarkMode ? <FaSun className="w-5 h-5" /> : <FaMoon className="w-5 h-5" />}
        </button>
      </div>

      {/* MENÚ MÓVIL */}
      {isMenuOpen && (
        <div className="mobile-menu absolute top-full left-0 right-0 shadow-lg">
          <nav className="flex flex-col">
            <a href="#profile" onClick={handleLinkClick} className="px-6 py-3 hover:bg-gray-800 transition-colors">
              {t("profile")}
            </a>
            <a href="#experience" onClick={handleLinkClick} className="px-6 py-3 hover:bg-gray-800 transition-colors">
              {t("experience")}
            </a>
            <a href="#projects" onClick={handleLinkClick} className="px-6 py-3 hover:bg-gray-800 transition-colors">
              {t("projects")}
            </a>
            <a href="#contact" onClick={handleLinkClick} className="px-6 py-3 hover:bg-gray-800 transition-colors">
              {t("contact")}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;


