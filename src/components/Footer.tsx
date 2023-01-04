import React from 'react';
import Link from 'next/link';
import classNames from 'classnames';

const Footer = () => {
  return (
    <div
      className={classNames(
        'max-w-3xl mx-auto w-full mt-8 border-solid border-t border-gray-200',
        'py-5 px-8 dark:border-gray-600 md:grid gap-4 grid-cols-3 md:px-0'
      )}
    >
      <div className="flex flex-col">
        <Link
          href="/"
          className="text-md mb-3 dark:text-gray-400 cursor-pointer hover:opacity-80 transition-opacity duration-200"
        >
          Home
        </Link>
        <Link
          href="/"
          className="text-md mb-3 dark:text-gray-400 cursor-pointer hover:opacity-80 transition-opacity duration-200"
        >
          Sobre
        </Link>
        <Link
          href="/"
          className="text-md mb-3 dark:text-gray-400 cursor-pointer hover:opacity-80 transition-opacity duration-200"
        >
          Blog
        </Link>
      </div>

      <div className="flex flex-col">
        <a
          href="/"
          className="text-md mb-3 dark:text-gray-400 cursor-pointer hover:opacity-80 transition-opacity duration-200"
        >
          Github
        </a>
        <a
          href="/"
          className="text-md mb-3 dark:text-gray-400 cursor-pointer hover:opacity-80 transition-opacity duration-200"
        >
          Linkedin
        </a>
        <a
          href="/"
          className="text-md mb-3 dark:text-gray-400 cursor-pointer hover:opacity-80 transition-opacity duration-200"
        >
          Twitter
        </a>
      </div>
    </div>
  );
};

export default Footer;
