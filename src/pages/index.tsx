import { useTheme } from 'next-themes';
import Image from 'next/image';
import { motion } from 'framer-motion';
import classNames from 'classnames';

/**
 * Components
 */
import Waves from 'components/Waves';
import FadeInWhenVisible from 'components/FadeInWhenVisible';
import Techs from 'components/Techs';
import Work from 'components/Work';

import { NextPageWithLayout } from './_app';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Intro from 'components/Intro';

const Home: NextPageWithLayout = () => {
  const { theme } = useTheme();

  return (
    <main className="overflow-hidden px-8">
      <div className="flex flex-col max-w-3xl mx-auto z-10 md:p-0">
        <section className="mt-4 px-8 md:px-0">
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
};

Home.getLayout = (page) => {
  return (
    <>
      <div
        className={classNames(
          'z bg-gradient-to-b relative',
          'from-purple-500 to-purple-800 dark:from-gray-950 dark:via-gray-800 dark:to-gray-700 pb-20'
        )}
      >
        <Header />
        <Intro />
        <div className="custom-shape-divider-bottom-1672704025">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill fill-gray-50 dark:fill-gray-900"
            />
          </svg>
        </div>
      </div>
      {page}
      <Footer />
    </>
  );
};

export default Home;
