import { useTranslation } from 'react-i18next';
import { GrMail } from "react-icons/gr";
import { FaLinkedin, FaPhoneSquareAlt } from "react-icons/fa";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="flex flex-col justify-center items-center bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-8">
      <div className="mt-[80px] mb-[80px] max-w-6xl w-full flex-1 text-center">
        <h2 className="text-[50px] mb-[50px] font-bold max-w-xl mx-auto h2-animated">{t('contact')}</h2>
        
        <div className="space-y-6">
          
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 xl:gap-12 mb-[60px] mt-[40px] items-center justify-center">
            {/* Teléfono */}
            <a 
              href="tel:+34635592041" 
              className="inline-flex items-center gap-3 px-6 py-4 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-xl border border-gray-300 dark:border-gray-600 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl min-w-[280px] justify-center"
            >
              <FaPhoneSquareAlt className="text-[24px] text-blue-500 flex-shrink-0" />
              <span className="text-lg font-medium">+34 635 59 20 41</span>
            </a>

            {/* Email */}
            <a 
              href="mailto:ezecoeli@gmail.com" 
              className="inline-flex items-center gap-3 px-6 py-4 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-xl border border-gray-300 dark:border-gray-600 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl min-w-[280px] justify-center"
            >
              <GrMail className="text-[24px] text-blue-500 flex-shrink-0" />
              <span className="text-lg font-medium">ezecoeli@gmail.com</span>
            </a>

            {/* LinkedIn */}
            <a 
              href="https://www.linkedin.com/in/ezequiel-coeli-softwaretestingqa/" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-4 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-xl border border-gray-300 dark:border-gray-600 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl min-w-[280px] justify-center"
            >
              <FaLinkedin className="text-[24px] text-blue-500 flex-shrink-0" />
              <span className="text-lg font-medium">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}