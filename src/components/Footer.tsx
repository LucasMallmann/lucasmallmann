import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto mt-8 border-solid border-t border-gray-200 py-5 px-8 dark:border-gray-600 md:grid gap-4 grid-cols-3 md:px-0">
      <div className="flex flex-col">
        <Link href="/">
          <a className="text-md mb-3 dark:text-gray-400 cursor-pointer hover:opacity-80 transition-opacity duration-200">
            Home
          </a>
        </Link>
        <Link href="/">
          <a className="text-md mb-3 dark:text-gray-400 cursor-pointer hover:opacity-80 transition-opacity duration-200">
            Sobre
          </a>
        </Link>
        <Link href="/">
          <a className="text-md mb-3 dark:text-gray-400 cursor-pointer hover:opacity-80 transition-opacity duration-200">
            Blog
          </a>
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
