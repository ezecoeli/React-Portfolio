import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const CounterBand = ({ counters, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState(counters.map(() => 0));
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          startCounting();
        } else {
          setIsVisible(false);
          setCounts(counters.map(() => 0)); // Reset counters
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const startCounting = () => {
    counters.forEach((counter, index) => {
      let start = 0;
      const increment = counter.value / 100;
      const timer = setInterval(() => {
        start += increment;
        if (start >= counter.value) {
          start = counter.value;
          clearInterval(timer);
        }
        setCounts(prev => {
          const newCounts = [...prev];
          newCounts[index] = Math.floor(start);
          return newCounts;
        });
      }, 20);
    });
  };

  return (
    <motion.div 
      ref={ref}
      className={`counter-band ${className}`} 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex justify-center space-x-8 relative z-10">
        {counters.map((counter, index) => (
          <div key={index} className="text-center">
            <div className="text-3xl font-bold text-white mb-2">
              {counts[index]}{counter.suffix}
            </div>
            <div className="text-sm text-white/90 font-medium">
              {counter.label}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default CounterBand;