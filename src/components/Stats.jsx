import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { label: 'Attendee Footfall', value: '30k+'},
  { label: 'Keynote & Panel Speakers', value: '40+'},
  { label: 'Investor Participation', value: '100+'},
  { label: 'Media Collaborations', value: '80+'},

];

// Container variants for staggering children
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.16,
    },
  },
};

// Individual item variants
const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 90, damping: 14 },
  },
};

// CountUp hook now starts only when "start" is true
const useCountUp = (end, duration = 1400, start = true) => {
  const [value, setValue] = React.useState(0);
  React.useEffect(() => {
    if (!start) {
      setValue(0);
      return;
    }
    let raf;
    const t0 = performance.now();
    const ease = t => 1 - Math.pow(1 - t, 3);
    const step = (t) => {
      const p = Math.min(1, (t - t0) / duration);
      setValue(Math.floor(ease(p) * end));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [end, duration, start]);
  return value;
};



const fmt = (n) => {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(0)}k`;
  return String(n);
};

const Stats = () => {
  const containerRef = useRef(null);
  const inView = useInView(containerRef, { once: true, amount: 0.18 });

  return (
    <div style={{ padding: 40, backgroundColor: '#f9fafb', borderRadius: 16 }}>
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}} // simple entrance tied to inView
        transition={{ duration: 0.6 }}
        style={{ marginBottom: 24, fontSize: 24, fontWeight: 'bold', color: '#111827' }}
      >
        Event Impact at a Glance
      </motion.h2>

      <motion.div
        ref={containerRef}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: 20,
        }}
      >
        {stats.map((stat, index) => {
          // numeric extraction for animation
          const numeric = parseInt(String(stat.value).replace(/[^0-9]/g, ''), 10) || 0;
          // start CountUp only when container is in view
          const current = useCountUp(numeric, 1200 + index * 120, inView);
          // fake trend for sparkline (replaceable)
          const fakeTrend = Array.from({ length: 7 }, (_, i) => Math.max(1, Math.floor(numeric * (0.2 + i * 0.15))));
          const pct = Math.min(100, Math.round((numeric / (numeric * 1.5 || 1)) * 100));

          return (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.03, boxShadow: '0 12px 30px rgba(0,0,0,0.08)' }}
              style={{
                backgroundColor: 'white',
                padding: 18,
                borderRadius: 12,
                borderLeft: "6px solid #fac176",
                display: 'flex',
                flexDirection: 'column',
                gap: 10,
                cursor: 'default'
              }}
            >
              

              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ fontSize: 26, fontWeight: 800, color: '#111827' }}>
                  {inView ? fmt(current) : '—'}
                  {stat.value.toString().includes('k') ? 'k' : ''}
                  {stat.value.toString().includes('+') ? '+' : ''}
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: '#111827' }}>{stat.label}</div>
              </div>

              
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Stats;