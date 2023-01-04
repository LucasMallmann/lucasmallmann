import classNames from 'classnames';
import Image from 'next/image';
import { motion } from 'framer-motion';

const animationProps = {
  hidden: {
    y: '-18px',
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.4,
    },
  },
};

const Intro = () => {
  return (
    <div
      className={classNames(
        'flex flex-col items-center md:px-0 md:flex-row-reverse md:justify-between',
        'max-w-3xl mx-auto'
      )}
    >
      <motion.div initial="hidden" animate="visible" variants={animationProps}>
        <div className="border-green-500 border-4 rounded-full relative w-44 h-44 dark:border-purple-500">
          <Image
            className="round-image"
            alt="Lucas Mallmann"
            src="/me.jpeg"
            fill
          />
        </div>
      </motion.div>
      <motion.h1
        className={classNames(
          'text-2xl md:tracking-wide text-center sm:text-left',
          'font-semibold text-gray-200 mt-4 md:ml-10 md:w-10/12 md:px-0 md:text-4xl'
        )}
        initial="hidden"
        animate="visible"
        variants={animationProps}
      >
        Hi there, I’m Lucas. Full Stack {` `}
        <span className="text-green-500">Developer</span> from Brazil and a life
        learner.
      </motion.h1>
    </div>
  );
};

export default Intro;
