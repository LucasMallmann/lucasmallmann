import Link from 'next/link';
import Image from 'next/image';

// const CustomLink: React.FC<LinkProps> = ({ href }) => {

//   const isInternalLink =
//     href.toString().startsWith('/') || href.toString().startsWith('#');

//   if (isInternalLink) {
//     return (
//       <Link href={href}>
//         <a {...props} />
//       </Link>
//     );
//   }

//   return <a target="_blank" rel="noopener noreferrer" {...props} />;
// };

const MDXComponents = {
  Image,
  Link,
};

export default MDXComponents;
