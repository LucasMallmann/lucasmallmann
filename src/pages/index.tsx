import { useTheme } from 'next-themes';
import Image from 'next/image';
import { motion } from 'framer-motion';

/**
 * Components
 */
import Waves from 'components/Waves';
import FadeInWhenVisible from 'components/FadeInWhenVisible';
import Techs from 'components/Techs';
import Work from 'components/Work';
import classNames from 'classnames';

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

export default function Home() {
  const { theme } = useTheme();

  return (
    <main className="overflow-hidden">
      <div
        className={classNames(
          'h-72 w-full z-0 bg-gradient-to-b',
          'from-purple-500 to-purple-800 dark:from-gray-950 dark:via-gray-800 dark:to-gray-700',
          'absolute inset-0 z-0'
        )}
      ></div>

      <div className="flex flex-col max-w-3xl mx-auto relative z-10 mt-10 md:p-0">
        <div className="flex flex-col items-center px-8 md:px-0 md:flex-row-reverse md:justify-between">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={animationProps}
          >
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
            className="text-2xl relative md:tracking-wide font-bold text-gray-800 md:text-gray-200 mt-4 dark:text-gray-100 md:ml-10 md:w-10/12 md:px-0 md:text-4xl"
            initial="hidden"
            animate="visible"
            variants={animationProps}
          >
            Hi there, I’m Lucas. Front End{' '}
            <span className="text-green-500">Developer</span>, Student, Lorem,
            ipsum dolor..
          </motion.h1>
        </div>
        <section className="mt-4 md:mt-16 px-8 md:px-0">
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
            Sobre mim
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              at culpa voluptates cumque illo quia, blanditiis nam, tempore
              explicabo tenetur odio esse exercitationem vel in a illum eveniet
              reiciendis! Dolorem omnis veritatis id, repudiandae harum
              dignissimos iusto cupiditate sed assumenda!
            </motion.p>
            <motion.p className="text-gray-700 leading-7 mt-4 dark:text-gray-300">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Expedita, repellat minima inventore error velit illum, ducimus
              tenetur nesciunt et aliquam, quos quia mollitia incidunt harum
              fugit! Ipsam officia vel, deleniti adipisci odit nisi. Et ipsam
              natus facere harum voluptatibus ex consequatur, sunt voluptate,
              accusantium, quia ipsa fugit enim eligendi. Nostrum molestias,
              earum facilis nam voluptates consectetur atque doloremque
              obcaecati quam possimus incidunt repellat enim libero voluptatibus
              fugit perspiciatis quod pariatur ex laudantium eius delectus. Qui
              nihil adipisci consequuntur facere distinctio commodi, maiores a
              laboriosam tempora est quam harum sapiente mollitia voluptas
              dolorum!
            </motion.p>
          </motion.div>
        </section>

        <section className="mt-10 px-8 md:px-0">
          <h1 className="text-3xl tracking-wide leading-8 font-bold text-gray-800 mb-4 dark:text-gray-200">
            Work Experience
          </h1>

          <Work
            jobTitle="Senior Front End Developer"
            company="Apple Inc."
            location="São Paulo - BR"
            period="April, 2022 - current"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            laborum fugit labore, numquam id rerum blanditiis non iusto
            provident delectus! Sint quaerat neque, enim rem aspernatur debitis
            consequuntur porro veritatis. id rerum blanditiis non iusto
            provident delectus! Sint quaerat neque, enim rem aspernatur debitis
            consequuntur porro veritatis. id rerum blanditiis non iusto
            provident delectus! Sint quaerat neque, enim rem aspernatur debitis
            consequuntur porro veritatis.
          </Work>

          <hr className="my-4 dark:border-gray-500" />

          <Work
            jobTitle="Senior Front End Developer"
            company="Apple Inc."
            location="São Paulo - BR"
            period="April, 2022 - current"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            laborum fugit labore, numquam id rerum blanditiis non iusto
            provident delectus! Sint quaerat neque, enim rem aspernatur debitis
            consequuntur porro veritatis. id rerum blanditiis non iusto
            provident delectus! Sint quaerat neque, enim rem aspernatur debitis
            consequuntur porro veritatis. id rerum blanditiis non iusto
            provident delectus! Sint quaerat neque, enim rem aspernatur debitis
            consequuntur porro veritatis.
          </Work>

          <hr className="my-4 dark:border-gray-500" />

          <Work
            jobTitle="Senior Front End Developer"
            company="Apple Inc."
            location="São Paulo - BR"
            period="April, 2022 - current"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            laborum fugit labore, numquam id rerum blanditiis non iusto
            provident delectus! Sint quaerat neque, enim rem aspernatur debitis
            consequuntur porro veritatis. id rerum blanditiis non iusto
            provident delectus! Sint quaerat neque, enim rem aspernatur debitis
            consequuntur porro veritatis. id rerum blanditiis non iusto
            provident delectus! Sint quaerat neque, enim rem aspernatur debitis
            consequuntur porro veritatis.
          </Work>

          <hr className="my-4 dark:border-gray-500" />

          <Work
            jobTitle="Senior Front End Developer"
            company="Apple Inc."
            location="São Paulo - BR"
            period="April, 2022 - current"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            laborum fugit labore, numquam id rerum blanditiis non iusto
            provident delectus! Sint quaerat neque, enim rem aspernatur debitis
            consequuntur porro veritatis. id rerum blanditiis non iusto
            provident delectus! Sint quaerat neque, enim rem aspernatur debitis
            consequuntur porro veritatis. id rerum blanditiis non iusto
            provident delectus! Sint quaerat neque, enim rem aspernatur debitis
            consequuntur porro veritatis.
          </Work>
        </section>

        <FadeInWhenVisible
          visible={{ x: 0, opacity: 1, transition: { delay: 0.4 } }}
          hidden={{ x: '-18px', opacity: 0 }}
        >
          <motion.section className="mt-10 px-8 md:px-0">
            <motion.h1 className="text-3xl tracking-wide leading-8 font-bold text-gray-800 dark:text-gray-200">
              My Skills
            </motion.h1>

            <p className="mt-4 dark:text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              amet consequuntur nisi. Explicabo eos cumque voluptas aperiam
              laudantium nisi! Commodi.
            </p>

            <div className="mt-8 md:mt-12">
              <Techs />
            </div>
          </motion.section>
        </FadeInWhenVisible>

        <FadeInWhenVisible
          visible={{ x: 0, opacity: 1, transition: { delay: 0.4 } }}
          hidden={{ x: '-18px', opacity: 0 }}
        >
          <motion.section className="mt-16 px-2 md:px-0">
            <motion.h1 className="text-3xl tracking-wide leading-8 text-center font-bold text-gray-800 dark:text-gray-200">
              Vamos construir juntos{' '}
              <span role="img" aria-label="">
                😁
              </span>
            </motion.h1>

            <p className="mt-4 text-center text-md md:text-lg leading-8 dark:text-gray-300">
              Feel free to reach out if you are looking for a developer, have a
              question, or just want to connect.
            </p>

            <a
              href="mailto:lucasmallmann76@gmail.com"
              className="block mt-6 font-bold text-center text-lg text-purple-500 dark:text-green-500"
            >
              lucasmallmann76@gmail.com
            </a>
          </motion.section>
        </FadeInWhenVisible>
      </div>
    </main>
  );
}
