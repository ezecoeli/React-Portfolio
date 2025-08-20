import { motion } from 'framer-motion';
import heroPhoto from '../assets/heroPhoto.png';
import { useTranslation } from 'react-i18next';
import ReactMarkdown from 'react-markdown';

function Hero() {
  const { t } = useTranslation();

  return (
    <section className="flex-col relative w-full h-[40vh] md:h-[70vh] lg:h-[80vh] flex items-center justify-center text-center mt-[-35px]">
      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 w-full h-full bg-fixed bg-contain bg-center brightness-90"
        style={{
          backgroundImage: `url(${heroPhoto})`,
        }}
      ></div>

      {/* Overlay semitransparente */}
      <div className="absolute inset-0 bg-black/40 "></div> 

      {/* Texto */}
      <div className="banner-text relative z-20">
        <motion.h1
          className="text-[clamp(1.5rem,4vw,4rem)] text-xl sm:text-3xl md:text-5xl font-bold text-white text-center"
          initial={{ width: 0, borderRightWidth: 4 }}
          animate={{ width: "100%", borderRightWidth: 0 }}
          transition={{ duration: 2.0, ease: "linear" }}
          style={{
            overflow: "hidden",
            borderRight: "4px solid white",
            display: "inline-block",
            whiteSpace: "nowrap", 
          }}
        >
          {t('bannerTitle')}
        </motion.h1>
      </div>

      <div className="relative z-10 px-4 banner-text">
        {/* Nombre */}
        <motion.h2
          className="glitch-h2 mt-4 text-lg sm:text-xl md:text-2xl font-mono text-green-400 relative inline-block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 2 }}
        >
          <ReactMarkdown components={{ p: 'span' }}>
            {t('name')}
          </ReactMarkdown>

          <motion.span
            className="absolute ml-1"
            animate={{
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: "loop",
              delay: 2.5,
            }}
          >
            |
          </motion.span>
        </motion.h2>
      </div>
    </section>
  );
}

export default Hero;
