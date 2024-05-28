import {
  LogoGithub,
  LogoInstagram,
  LogoLinkedin,
  LogoTwitter,
  LogoYoutube,
} from '@carbon/icons-react';
import { ReactNode } from 'react';
import { FaSpotify } from 'react-icons/fa';

export enum Platform {
  Github = 'github',
  Linkedin = 'linkedin',
  Twitter = 'twitter',
  Instagram = 'instagram',
  Youtube = 'youtube',
  Spotify = 'spotify',
}

interface PlatformInfo {
  icon: ReactNode;
  linkText: string;
  title: string;
}

export const PLATFORMS: Record<Platform, PlatformInfo> = {
  [Platform.Github]: {
    icon: <LogoGithub size={32} />,
    linkText: 'https://www.github.com/harshasomisetty',
    title: 'Github',
  },
  [Platform.Linkedin]: {
    icon: <LogoLinkedin size={32} />,
    linkText: 'https://www.linkedin.com/in/harshasomisetty',
    title: 'Linkedin',
  },
  [Platform.Twitter]: {
    icon: <LogoTwitter size={32} />,
    linkText: 'https://www.twitter.com/HarshaSomisetty',
    title: 'Twitter',
  },
  [Platform.Instagram]: {
    icon: <LogoInstagram size={32} />,
    linkText: 'https://www.instagram.com/harshasomisetty',
    title: 'Instagram',
  },
  [Platform.Youtube]: {
    icon: <LogoYoutube size={32} />,
    linkText: 'https://www.youtube.com/@harshasomisetty',
    title: 'Youtube',
  },
  [Platform.Spotify]: {
    icon: <FaSpotify size={32} />,
    linkText:
      'https://open.spotify.com/user/njz4vojmcht4ubqtqm95336le?si=fadf22c08fae475a',
    title: 'Spotify',
  },
};

interface Props {
  platform: Platform;
}

export const SocialLink = (props: Props) => {
  const platformInfo = PLATFORMS[props.platform];
  return (
    <a
      href={platformInfo.linkText}
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-md mb-3 border border-white transition-all hover:scale-105"
    >
      <div className="flex w-full items-center p-1">
        <div className="">{platformInfo.icon}</div>
        <h2 className="flex justify-center items-center w-full">
          {platformInfo.title}
        </h2>
      </div>
    </a>
  );
};
