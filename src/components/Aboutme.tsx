import useTranslation from 'next-translate/useTranslation';

const Aboutme = () => {
  const { t } = useTranslation('home');

  return (
    <section className="mt-4" id="about">
      <h1 className="text-3xl leading-8 font-bold text-gray-800 mt-6 dark:text-gray-300">
        {t('about.title')}
      </h1>
      <div>
        <p className="text-gray-700 leading-7 mt-4 dark:text-gray-300">
          {t('about.first')}
        </p>
        <p className="text-gray-700 leading-7 mt-4 dark:text-gray-300">
          {t('about.second')}
        </p>
        <p className="text-gray-700 leading-7 mt-4 dark:text-gray-300">
          {t('about.third')}
        </p>
        <p className="text-gray-700 leading-7 mt-4 dark:text-gray-300">
          {t('about.fourth')}
        </p>
      </div>
    </section>
  );
};

export default Aboutme;
