import React from 'react';
import { HStack, Icon, Text } from '@chakra-ui/react';
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
      <Text as="span">Compartilhe!</Text>
      <HStack marginTop={2}>
        <TwitterShareButton url={window.location.href}>
          <Icon
            as={TwitterIcon}
            width={5}
            height={5}
            borderRadius={50}
            transition="opacity 0.2s ease-in-out"
            _hover={{ opacity: 0.8 }}
          />
        </TwitterShareButton>
        <LinkedinShareButton url={window.location.href}>
          <Icon
            as={LinkedinIcon}
            width={5}
            height={5}
            borderRadius={50}
            transition="opacity 0.2s ease-in-out"
            _hover={{ opacity: 0.8 }}
          />
        </LinkedinShareButton>
        <TelegramShareButton url={window.location.href}>
          <Icon
            as={TelegramIcon}
            width={5}
            height={5}
            borderRadius={50}
            transition="opacity 0.2s ease-in-out"
            _hover={{ opacity: 0.8 }}
          />
        </TelegramShareButton>
        <FacebookShareButton url={window.location.href}>
          <Icon
            as={FacebookIcon}
            width={5}
            height={5}
            borderRadius={50}
            transition="opacity 0.2s ease-in-out"
            _hover={{ opacity: 0.8 }}
          />
        </FacebookShareButton>
        <WhatsappShareButton url={window.location.href}>
          <Icon
            as={WhatsappIcon}
            width={5}
            height={5}
            borderRadius={50}
            transition="opacity 0.2s ease-in-out"
            _hover={{ opacity: 0.8 }}
          />
        </WhatsappShareButton>
      </HStack>
    </>
  );
};

export default SocialMediaShare;
