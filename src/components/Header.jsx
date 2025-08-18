import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { toggleTheme } from '../store/themeSlice';
import { MdOutlineWbSunny } from "react-icons/md";
import { IoMdMoon } from "react-icons/io";

const Header = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);
  const { t, i18n } = useTranslation();

  return (
    <header className="flex justify-between items-center">
      <nav className="flex items-center">
        <a 
          className="mx-4 text-black dark:text-white hover:text-gray-600 visited:text-black dark:visited:text-white" 
          href="#profile"
        >
          {t('profile')}
        </a>
        <a 
          className="mx-4 text-black dark:text-white hover:text-gray-600 visited:text-black dark:visited:text-white" 
          href="#experience"
        >
          {t('experience')}
        </a>
        <a 
          className="mx-4 text-black dark:text-white hover:text-gray-600 visited:text-black dark:visited:text-white" 
          href="#projects"
        >
          {t('projects')}
        </a>
        <a 
          className="mx-4 text-black dark:text-white hover:text-gray-600 visited:text-black dark:visited:text-white" 
          href="#contact"
        >
          {t('contact')}
        </a>
      </nav>
      
      <div className="flex items-center space-x-4">
        <button
          onClick={() => i18n.changeLanguage('es')}
          className="px-2 py-1 border rounded bg-white dark:bg-black !text-black dark:!text-white"
        >
          🇪🇸 ES
        </button>
        <button
          onClick={() => i18n.changeLanguage('en')}
          className="px-2 py-1 border rounded bg-white dark:bg-black !text-black dark:!text-white"
        >
          🇬🇧 EN
        </button>

        <button
          onClick={() => dispatch(toggleTheme())}
          className="gap-[5px] w-32 h-10 min-w-[128px] px-4 py-2 rounded transition-colors flex items-center justify-center whitespace-nowrap space-x-2"
        >
          {darkMode ? (
            <>
              <MdOutlineWbSunny className="w-5 h-5" />
              <span>{t('light')}</span>
            </>
          ) : (
            <>
              <IoMdMoon className="w-5 h-5" />
              <span>{t('dark')}</span>
            </>
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
