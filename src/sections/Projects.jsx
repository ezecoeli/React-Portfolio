import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import projectsPhoto from '../assets/projectsPhoto.jpg';
import mptImage from '../assets/MPT-SS.png';
import deployChatDemo from '../assets/deploy-chat_demo.mp4';
import deployChatImg from '../assets/deploy-chat.png';
import { 
  SiTailwindcss, SiJavascript, SiKonva, SiReact, SiSupabase,
  SiSelenium, SiCypress, SiCucumber, SiPostman, SiConfluence, 
  SiJira, SiTrello, SiGit, SiSlack, SiFigma, SiApachejmeter, SiSaucelabs,
} from "react-icons/si";
import { FaAndroid, FaApple, FaJava } from "react-icons/fa";
import { BiCodeBlock } from "react-icons/bi";
import { motion } from 'framer-motion';
import CounterBand from '../components/CounterBand.jsx';
import StarBorder from '../components/StarBorder.jsx';
import EncryptButton from '../components/EncryptButton.jsx';

export default function Projects() {
  const { t } = useTranslation();

  // Configuración de contadores QA
  const qaCounters = [
    { value: 239, label: t("testCycles"), suffix: "+" },
    { value: 136, label: t("products"), suffix: "+" }
  ];

  return (
    <section id="projects" className="mb-[100px] flex flex-col justify-center items-center bg-white dark:bg-black text-gray-900 dark:text-gray-100 p-8">
      {/* Título principal */}
      <h2 className="text-[50px] font-bold mt-[80px] mb-[60px] max-w-xl mx-auto h2-animated">{t('projects')}</h2>
      
      {/* SECCIÓN QA TESTING */}
      <div className="w-full max-w-4xl mx-auto mb-16">
        {/* Título QA */}
        <motion.h3 
          className="text-3xl font-bold text-center mb-8 text-blue-600 dark:text-blue-400 section-title testing-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Testing
        </motion.h3>

        {/* Carousel QA */}
        <div className="w-full max-w-2xl mx-auto px-8">
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={32}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            loop={false}
            className="rounded-xl qa-carousel"
          >
            {/* Card QA 1: Stats */}
            <SwiperSlide>
              <div className="bg-gray-900 rounded-xl shadow-lg overflow-hidden flex flex-col items-center justify-center p-6 min-h-[500px] group">
                <motion.div
                  className="relative flex items-center justify-center mb-6 overflow-hidden rounded-lg"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, type: 'spring', stiffness: 100, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                  
                  <img
                    src={projectsPhoto}
                    alt="QA Testing"
                    className="rounded-lg shadow-lg w-full max-w-md h-[220px] object-cover mx-auto relative z-10 transition-all duration-700 ease-out group-hover:scale-110 group-hover:brightness-110 group-hover:contrast-110 group-hover:shadow-2xl"
                  />
                </motion.div>

                <motion.div 
                  className="w-full flex justify-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <CounterBand 
                    counters={qaCounters}
                    className="max-w-sm w-full relative z-10"
                  />
                </motion.div>
              </div>
            </SwiperSlide>

            {/* Card QA 2: Testing Tools & Technologies */}
            <SwiperSlide>
              <div className="bg-gray-900 rounded-xl shadow-lg overflow-hidden flex flex-col items-center justify-center p-4 min-h-[500px] group">
                {/* Título */}
                <div className="w-full text-center mb-6 pb-8 border-b border-gray-700/50">
                  <h3 className="text-2xl font-bold text-white relative inline-block">
                    {t('tecnologies')}
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                  </h3>
                </div>
                
                <div className="text-center w-full max-w-lg overflow-y-auto max-h-[360px] pb-4">
                  {/* Automation Tools */}
                  <div className="mb-4">
                    <h4 className="text-base font-semibold text-cyan-500 mb-2 flex items-center justify-center gap-2">{t('automation')}:</h4>
                    <div className="flex flex-wrap justify-center gap-2 mb-2">
                      <div className="flex items-center gap-1 bg-gray-800 px-2 py-1 rounded-md tool-item">
                        <SiSelenium className="text-green-500 text-sm" />
                        <span className="text-xs text-gray-300">Selenium</span>
                      </div>
                      <div className="flex items-center gap-1 bg-gray-800 px-2 py-1 rounded-md tool-item">
                        <SiCypress className="text-green-400 text-sm" />
                        <span className="text-xs text-gray-300">Cypress</span>
                      </div>
                      <div className="flex items-center gap-1 bg-gray-800 px-2 py-1 rounded-md tool-item">
                        <FaJava className="text-orange-500 text-sm" />
                        <span className="text-xs text-gray-300">Java</span>
                      </div>
                      <div className="flex items-center gap-1 bg-gray-800 px-2 py-1 rounded-md tool-item">
                        <SiCucumber className="text-green-600 text-sm" />
                        <span className="text-xs text-gray-300">Cucumber</span>
                      </div>
                    </div>
                  </div>

                  {/* API & Performance */}
                  <div className="mb-4">
                    <h4 className="text-base font-semibold text-purple-400 mb-2">{t('apiTesting')}:</h4>
                    <div className="flex flex-wrap justify-center gap-2 mb-2">
                      <div className="flex items-center gap-1 bg-gray-800 px-2 py-1 rounded-md tool-item">
                        <SiPostman className="text-orange-400 text-sm" />
                        <span className="text-xs text-gray-300">Postman</span>
                      </div>
                      <div className="flex items-center gap-1 bg-gray-800 px-2 py-1 rounded-md tool-item">
                        <SiApachejmeter className="text-red-500 text-sm" />
                        <span className="text-xs text-gray-300">JMeter</span>
                      </div>
                    </div>
                  </div>

                  {/* Project Management */}
                  <div className="mb-4">
                    <h4 className="text-base font-semibold text-yellow-400 mb-2">{t('projectManagement')}:</h4>
                    <div className="flex flex-wrap justify-center gap-2 mb-2">
                      <div className="flex items-center gap-1 bg-gray-800 px-2 py-1 rounded-md tool-item">
                        <SiJira className="text-blue-500 text-sm" />
                        <span className="text-xs text-gray-300">Jira</span>
                      </div>
                      <div className="flex items-center gap-1 bg-gray-800 px-2 py-1 rounded-md tool-item">
                        <SiTrello className="text-blue-400 text-sm" />
                        <span className="text-xs text-gray-300">Trello</span>
                      </div>
                      <div className="flex items-center gap-1 bg-gray-800 px-2 py-1 rounded-md tool-item">
                        <BiCodeBlock className="text-purple-500 text-sm" />
                        <span className="text-xs text-gray-300">Zephyr</span>
                      </div>
                    </div>
                  </div>

                  {/* Mobile & Cross-Platform */}
                  <div className="mb-4">
                    <h4 className="text-base font-semibold text-red-400 mb-2">{t('mobileDesktop')}:</h4>
                    <div className="flex flex-wrap justify-center gap-2">
                      <div className="flex items-center gap-1 bg-gray-800 px-2 py-1 rounded-md tool-item">
                        <FaApple className="text-gray-300 text-sm" />
                        <span className="text-xs text-gray-300">TestFlight</span>
                      </div>
                      <div className="flex items-center gap-1 bg-gray-800 px-2 py-1 rounded-md tool-item">
                        <FaAndroid className="text-green-500 text-sm" />
                        <span className="text-xs text-gray-300">ADB</span>
                      </div>
                      <div className="flex items-center gap-1 bg-gray-800 px-2 py-1 rounded-md tool-item">
                        <BiCodeBlock className="text-orange-500 text-sm" />
                        <span className="text-xs text-gray-300">BrowserStack</span>
                      </div>
                    </div>
                  </div>

                  {/* Collaboration Tools */}
                  <div>
                    <h4 className="text-base font-semibold text-pink-400 mb-2">{t('otherTools')}:</h4>
                    <div className="flex flex-wrap justify-center gap-2">
                      <div className="flex items-center gap-1 bg-gray-800 px-2 py-1 rounded-md tool-item">
                        <SiGit className="text-orange-500 text-sm" />
                        <span className="text-xs text-gray-300">Git</span>
                      </div>
                      <div className="flex items-center gap-1 bg-gray-800 px-2 py-1 rounded-md tool-item">
                        <SiSlack className="text-purple-500 text-sm" />
                        <span className="text-xs text-gray-300">Slack</span>
                      </div>
                      <div className="flex items-center gap-1 bg-gray-800 px-2 py-1 rounded-md tool-item">
                        <SiFigma className="text-pink-500 text-sm" />
                        <span className="text-xs text-gray-300">Figma</span>
                      </div>
                      <div className="flex items-center gap-1 bg-gray-800 px-2 py-1 rounded-md tool-item">
                        <BiCodeBlock className="text-blue-400 text-sm" />
                        <span className="text-xs text-gray-300">DevTools</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      {/* SECCIÓN DESARROLLO */}
      <div className="w-full max-w-4xl mx-auto mb-16">
        {/* Título Desarrollo */}
        <motion.h3 
          className="text-3xl font-bold text-center mb-8 text-green-600 dark:text-green-400 section-title dev-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {t('webDev')} 
        </motion.h3>

        {/* Carousel Desarrollo */}
        <div className="w-full max-w-2xl mx-auto px-8">
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={32}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            loop={false} 
            className="rounded-xl dev-carousel"
          >
            {/* Card Dev 1: ManagerPlaneTool */}
            <SwiperSlide>
              <div className="bg-gray-900 rounded-xl shadow-lg overflow-hidden flex flex-col items-center justify-center px-4 py-8 transition-all duration-300 ease-in-out group">
                {/* imagen clickeable */}
                <a
                  href="https://ezecoeli.github.io/ManagerPlaneTool/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group-link"
                >
                  <img
                    title={t('clickToSeeInSite')}
                    src={mptImage}
                    alt="ManagerPlaneTool"
                    className="w-full max-w-md object-cover rounded-lg mb-6 mx-auto transition-all duration-500 ease-out group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-blue-500/20 cursor-pointer"
                  />
                </a>
                
                <h3 className="text-2xl font-bold mb-4 text-white text-center">Manager Plane Tool</h3>
                <div className="flex text-[20px] space-x-[12px] mb-4 justify-center">
                  <SiReact className="text-cyan-600 dark:text-cyan-400 transition-transform duration-300 group-hover:scale-110" />
                  <SiJavascript className="text-yellow-600 dark:text-yellow-400 transition-transform duration-300 group-hover:scale-110" />
                  <SiTailwindcss className="text-blue-600 dark:text-blue-400 transition-transform duration-300 group-hover:scale-110" />
                  <SiKonva className="text-green-600 dark:text-green-400 transition-transform duration-300 group-hover:scale-110" />
                </div>
                <p className="text-xs sm:text-sm md:text-base text-gray-200 text-center max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto leading-relaxed px-2 sm:px-4">
                  {t('managerPlaneToolDescription')}
                </p>
              </div>
            </SwiperSlide>

            {/* Card Dev 2: Deploy-Chat */}
            <SwiperSlide>
              <div className="bg-gray-900 rounded-xl shadow-lg overflow-hidden flex flex-col items-center justify-center px-4 py-8 transition-all duration-300 ease-in-out group">
                {/* video/imagen clickeable */}
                <a
                  href="https://github.com/ezecoeli/Deploy-Chat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group-link"
                >
                  <div className="relative w-full max-w-md h-[260px] rounded-lg mb-6 mx-auto overflow-hidden cursor-pointer">
                    <video
                      title={t('clickToSeeInGitHub')}
                      className="w-full h-full object-contain transition-all duration-500 ease-out group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-green-500/20"
                      autoPlay
                      loop
                      muted
                      playsInline
                      poster={deployChatImg}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'block';
                      }}
                    >
                      <source src={deployChatDemo} type="video/mp4" />
                    </video>
                    {/* Imagen de respaldo */}
                    <img 
                      src={deployChatImg} 
                      alt="Deploy-Chat Preview" 
                      className="w-full h-full object-contain transition-all duration-500 ease-out group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-green-500/20"
                      style={{ display: 'none' }}
                    />
                  </div>
                </a>
                
                <h3 className="text-2xl font-bold mb-4 text-white text-center">Deploy-Chat</h3>
                
                {/* Iconos */}
                <div className="flex text-[20px] space-x-[12px] mb-4 justify-center">
                  <SiReact className="text-cyan-600 dark:text-cyan-400 transition-transform duration-300 group-hover:scale-110" />
                  <SiJavascript className="text-yellow-600 dark:text-yellow-400 transition-transform duration-300 group-hover:scale-110" />
                  <SiTailwindcss className="text-blue-600 dark:text-blue-400 transition-transform duration-300 group-hover:scale-110" />
                  <SiSupabase className="text-green-600 dark:text-green-400 transition-transform duration-300 group-hover:scale-110" />
                </div>
                
                {/* Contenedor de texto */}
                <p className="text-xs sm:text-sm md:text-base text-gray-200 text-center max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto leading-relaxed px-2 sm:px-4">
                  {t('deployChatDescription')}
                </p>
              </div>
            </SwiperSlide>

            {/* añadir mas proyectos*/}
          
          </Swiper>
        </div>
      </div>

      {/* Enlace a GitHub */}
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