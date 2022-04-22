import React, { useEffect, useState } from 'react';
import NextLink from 'next/link';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/dist/client/router';
import cn from 'classnames';

function NavItem({ href, text, isHomePage }) {
  const router = useRouter();
  const isActive = router.asPath === href;

  let classes = '';

  if (isActive) {
    classes = 'font-semibold text-gray-800 dark:text-gray-200';
  } else {
    classes = 'font-normal text-gray-600 dark:text-gray-400';
  }

  if (isHomePage) {
    classes = 'text-gray-100 dark:text-gray-100 font-bold p-1 sm:px-3 sm:py-2';
  }

  console.log(classes);

  return (
    <NextLink href={href}>
      <a
        className={cn(
          classes,
          !isHomePage &&
            'md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg md:hover:bg-gray-200 md:dark:hover:bg-gray-800 transition-all'
        )}
      >
        <span className="capsize">{text}</span>
      </a>
    </NextLink>
  );
}

const Header: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const router = useRouter();

  const isHomePage = router.pathname === '/';

  useEffect(() => setMounted(true), []);

  const classes = isHomePage
    ? 'm-0 h-10 z-10 relative mt-8 max-w-4xl mx-auto'
    : 'sticky-nav h-10 mt-8 max-w-4xl mx-auto bg-opacity-60';

  return (
    <>
      <div className={classes}>
        <div className="flex relative justify-between md:justify-start items-center max-w-5xl h-10 m-auto px-4">
          <NextLink href="/">
            <a>
              <strong
                className={`text-lg ${
                  isHomePage && 'text-gray-200'
                } dark:text-gray-300 leading-10`}
              >
                Lucas Mallmann
              </strong>
            </a>
          </NextLink>

          <nav className="flex justify-between items-center md:ml-4 flex-1">
            <div className="flex items-center ml-4">
              <NavItem href={'/blog'} text="Blog" isHomePage={isHomePage} />
              <NavItem
                href={'/projects'}
                text="Projects"
                isHomePage={isHomePage}
              />
            </div>

            <button
              aria-label="Toggle Dark Mode"
              type="button"
              className="rounded p-2 h-8 w-8"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              {mounted && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className={`h-5 w-5 ${
                    isHomePage && 'text-gray-200'
                  } dark:text-gray-300 -mt-1 md:mt-0`}
                >
                  {theme === 'dark' ? (
                    <path
                      fillRule="evenodd"
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                      clipRule="evenodd"
                    />
                  ) : (
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  )}
                </svg>
              )}
            </button>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
