import { useTranslation } from 'react-i18next';
import { FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { SiPostgresql, SiJavascript, SiDocker, SiPostman, SiTrello } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { motion } from "framer-motion";
import ReactMarkdown from 'react-markdown';

import ProfileCard from '../components/ProfileCard';

import avatar from '../assets/avatar.png';
import codePattern from '../assets/code.svg';

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
      className="min-h-[60vh] flex flex-col items-center justify-center bg-gray-100 dark:bg-black text-gray-900 dark:text-gray-100 px-6 py-16"
    >
      <div className="relative container max-w-3xl w-full flex flex-col items-center">
        
        {/* 1. Título */}
        <h2 className="text-[50px] font-bold h2-animated text-center mb-[80px] mt-[80px]">
          {t('profile')}
        </h2>

        {/* 2. Profile Card */}
        <ProfileCard
          name="Ezequiel Coeli"
          title="QA Engineer"
          contactText="Contact Me"
          handle='ezequielcoeli'
          status='Working'
          showUserInfo={true}
          avatarUrl={avatar}
          iconUrl={codePattern}
          enableTilt={true}
          enableMobileTilt={false}
          onContactClick={() => window.open('https://www.linkedin.com/in/ezequiel-coeli-softwaretestingqa/', '_blank')}
        />

        {/* 3. Texto profile description */}
        <motion.div 
          className="text-container mt-[40px]"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <ReactMarkdown
            components={{
              p: ({node, ...props}) => (
                <p className="text-lg leading-relaxed whitespace-pre-line text-justify hyphens-auto mb-4" {...props} />
              )
            }}
          >
            {t('profileDescription')}
          </ReactMarkdown>
        </motion.div>

        {/* 4. Línea de íconos */}
        <div className="mb-[80px] mt-[50px] flex flex-wrap justify-center text-[50px] gap-[25px] w-full">
          {icons.map(({ component: Icon, title }) => (
            <IconWithPulse key={title} Icon={Icon} title={title} />
          ))}
        </div>
      </div>
    </section>
  );
}