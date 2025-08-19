import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';

import experienceVideo from '../assets/experienceVideo.mp4';
import experiencePhoto from '../assets/experiencePhoto.jpg';

export default function Experience() {
  const { t } = useTranslation();

  return (
    <section
      id="experience"
      className="mb-[10px] bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-8 flex flex-col gap-8"
    >
      {/* Título central */}
      <h2 className="text-[50px] font-bold mb-6 max-w-xl mx-auto h2-animated">
        {t('experience')}
      </h2>

      {/* Cuadrícula/grid */}
      <div className="experience-grid flex-1">
        {/* Texto superior izquierdo */}
        <motion.div
          className="text2 flex items-center justify-center p-[40px]"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
          viewport={{ once: true }}
        >
          <p className="text-lg leading-relaxed whitespace-pre-line text-justify hyphens-auto">
            <ReactMarkdown>
              {t('experienceDescription1')}
            </ReactMarkdown>
          </p>
        </motion.div>

        {/* Video superior derecho */}
        <motion.div
          className="video flex items-center justify-center p-4"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 3.8, type: 'spring', stiffness: 60, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <video
            src={experienceVideo}
            autoPlay
            loop
            muted
            className="rounded-lg shadow-lg w-full max-h-[600px] md:max-h-[400px] object-cover" 
          />
        </motion.div>

        {/* Imagen inferior izquierdo */}
        <motion.div
          className="image flex items-center justify-center p-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 100, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <img
            src={experiencePhoto}
            alt="Experience"
            className="rounded-lg shadow-lg w-full max-h-[600px] md:max-h-[400px] object-cover"
          />
        </motion.div>

        {/* Texto inferior derecho */}
        <motion.div
          className="text1 flex items-center justify-center p-[40px]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 100, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-lg leading-relaxed whitespace-pre-line text-justify hyphens-auto pr-[10px]">
            <ReactMarkdown>
              {t('experienceDescription2')}
            </ReactMarkdown>
          </p>
        </motion.div>
      </div>
    </section>
  );
}



