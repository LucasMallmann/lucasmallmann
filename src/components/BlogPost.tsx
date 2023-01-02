import { HiOutlineTag } from 'react-icons/hi';
import Link from 'next/link';

type Props = {
  title: string;
  date: string;
  readingTime: number;
  description: string;
  tags: string[];
};

export default function BlogPost() {
  return (
    (<Link href={`/blog/example`} className="w-full">

      <div className="w-full mb-8">
        <h4 className="w-full text-lg font-medium text-purple-500 md:text-xl">
          React, Angular ou Vue - Qual Framework JavaScript escolheria hoje?
        </h4>
        <small className="w-32 my-2 text-left text-gray-600 dark:text-gray-500 md:text-right">
          21 de junho de 2021 · Leitura de 8 min
        </small>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          Os Frameworks JavaScript mais relevantes do mercado já tem alguns
          anos de vida e hoje podemos dizer que todos eles são muito bons e
          passaram com tranquilidade no filtro do tempo.
        </p>

        <div className="flex items-center mt-2">
          <HiOutlineTag
            size={16}
            className="text-gray-800 dark:text-gray-400"
          />
          <span className="ml-2 text-gray-800 dark:text-gray-400">
            stack, framework, javascript
          </span>
        </div>
      </div>

    </Link>)
  );
}
