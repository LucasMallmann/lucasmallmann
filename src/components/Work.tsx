import { MdOutlineLocationOn } from 'react-icons/md';
import { RiCalendarLine, RiNewspaperLine } from 'react-icons/ri';

type Props = {
  jobTitle: string;
  company: string;
  location: string;
  period: string;
  children: React.ReactNode
};

export default function Work({ jobTitle, company, location, period, children }: Props) {
  return (
    <div>
      <div className="flex md:flex md:justify-between md:items-end md:flex-row">
        <h3 className="flex-1 text-xl font-medium text-gray-600 dark:text-gray-200">
          {jobTitle}
        </h3>
        <span className="capitalize text-sm font-medium inline-block px-4 py-2 bg-emerald-300 rounded-3xl flex-none">
          full time
        </span>
      </div>

      <p className='mt-2 text-gray-600 leading-7 dark:text-gray-300'>{children}</p>
      <div className="flex flex-row justify-between items-center mt-2 text-gray-400">
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

        <div className="flex items-center">
          <RiCalendarLine size={16} />
          <small className="ml-1 font-medium">{period}</small>
        </div>
      </div>
    </div>
  );
}
