import React from 'react';
import { Icon } from '@chakra-ui/react';
import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  TelegramShareButton,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  LinkedinIcon,
  TelegramIcon,
  WhatsappIcon,
} from 'react-share';

const SocialMediaShare: React.FC = () => {
  return (
    <>
      <span className="text-md dark:text-gray-100">Compartilhe!</span>
      <div className="mt-2 flex">
        <TwitterShareButton url={window.location.href} className="w-5 h-5">
          <TwitterIcon className="w-5 h-5 rounded-full hover:opacity-80 transition-opacity duration-200" />
        </TwitterShareButton>
        <LinkedinShareButton
          url={window.location.href}
          className="w-5 h-5 ml-2"
        >
          <LinkedinIcon className="w-5 h-5 rounded-full hover:opacity-80 transition-opacity duration-200" />
        </LinkedinShareButton>
        <TelegramShareButton
          url={window.location.href}
          className="w-5 h-5 ml-2"
        >
          <TelegramIcon className="w-5 h-5 rounded-full hover:opacity-80 transition-opacity duration-200" />
        </TelegramShareButton>
        <FacebookShareButton
          url={window.location.href}
          className="w-5 h-5 ml-2"
        >
          <FacebookIcon className="w-5 h-5 rounded-full hover:opacity-80 transition-opacity duration-200" />
        </FacebookShareButton>
        <WhatsappShareButton
          url={window.location.href}
          className="w-5 h-5 ml-2"
        >
          <WhatsappIcon className="w-5 h-5 rounded-full hover:opacity-80 transition-opacity duration-200" />
        </WhatsappShareButton>
      </div>
    </>
  );
};

export default SocialMediaShare;
