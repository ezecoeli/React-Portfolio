import { motion } from 'framer-motion';
import heroPhoto from '../assets/heroPhoto.png';
import { useTranslation } from 'react-i18next';

function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative w-full h-[40vh] md:h-[70vh] lg:h-[80vh] flex items-center justify-center text-center mt-[-35px]">
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
      <div className="relative z-10 px-6 banner-text">
        <motion.h1
          className="text-[clamp(1.5rem,4vw,4rem)] text-xl sm:text-3xl md:text-5xl font-bold text-white text-center"
          initial={{ width: 0, borderRightWidth: 4 }}
          animate={{ width: "100%", borderRightWidth: 0 }}
          transition={{ duration: 4, ease: "linear" }}
          style={{
            overflow: "hidden",
            borderRight: "4px solid white",
            display: "inline-block",
            whiteSpace: "nowrap", 
          }}
        >
          {t('bannerTitle')}
        </motion.h1>

        {/* Nombre */}
        <motion.h2
          className="mt-4 text-lg sm:text-xl md:text-2xl font-mono text-green-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          {`const author = "Hola, mi nombre es Ezequiel Coeli";`}
        </motion.h2>
      </div>
    </section>
  );
}

export default Hero;
