import { MdOutlineLocationOn } from 'react-icons/md';
import { RiCalendarLine, RiNewspaperLine } from 'react-icons/ri';

type Props = {
  jobTitle: string;
  company: string;
  location: string;
  period: string;
  children: React.ReactNode;
};

export default function Work({
  jobTitle,
  company,
  location,
  period,
  children,
}: Props) {
  return (
    <div>
      <div className="flex items-start justify-start md:justify-between md:items-end md:flex-row">
        <h3 className="text-xl font-medium text-gray-600 dark:text-gray-200">
          {jobTitle}
        </h3>
        <span className="capitalize text-sm text-gray-700 dark:text-gray-800 font-medium px-2 min-w-fit py-2 bg-emerald-300 rounded-3xl">
          full time
        </span>
      </div>

      <p className="mt-2 text-gray-700 leading-7 dark:text-gray-300">
        {children}
      </p>
      <div className="flex flex-col  md:flex-row justify-between md:items-center mt-2 text-gray-400">
        <nav className="flex items-center">
          <RiNewspaperLine className="  dark:text-gray-400" size={16} />
          <small className="capitalize text-gray-400 font-medium ml-1">
            {company}
          </small>
          <MdOutlineLocationOn
            className="text-gray-400  dark:text-gray-400 ml-3"
            size={16}
          />
          <small className="capitalize text-gray-400 font-medium ml-1">
            {location}
          </small>
        </nav>

        <div className="flex items-center mt-2 md:mt-0">
          <RiCalendarLine size={16} />
          <small className="ml-1 font-medium">{period}</small>
        </div>
      </div>
    </div>
  );
}
