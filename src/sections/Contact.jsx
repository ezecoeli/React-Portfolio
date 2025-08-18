import { useTranslation } from 'react-i18next';
import { GrMail } from "react-icons/gr";
import { FaLinkedin, FaPhoneSquareAlt } from "react-icons/fa";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="mb-[25px] flex flex-col justify-center items-center bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-8">
      <div className="max-w-2xl w-full flex-1 text-center">
        <h2 className="text-[50px] mb-[50px] font-bold mb-[20px] max-w-xl mx-auto h2-animated">{t('contact')}</h2>
        
        <div className="space-y-6">
          <div className="flex flex-col gap-[10px] items-center md:items-start">
            {/* Teléfono */}
            <a 
              href="tel:+34635592041" 
              className="inline-flex items-center gap-[5px] px-8 py-4 bg-gray-800 dark:bg-white text-white dark:text-gray-800 rounded-lg hover:bg-gray-900 dark:hover:bg-gray-100 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
            >
              <FaPhoneSquareAlt className="text-[30px] text-blue-500" />
              <span className="text-2xl">+34 635 59 20 41</span>
            </a>

            {/* Email */}
            <a 
              href="mailto:ezecoeli@gmail.com" 
              className="inline-flex items-center gap-[5px] px-8 py-4 bg-gray-800 dark:bg-white text-white dark:text-gray-800 rounded-lg hover:bg-gray-900 dark:hover:bg-gray-100 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
            >
              <GrMail className="text-[30px] text-blue-500" />
              <span className="text-2xl">ezecoeli@gmail.com</span>
            </a>

            {/* LinkedIn */}
            <a 
              href="https://www.linkedin.com/in/ezequiel-coeli-softwaretestingqa/" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-[5px] px-8 py-4 bg-gray-800 dark:bg-white text-white dark:text-gray-800 rounded-lg hover:bg-gray-900 dark:hover:bg-gray-100 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl flex items-center gap-[5px] p-6 rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              <FaLinkedin className="text-[30px] text-blue-500" />
              <span className="text-2xl">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

