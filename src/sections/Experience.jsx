import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import PixelCard from '../components/PixelCard';

import experienceVideo from '../assets/experienceVideo.mp4';
import experiencePhoto from '../assets/experiencePhoto.jpg';

export default function Experience() {
  const { t } = useTranslation();

  return (
    <section
      id="experience"
      className="bg-gray-200 dark:bg-black text-gray-900 dark:text-gray-100 p-8 flex flex-col gap-8"
    >
      {/* Título central */}
      <h2 className="text-[50px] font-bold mb-[40px] mt-[80px] max-w-xl mx-auto h2-animated">
        {t('experience')}
      </h2>

      {/* grid */}
      <div className="experience-grid flex-1">
        {/* Texto superior izquierdo */}
        <motion.div
          className="text1 flex flex-col items-center justify-center p-[40px]"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
          viewport={{ once: true }}
        >
          <ReactMarkdown
            components={{
              p: ({node, ...props}) => (
                <p className="text-lg leading-relaxed whitespace-pre-line text-justify hyphens-auto mb-4" {...props} />
              )
            }}
          >
            {t('experienceDescription1')}
          </ReactMarkdown>
        </motion.div>

        {/* PixelCard con video superior derecho  */}
        <motion.div
          className="video flex items-center justify-center p-[40px]"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 3.8, type: 'spring', stiffness: 60, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <PixelCard 
            variant="default" 
            className="w-full h-full"
          >
            <div className="absolute inset-0 w-full h-full flex items-center justify-center">
              <video
                src={experienceVideo}
                autoPlay
                loop
                muted
                className="w-full h-full object-cover rounded-lg opacity-80 hover:opacity-10 transition-opacity duration-500"
              />
            </div>
          </PixelCard>
        </motion.div>

        {/* PixelCard con imagen inferior izquierdo */}
        <motion.div
          className="image flex items-center justify-center p-[40px]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 100, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <PixelCard 
            variant="default" 
            className="w-full h-full"
          >
            <div className="absolute inset-0 w-full h-full flex items-center justify-center">
              <img
                src={experiencePhoto}
                alt="Experience"
                className="w-full h-full object-cover rounded-lg opacity-80 hover:opacity-60 transition-opacity duration-500"
              />
            </div>
          </PixelCard>
        </motion.div>

        {/* Texto inferior derecho */}
        <motion.div
          className="text2 flex flex-col items-center justify-center p-[40px]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 100, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <ReactMarkdown
            components={{
              p: ({node, ...props}) => (
                <p className="text-lg leading-relaxed whitespace-pre-line text-justify hyphens-auto mb-4 pr-[10px]" {...props} />
              )
            }}
          >
            {t('experienceDescription2')}
          </ReactMarkdown>
        </motion.div>
      </div>
    </section>
  );
}