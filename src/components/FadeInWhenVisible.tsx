import React, { useEffect } from 'react';
import { motion, useAnimation, Variant } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Props {
  visible: Variant;
  hidden: Variant;
  duration?: number;
  children: React.ReactNode;
}

const FadeInWhenVisible = ({
  children,
  visible,
  hidden,
  duration = 0.3,
}: Props) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration }}
      variants={{
        visible,
        hidden,
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInWhenVisible;
