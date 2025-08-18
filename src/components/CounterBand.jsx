import { animate } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function CounterBand({ counters = [], className = '', gradientColors = 'from-purple-600 to-indigo-500' }) {

  function Counter({ value }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
      const controls = animate(0, value, {
        duration: 2,
        onUpdate(v) {
          setCount(Math.floor(v));
        },
      });
      return () => controls.stop();
    }, [value]);

    return <span>{count}</span>;
  }

  if (!counters.length) return null;

  return (
    <section
      className={`counter-band bg-gradient-to-r ${gradientColors} text-white flex flex-col md:flex-row justify-around items-center gap-8 relative z-10 ${className}`}
    >
      {counters.map((c, i) => (
        <div key={i} className="text-center">
          <div className="text-4xl md:text-5xl font-bold">
            <Counter value={c.value} />
            {c.suffix || ''}
          </div>
          <div className="mt-2 text-lg md:text-xl">{c.label}</div>
        </div>
      ))}
    </section>
  );
}




