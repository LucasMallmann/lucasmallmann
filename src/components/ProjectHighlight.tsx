import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface Props {
  firstImage: string;
  secondImage: string;
  thirdImage: string;
}

const ProjectHightlight: React.FC<Props> = ({
  firstImage,
  secondImage,
  thirdImage,
}) => {
  return (
    <div className="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2">
      <div className="relative z-10 col-start-1 pt-48 row-start-1 px-4 pb-3 bg-gradient-to-t from-gray-750 sm:bg-none md:pt-0">
        <p className="text-sm font-medium text-white sm:mb-1 sm:text-gray-500 dark:text-gray-400">
          Entire house
        </p>
        <Link href="/projetos/primeiro-projeto">
          <a>
            <motion.h1 className="text-xl font-semibold text-white cursor-pointer sm:text-2xl sm:leading-7 sm:text-black md:text-3xl dark:text-gray-100 hover:opacity-80 transition-opacity duration-200">
              Beach House in Collingwood
            </motion.h1>
          </a>
        </Link>
      </div>
      <div className="col-start-1 row-start-2 md:pb-0 md:px-4">
        <div className="flex items-center text-sm font-medium my-5 sm:mt-2 sm:mb-4 dark:text-gray-200">
          <div>Collingwood, Ontario</div>
        </div>
        <hr className="w-16 border-gray-300 hidden sm:block" />
        <p className="mt-4 text-base dark:text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, hic
          quia doloremque soluta impedit alias consectetur labore voluptatibus
          beatae quidem deserunt, dolor facilis sunt harum!
        </p>
      </div>
      <div className="col-start-1 row-start-1 flex sm:col-start-2 sm:row-span-3">
        <div className="w-full grid grid-cols-3 grid-rows-2 gap-2">
          <motion.figure className="relative col-span-3 row-span-2 md:col-span-2 cursor-pointer">
            <Link href="/projetos/primeiro-projeto">
              <a>
                <Image
                  src={firstImage}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover bg-gray-100 sm:rounded-lg hover:scale-50"
                  layout="fill"
                  objectFit="cover"
                />
              </a>
            </Link>
          </motion.figure>
          <motion.figure className="relative hidden md:block cursor-pointer">
            <Link href="/">
              <a>
                <Image
                  src={secondImage}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover rounded-lg bg-gray-100 "
                  layout="fill"
                  objectFit="cover"
                />
              </a>
            </Link>
          </motion.figure>
          <motion.figure className="relative hidden cursor-pointer md:block">
            <Link href="/">
              <a>
                <Image
                  src={thirdImage}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover rounded-lg bg-gray-100"
                  layout="fill"
                  objectFit="cover"
                />
              </a>
            </Link>
          </motion.figure>
        </div>
      </div>
      <Link href="/projetos/primeiro-projeto">
        <a className="bg-purple-500 w-full text-white text-base font-semibold px-6 py-2 rounded-lg mt-4 md:ml-4 md:w-56 hover:bg-purple-600 transition-color duration-200 text-center">
          Check availability
        </a>
      </Link>
    </div>
  );
};

export default ProjectHightlight;
