import React, { useState } from 'react';
import { IconType } from 'react-icons';
import {
  SiReact,
  SiNodeDotJs,
  SiJavascript,
  SiHtml5,
  SiNextDotJs,
  SiTypescript,
} from 'react-icons/si';
import { ImGit } from 'react-icons/im';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';

interface TechProps {
  tech: string;
  icon: IconType;
  activeIconColor?: string;
  alternativeDarkColor?: string;
}

const Tech: React.FC<TechProps> = ({
  tech,
  icon: Icon,
  activeIconColor,
  alternativeDarkColor,
}) => {
  const [isActive, setIsActive] = useState(false);
  const { theme } = useTheme();

  const iconColor =
    theme === 'dark' && isActive && alternativeDarkColor
      ? alternativeDarkColor
      : isActive && activeIconColor;

  return (
    <motion.div
      whileHover={{ scale: 1.2 }}
      className="p-3 flex items-center flex-col justify-center cursor-pointer hover:shadow"
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      <Icon
        className="mb-2 text-gray-600 transition transition-colors duration-200 ease-in-out dark:text-gray-400"
        size={32}
        color={iconColor || undefined}
      />
      <strong
        className="text-gray-600 text-sm capitalize md:text-md dark:text-gray-400"
        style={{ color: isActive && theme === 'dark' && '#F3F4F6' }}
      >
        {tech}
      </strong>
    </motion.div>
  );
};

const Techs: React.FC = () => {
  return (
    <section className="grid gap-4 grid-cols-2 md:grid-cols-4">
      <Tech tech="React" icon={SiReact} activeIconColor="#61dbfb" />
      <Tech tech="nodejs" icon={SiNodeDotJs} activeIconColor="#43853D" />
      <Tech tech="github" icon={ImGit} activeIconColor="#E94E32" />
      <Tech tech="React Native" icon={SiReact} activeIconColor="#61dbfb" />
      <Tech
        tech="Javascript ES6"
        icon={SiJavascript}
        activeIconColor="#EFD81D"
      />
      <Tech tech="HTML & CSS" icon={SiHtml5} activeIconColor="#EA6228" />
      <Tech
        tech="NextJS"
        icon={SiNextDotJs}
        activeIconColor="#000"
        alternativeDarkColor="#F3F4F6"
      />
      <Tech tech="Typescript" icon={SiTypescript} activeIconColor="#3074C0" />
    </section>
  );
};

export default Techs;
