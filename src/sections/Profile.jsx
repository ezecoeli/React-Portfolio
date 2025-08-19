import { useTranslation } from 'react-i18next';
import { FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { SiPostgresql, SiJavascript, SiDocker, SiPostman, SiTrello } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { motion } from "framer-motion";
import ReactMarkdown from 'react-markdown';

import profilePhoto from '../assets/profilePhoto.png';

// Componente para unificar el efecto de iconos
const IconWithPulse = ({ Icon, title }) => (
  <motion.div
    whileHover={{ scale: 1.25 }}
    transition={{ type: "spring", stiffness: 300, damping: 10 }}
  >
    <Icon title={title} />
  </motion.div>
);

export default function Profile() {
  const { t } = useTranslation();

  const icons = [
    { component: FaReact, title: "React" },
    { component: FaNodeJs, title: "Node.js" },
    { component: FaPython, title: "Python" },
    { component: SiJavascript, title: "JavaScript" },
    { component: VscVscode, title: "VisualStudioCode" },
    { component: SiPostgresql, title: "PostgreSQL" },
    { component: SiDocker, title: "Docker" },
    { component: SiPostman, title: "Postman" },
    { component: SiTrello, title: "Trello" },
  ];

  return (
    <section 
      id="profile" 
      className="min-h-[60vh] mb-[50px] flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-6 py-16"
    >
      <div className="relative container max-w-6xl w-full">
        
        {/* Título */}
        <div className="text-center mb-12">
          <h2 className="text-[50px] font-bold h2-animated">
            {t('profile')}
          </h2>
        </div>

        {/* grilla para foto y texto */}
        <div className="profile-grid mb-12">
          
          {/* Columna 1: foto con efectos */}
          <motion.div 
            className="flex justify-center md:justify-end"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.05, rotate: 2 }}
          >
            <div className="relative">
              <img 
                src={profilePhoto} 
                alt="Foto de perfil" 
                className="dark:brightness-80 w-48 h-48 md:w-56 md:h-56 shadow-2xl border-4 border-blue-500 object-cover hover:border-blue-400 transition-all duration-300" 
              />
              {/* Efecto glow */}
              <div className="absolute inset-0 rounded-full bg-blue-500 opacity-20 blur-xl animate-pulse"></div>
            </div>
          </motion.div>

          {/* Columna 2: texto */}
          <motion.div 
            className="flex flex-col justify-center"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <p className="text-lg leading-relaxed whitespace-pre-line text-justify hyphens-auto pl-[40px] pr-[40px]">
              <ReactMarkdown>
                {t('profileDescription')}
              </ReactMarkdown>
            </p>
          </motion.div>
        </div>

        {/* Línea de íconos */}
        <div className="mt-[80px] flex sm:flex-row flex-wrap justify-center text-[50px] gap-[25px] text-blue-500">
          {icons.map(({ component: Icon, title }) => (
            <IconWithPulse key={title} Icon={Icon} title={title} />
          ))}
        </div>

      </div>
    </section>
  );
}