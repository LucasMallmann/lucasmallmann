import classNames from 'classnames';

/**
 * Components
 */
import Techs from 'components/Techs';

import { NextPageWithLayout } from './_app';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Intro from 'components/Intro';
import Aboutme from 'components/Aboutme';
import WorkExperience from 'components/WorkExperience';

const Home: NextPageWithLayout = () => {
  return (
    <>
      <main className="overflow-hidden px-8">
        <div className="flex flex-col max-w-2xl mx-auto z-10 md:p-0">
          <Aboutme />

          <section className="mt-10">
            <h1 className="text-3xl tracking-wide leading-8 font-bold text-gray-800 mb-4 dark:text-gray-200">
              Work Experience
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <WorkExperience
                href="https://globo.com"
                className="from-[#D8B4FE] to-[#818CF8]"
              >
                <WorkExperience.Title>Globo.com</WorkExperience.Title>
                <WorkExperience.Description>
                  FullStack Developer
                </WorkExperience.Description>
                <WorkExperience.Content>
                  I work as a software developer for the third most visited
                  website in Brazil. I work improving ADs performance,
                  webvitals, and AB Testing for new features. I work with the
                  editor's app integration for the website. Globo.com has more
                  than 17 million pageviews everyday.
                </WorkExperience.Content>
                <WorkExperience.Tags
                  tags={[
                    'Javascript',
                    'Scss',
                    'Performance',
                    'Webvitals',
                    'Node.js',
                    'React',
                  ]}
                />
              </WorkExperience>
              <WorkExperience
                className="from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]"
                href="https://dora.pro/br/comunidade?page=1"
              >
                <WorkExperience.Title>Pling</WorkExperience.Title>
                <WorkExperience.Description>
                  FullStack Developer
                </WorkExperience.Description>
                <WorkExperience.Content>
                  Worked implementing PWA for more than ten web apps,
                  implementing real-time and push notification services for
                  them. Besides, I developed offline support, and also was
                  responsible for the teams's web api.
                </WorkExperience.Content>
                <WorkExperience.Tags
                  tags={['Nextjs', 'Typescript', 'Node.js', 'Mongodb', 'React']}
                />
              </WorkExperience>
              <WorkExperience
                className="from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]"
                href="https://codeleap.co.uk/"
              >
                <WorkExperience.Title>Codeleap</WorkExperience.Title>
                <WorkExperience.Description>
                  Mobile Developer
                </WorkExperience.Description>
                <WorkExperience.Content>
                  Worked on various projects, developing dark theme support for
                  Bereable.app. Implemented a market place for small products.
                </WorkExperience.Content>
                <WorkExperience.Tags
                  tags={[
                    'Typescript',
                    'React Native',
                    'Node.js',
                    'Redux',
                    'Styled Components',
                  ]}
                />
              </WorkExperience>
              <WorkExperience
                className="from-red-400  via-yellow-400 to-orange-400"
                href="https://www.climatempo.com.br/"
              >
                <WorkExperience.Title>Climatempo</WorkExperience.Title>
                <WorkExperience.Description>
                  Junior Developer
                </WorkExperience.Description>
                <WorkExperience.Content>
                  Responsible for implementing a forest fire history search in
                  the SMAC system, which is used by large clients in order to
                  receive meteorolical alerts.
                </WorkExperience.Content>
                <WorkExperience.Tags
                  tags={['PHP 7', 'Node.js', 'Fastify', 'Microservices']}
                />
              </WorkExperience>
              <WorkExperience
                className="from-teal-500  to-yellow-500"
                href="https://www.cptec.inpe.br/"
              >
                <WorkExperience.Title>INPE</WorkExperience.Title>
                <WorkExperience.Description>
                  Internship
                </WorkExperience.Description>
                <WorkExperience.Content>
                  Worked developing a scientifc article, which was published on
                  2017. Developed a workflow where the meteorological data was
                  processed using just python instead of Fortran.
                </WorkExperience.Content>
                <WorkExperience.Tags
                  tags={['PHP 7', 'Node.js', 'Fastify', 'Microservices']}
                />
              </WorkExperience>
            </div>
          </section>

          <section className="mt-10">
            <h1 className="text-3xl tracking-wide leading-8 font-bold text-gray-800 dark:text-gray-200">
              My Skills
            </h1>

            <p className="mt-4 dark:text-gray-300">
              These are some of the tools & languages I'm confortable with.
            </p>

            <div className="mt-5">
              <Techs />
            </div>
          </section>

          <section className="mt-16 px-2 md:px-0">
            <h1 className="text-3xl tracking-wide leading-8 text-center font-bold text-gray-800 dark:text-gray-200">
              Let's build together!
              <span role="img" aria-label="">
                😁
              </span>
            </h1>

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
          </section>
        </div>
      </main>
    </>
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
        <style jsx>{`
          .custom-shape-divider-bottom-1672704025 {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            overflow: hidden;
            line-height: 0;
            transform: rotate(180deg);
          }

          .custom-shape-divider-bottom-1672704025 svg {
            position: relative;
            display: block;
            width: calc(100% + 1.3px);
            height: 74px;
          }
        `}</style>
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
