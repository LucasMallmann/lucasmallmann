import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const SeeAlsoProject: React.FC = () => {
  return (
    <div className="w-full">
      <figure className="w-full cursor-pointer">
        <Link href="/">
          <Image
            src="/static/projects/nuts.jpg"
            width={500}
            height={340}
            alt="projeto 02"
          />
        </Link>
      </figure>

      <h3 className="text-2xl font-bold text-center mt-2 tracking-wider dark:text-gray-200">
        Decore
      </h3>

      <p className="text-md leading-relaxed font-regular text-center dark:text-gray-100">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti porro
        suscipit amet necessitatibus tenetur.
      </p>
      <Link
        href="/projetos/primeiro-projeto"
        className="block bg-purple-500 w-full text-white text-base font-semibold px-6 py-2 rounded-lg mt-6 hover:bg-purple-600 transition-color duration-200 text-center"
      >
        See project
      </Link>
    </div>
  );
};

export default SeeAlsoProject;
