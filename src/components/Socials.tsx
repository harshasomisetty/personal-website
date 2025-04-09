import {
  LogoGithub,
  LogoInstagram,
  LogoLinkedin,
  LogoX,
  LogoYoutube,
} from '@carbon/icons-react';
import { ReactNode } from 'react';

export enum Platform {
  Github = 'github',
  Linkedin = 'linkedin',
  X = 'x',
  Instagram = 'instagram',
  Youtube = 'youtube',
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
  [Platform.X]: {
    icon: <LogoX size={32} />,
    linkText: 'https://www.x.com/HarshaSomisetty',
    title: 'X',
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
};

interface Props {
  platform: Platform;
}

export function SocialLink(props: Props) {
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
}
