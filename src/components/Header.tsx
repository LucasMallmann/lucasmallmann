import React, { useEffect, useState } from 'react';
import NextLink from 'next/link';
import { useTheme } from 'next-themes';

const Header: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);

  return (
    <div className="bg-white w-screen h-14 top-0 -left-0 m-0 fixed z-10 border-b border-gray-300 dark:bg-gray-750 dark:border-gray-750">
      <div className="flex justify-between items-center max-w-5xl m-auto h-full">
        <NextLink href="/">
          <div className="flex items-center cursor-pointer">
            <h1 className="ml-2 text-xl font-semibold dark:text-gray-100">
              Lucas Mallmann
            </h1>
          </div>
        </NextLink>

        <nav className="flex items-center">
          <NextLink href="/">
            <span className="mx-1 text-md dark:text-gray-100 cursor-pointer hover:opacity-80 transition-opacity duration-200">
              Blog
            </span>
          </NextLink>
          <NextLink href="/">
            <span className="mx-1 text-md dark:text-gray-100 cursor-pointer hover:opacity-80 transition-opacity duration-200">
              Projects
            </span>
          </NextLink>
          <button
            aria-label="Toggle Dark Mode"
            type="button"
            className="rounded p-2 h-8 w-8 focus:outline-none"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            {mounted && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-4 w-4 text-gray-800 dark:text-gray-200"
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
  );
};

export default Header;
