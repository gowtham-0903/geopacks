import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const EASE = [0.22, 1, 0.36, 1];

// Single element that fades/slides in when scrolled into view.
export const Reveal = ({
  children,
  delay = 0,
  y = 28,
  className = '',
  once = true,
  as = 'div',
  ...props
}) => {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '0px 0px -80px 0px' }}
      transition={{ duration: 0.7, ease: EASE, delay }}
      {...props}
    >
      {children}
    </MotionTag>
  );
};

// Container that staggers its Reveal/StaggerItem children.
export const Stagger = ({ children, className = '', delay = 0, gap = 0.09, ...props }) => (
  <motion.div
    className={className}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: '0px 0px -60px 0px' }}
    variants={{
      hidden: {},
      show: { transition: { staggerChildren: gap, delayChildren: delay } },
    }}
    {...props}
  >
    {children}
  </motion.div>
);

export const StaggerItem = ({ children, className = '', y = 26, as = 'div', ...props }) => {
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      className={className}
      variants={{
        hidden: { opacity: 0, y },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
      }}
      {...props}
    >
      {children}
    </MotionTag>
  );
};

// Count-up number that animates once when scrolled into view.
export const Counter = ({ to, suffix = '', prefix = '', duration = 1600, className = '' }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -40px 0px' });
  const reduce = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setValue(to);
      return;
    }
    let raf;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(eased * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration, reduce]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {value}
      {suffix}
    </span>
  );
};
