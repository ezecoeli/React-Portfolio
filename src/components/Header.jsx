import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { HiMenu, HiX } from "react-icons/hi";
import { FaSun, FaMoon } from "react-icons/fa";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Detectar si el body ya tiene dark o si el SO esta en modo oscuro
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

  // Menu hamburguesa
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const handleLinkClick = () => setIsMenuOpen(false);

  return (
    <header className="relative flex justify-between items-center py-4 px-4 md:px-8">
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
      <button onClick={toggleMenu} className="hamburger">
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
        <div className="mobile-menu absolute top-full left-0 right-0 shadow-lg z-40">
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


