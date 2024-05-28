import LogoGithub from '@carbon/icons-react/lib/LogoGithub';
import LogoInstagram from '@carbon/icons-react/lib/LogoInstagram';
import LogoLinkedin from '@carbon/icons-react/lib/LogoLinkedin';
import LogoTwitter from '@carbon/icons-react/lib/LogoTwitter';
import LogoYoutube from '@carbon/icons-react/lib/LogoYoutube';
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

const PLATFORMS: Record<Platform, PlatformInfo> = {
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
  //   console.log("props.platform prop", props.platform);
  //   console.log("platformInfo", platformInfo);
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

{
  /* <a
  href={href}
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center p-1 w-full rounded-md hover:scale-105 transition-all bg-gray-100 mb-3 max-w-3xl"
>
  <div className="flex text-center w-full">
    <div className="w-10 h-10">
      {image && (
        <Image
          className="rounded-sm"
          alt={title}
          src={image}
          width={40}
          height={40}
        />
      )}
    </div>
    <h2 className="flex justify-center items-center font-semibold w-full text-gray-700 -ml-10">
      {title}
    </h2>
  </div>
</a>; */
}
