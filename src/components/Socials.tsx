import React, { ReactNode } from "react";
// import { FaInstagram, FaRegEnvelope } from "react-icons/fa";
// import { FiTwitter, FiLinkedin, FiGithub } from "react-icons/fi";
import LogoYoutube from "@carbon/icons-react/lib/LogoYoutube";
import LogoTwitter from "@carbon/icons-react/lib/LogoTwitter";
import LogoLinkedin from "@carbon/icons-react/lib/LogoLinkedin";
import LogoGithub from "@carbon/icons-react/lib/LogoGithub";
import LogoInstagram from "@carbon/icons-react/lib/LogoInstagram";

export enum Platform {
  Github = "github",
  Linkedin = "linkedin",
  Twitter = "twitter",
  Instagram = "instagram",
  Youtube = "youtube",
}

interface PlatformInfo {
  icon: ReactNode;
  linkText: string;
}

const PLATFORMS: Record<Platform, PlatformInfo> = {
  [Platform.Github]: {
    icon: <LogoGithub size={32} />,
    linkText: "https://www.github.com/harshasomisetty",
  },
  [Platform.Linkedin]: {
    icon: <LogoLinkedin size={32} />,
    linkText: "https://www.linkedin.com/in/harshasomisetty",
  },
  [Platform.Twitter]: {
    icon: <LogoTwitter size={32} />,
    linkText: "https://www.twitter.com/HarshaSomisetty",
  },
  [Platform.Instagram]: {
    icon: <LogoInstagram size={32} />,
    linkText: "https://www.instagram.com/harshasomisetty",
  },
  [Platform.Youtube]: {
    icon: <LogoYoutube size={32} />,
    linkText: "https://www.youtube.com/@harshasomisetty",
  },
};

interface Props {
  platform: Platform;
}

export const SocialLink = (props: Props) => {
  const platformInfo = PLATFORMS[props.platform];
  //   console.log("props.platform prop", props.platform);
  //   console.log("platformInfo", platformInfo);
  return <a href={platformInfo.linkText}>{platformInfo.icon}</a>;
};
