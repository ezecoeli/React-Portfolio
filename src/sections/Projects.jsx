import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import projectsPhoto from '../assets/projectsPhoto.jpg';
import mptImage from '../assets/MPT-SS.png';
import { SiTailwindcss, SiJavascript, SiKonva, SiReact } from "react-icons/si";
import { motion } from 'framer-motion';
import CounterBand from '../components/CounterBand.jsx';
import StarBorder from '../components/StarBorder.jsx';
import EncryptButton from '../components/EncryptButton.jsx';

export default function Projects() {
  const { t } = useTranslation();

  // Configuración de contadores
  const counters = [
    { value: 239, label: t("testCycles"), suffix: "+" },
    { value: 136, label: t("products"), suffix: "+" }
  ];

  return (
    <section id="projects" className="mb-[100px] flex flex-col justify-center items-center bg-white dark:bg-black text-gray-900 dark:text-gray-100 p-8">
      <h2 className="text-[50px] font-bold mt-[80px] mb-[60px] max-w-xl mx-auto h2-animated">{t('projects')}</h2>
      
      {/* Carousel */}
      <div className="w-full max-w-2xl mx-auto px-8">
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={32}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          className="rounded-xl"
        >
         
          {/* Card 1: ManagerPlaneTool */}
          <SwiperSlide>
            <a
              href="https://ezecoeli.github.io/ManagerPlaneTool/"
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <div className="bg-gray-900 rounded-xl shadow-lg overflow-hidden flex flex-col items-center justify-center px-4 py-8 transition-all duration-300 ease-in-out">
                <img
                  src={mptImage}
                  alt="ManagerPlaneTool"
                  className="w-full max-w-md object-cover rounded-lg mb-6 mx-auto transition-all duration-500 ease-out group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-blue-500/20"
                />
                
                <h3 className="text-2xl font-bold mb-4 text-white text-center ">ManagerPlaneTool</h3>
                <div className="flex text-[20px] space-x-[12px] mb-4 justify-center">
                  <SiReact className="text-cyan-600 dark:text-cyan-400 transition-transform duration-300 group-hover:scale-110" />
                  <SiJavascript className="text-yellow-600 dark:text-yellow-400 transition-transform duration-300 group-hover:scale-110" />
                  <SiTailwindcss className="text-blue-600 dark:text-blue-400 transition-transform duration-300 group-hover:scale-110" />
                  <SiKonva className="text-green-600 dark:text-green-400 transition-transform duration-300 group-hover:scale-110" />
                </div>
                <p className="text-xs sm:text-sm md:text-base  text-gray-200 text-center max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto leading-relaxed px-2 sm:px-4">
                  {t('managerPlaneToolDescription')}
                </p>
              </div>
            </a>
          </SwiperSlide>

          {/* Card 2: Imagen y CounterBand */}
          <SwiperSlide>
            <div className="bg-gray-900 rounded-xl shadow-lg overflow-hidden flex flex-col items-center justify-center p-6 min-h-[500px] group">
              {/* Imagen con efecto de brillo */}
              <motion.div
                className="relative flex items-center justify-center mb-6 overflow-hidden rounded-lg"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, type: 'spring', stiffness: 100, delay: 0.4 }}
                viewport={{ once: true }}
              >
                {/* Efecto de brillo de fondo */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                
                <img
                  src={projectsPhoto}
                  alt="Projects"
                  className="rounded-lg shadow-lg w-full max-w-md h-[220px] object-cover mx-auto relative z-10 transition-all duration-700 ease-out group-hover:scale-110 group-hover:brightness-110 group-hover:contrast-110 group-hover:shadow-2xl"
                />
              </motion.div>

              <p className="text-white text-2xl font-semibold mt-4 mb-8 text-center">QA TESTING</p>

              {/* CounterBand */}
              <motion.div 
                className="w-full flex justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <CounterBand 
                  counters={counters}
                  className="max-w-sm w-full relative z-10"
                />
              </motion.div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Enlace a GitHub con EncryptButton */}
      <div className="mt-8 sm:mt-12 lg:mt-[50px] px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto">
          <StarBorder 
            className="inline-block w-full" 
            color="#5d70eb" 
            speed="4s" 
            thickness={2}
          > 
            <EncryptButton 
              text={t('viewGithubProjects')}
              href="https://github.com/ezecoeli"
              className="text-white w-full text-xs sm:text-sm md:text-base lg:text-lg px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-3 md:py-4"
            />
          </StarBorder>
        </div>
      </div>
    </section>
  );
}