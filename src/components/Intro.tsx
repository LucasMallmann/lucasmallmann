import classNames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';

const Intro = () => {
  const { t } = useTranslation('home');

  return (
    <div
      className={classNames(
        'flex flex-col items-center md:px-0 md:flex-row-reverse md:justify-between',
        'max-w-3xl mx-auto'
      )}
    >
      <div>
        <div className="border-green-500 border-4 rounded-full relative w-44 h-44 dark:border-purple-500">
          <Image
            className="round-image"
            alt="Lucas Mallmann"
            src="/me.jpeg"
            priority
            width={168}
            height={168}
          />
        </div>
      </div>
      <h1
        className={classNames(
          'text-2xl md:tracking-wide text-center sm:text-left',
          'font-semibold text-gray-200 mt-4 md:ml-10 md:w-10/12 md:px-0 md:text-4xl',
          'px-2 sm:px-8'
        )}
      >
        {t('description.initial')} {` `}
        <span className="text-green-500">Developer</span>
        {` `}
        {t('description.final')}
      </h1>
    </div>
  );
};

export default Intro;
