import { useTranslation } from 'react-i18next';
import projectsPhoto from '../assets/projectsPhoto.jpg';
import { FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';
import CounterBand from '../components/CounterBand.jsx';

export default function Projects() {
  const { t } = useTranslation();

  // Configuración de contadores
  const counters = [
    { value: 195, label: "Test Cycles", suffix: "+" },
    { value: 114, label: "Products", suffix: "+" }
  ];

  return (
    <section id="projects" className="mb-[100px] mt-[100px] flex flex-col justify-center items-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-8">
      <h2 className="text-[50px] font-bold mb-6 max-w-xl mx-auto h2-animated">{t('projects')}</h2>
      
      <div className="flex flex-row gap-[50px]">
        <motion.div
          className="flex items-center justify-center p-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 100, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <img
            src={projectsPhoto}
            alt="Projects"
            className="rounded-lg shadow-lg w-full h-[260px] object-cover"
          />
        </motion.div>

        {/* Banda de contadores animados */}
        <CounterBand 
          counters={counters}
          className="max-w-5xl"
          gradientColors="from-blue-600/80 via-purple-600/80 to-blue-800/80"
        />
      </div>

      <div className="mt-[50px] text-center space-y-6">
        <a
          href="https://github.com/ezecoeli" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-[8px] px-[80px] py-[5px] 
                    border-2 border-gray-800 dark:border-white 
                    text-gray-800 dark:text-white 
                    rounded-xl font-semibold text-lg
                    hover:bg-gray-800 hover:text-white 
                    dark:hover:bg-white dark:hover:text-gray-800
                    transition-all duration-300 ease-in-out
                    shadow-md hover:shadow-xl hover:scale-125"
        >
          <FaGithub className="text-[25px] text-2xl" />
          <span>{t('viewGithubProjects')}</span>
        </a>
      </div>
    </section>
  );
}

