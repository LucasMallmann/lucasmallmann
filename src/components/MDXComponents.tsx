import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { BiLink } from 'react-icons/bi';

const MDXComponents = {
  Image,
  Link,
  MotionImage: motion.img,
  MotionFigure: motion.figure,
  LinkIcon: BiLink,
};

export default MDXComponents;
