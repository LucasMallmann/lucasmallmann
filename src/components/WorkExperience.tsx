import classNames from 'classnames';
import { ReactNode } from 'react';

type Props = {
  href: string;
  className?: string;
  children: ReactNode;
};

const WorkExperience = ({ href, className, children }: Props) => {
  return (
    <a
      className={classNames(
        'block transform hover:scale-[1.01] transition-all rounded-xl w-full',
        `bg-gradient-to-r p-1 cursor-pointer`,
        className
      )}
      href={href}
    >
      <div className="flex flex-col justify-between h-full bg-white dark:bg-gray-900 rounded-lg p-4">
        {children}
      </div>
    </a>
  );
};

const Title = ({ children }) => {
  return (
    <h3 className="text-xl font-semibold w-full text-gray-900 dark:text-gray-100 tracking-tight">
      {children}
    </h3>
  );
};

const Description = ({ children }) => {
  return <h4 className="text-lg">{children}</h4>;
};

const Content = ({ children }) => {
  return <p className="mt-2">{children}</p>;
};

const Tags = ({ tags }: { tags: string[] }) => {
  return (
    <ul className="flex items-center gap-2 mt-10 w-full flex-wrap">
      {tags.map((tag) => (
        <li
          key={tag}
          className={classNames(
            'text-xs transition-all text-gray-900 dark:text-gray-100',
            'rounded-lg py-1 px-2 bg-gray-100 dark:bg-gray-800'
          )}
        >
          <span>{tag}</span>
        </li>
      ))}
    </ul>
  );
};

WorkExperience.Title = Title;
WorkExperience.Description = Description;
WorkExperience.Content = Content;
WorkExperience.Tags = Tags;

export default WorkExperience;
