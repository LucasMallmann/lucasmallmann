import React from 'react';
import Link from 'next/link';
import classNames from 'classnames';

const Footer = () => {
  return (
    <div
      className={classNames(
        'max-w-2xl mx-auto w-full mt-8 border-solid border-t border-gray-200',
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
          href="/#about"
          className="text-md mb-3 dark:text-gray-400 cursor-pointer hover:opacity-80 transition-opacity duration-200"
        >
          About
        </Link>
        <Link
          href="/blog"
          className="text-md mb-3 dark:text-gray-400 cursor-pointer hover:opacity-80 transition-opacity duration-200"
        >
          Blog
        </Link>
      </div>

      <div className="flex flex-col">
        <a
          href="https://github.com/lucasmallmann"
          className="text-md mb-3 dark:text-gray-400 cursor-pointer hover:opacity-80 transition-opacity duration-200"
          target="_blank"
        >
          Github
        </a>
        <a
          href="https://www.linkedin.com/in/lucas-mallmann-372745148/"
          className="text-md mb-3 dark:text-gray-400 cursor-pointer hover:opacity-80 transition-opacity duration-200"
          target="_blank"
        >
          Linkedin
        </a>
        <a
          href="https://twitter.com/lucasmallmann76"
          className="text-md mb-3 dark:text-gray-400 cursor-pointer hover:opacity-80 transition-opacity duration-200"
          target="_blank"
        >
          Twitter
        </a>
      </div>
    </div>
  );
};

export default Footer;
