import { motion } from 'framer-motion';

const Aboutme = () => {
  return (
    <section className="mt-4" id="about">
      <motion.h1
        className="text-3xl leading-8 font-bold text-gray-800 mt-6 dark:text-gray-300"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            x: '-18px',
            opacity: 0,
          },
          visible: {
            x: 0,
            opacity: 1,
            transition: {
              delay: 0.6,
            },
          },
        }}
      >
        About me
      </motion.h1>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            x: '-18px',
            opacity: 0,
          },
          visible: {
            x: 0,
            opacity: 1,
            transition: {
              delay: 0.8,
            },
          },
        }}
      >
        <motion.p className="text-gray-700 leading-7 mt-4 dark:text-gray-300">
          Hello, welcome to my blog! My name is Lucas Mallmann. I've been
          working as a software engineer since 2017. I believe that education,
          the dissemination of knowledge and good ideas, is the fastest and most
          effective way to improve the world!
        </motion.p>
        <motion.p className="text-gray-700 leading-7 mt-4 dark:text-gray-300">
          I currently work as a Software Developer at Globo. I started
          programming in the year 2016, and my interest in the world of
          development is only increasing every day! I always try to learn and
          apply new technologies, which is one of the reasons why I built this
          blog, because I believe that the best way to learn is to teach.
        </motion.p>
        <motion.p className="text-gray-700 leading-7 mt-4 dark:text-gray-300">
          I like music a lot, am passionate about games, an adventurer in
          cooking, and in my free time I love to philosophize about life.
          Despite being a technology-oriented blog, don't be surprised if we
          bring some reflections here.
        </motion.p>
        <motion.p className="text-gray-700 leading-7 mt-4 dark:text-gray-300">
          Many dreams and goals of mine were born out of online resources I
          found about technology. I believe it's my duty, and I'll be extremely
          happy if I can repay you a little of that learning and what brought me
          here! #keepgoing.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Aboutme;
