import classNames from 'classnames';
import { useRouter } from 'next/router';

const LangSwitcher = () => {
  const router = useRouter();

  const handleLanguageChange = (e) => {
    const selectedLanguage = e.target.value;
    router.push(router.pathname, router.asPath, { locale: selectedLanguage });
  };

  const languageOptions = [
    { label: 'English', lang: 'en', flag: '🇺🇸' },
    { label: 'Português', lang: 'pt-BR', flag: '🇧🇷' },
  ];

  return (
    <select
      className={classNames(
        'bg-white border border-gray-300 px-3 py-2 rounded-md text-gray-900',
        'dark:border-gray-900 text-sm',
        'focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-gray-100'
      )}
      onChange={handleLanguageChange}
      value={router.locale}
    >
      {languageOptions.map((option, index) => (
        <option key={index} value={option.lang}>
          {option.flag} {option.label}
        </option>
      ))}
    </select>
  );
};

export default LangSwitcher;
