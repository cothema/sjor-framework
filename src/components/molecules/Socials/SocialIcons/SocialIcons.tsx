import React, {FC} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookSquare, faInstagram, faLinkedin, faSpotify, faYoutube} from "@fortawesome/free-brands-svg-icons";
import {faUserGroup} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import {SocialLink, SocialPlatformName} from "../../../../types/Socials";

export const socialPlatforms = {
  linkedin: {name: "LinkedIn", icon: faLinkedin, color: "#0a66c2"},
  facebook: {name: "Facebook", icon: faFacebookSquare, color: "#0866ff"},
  instagram: {name: "Instagram", icon: faInstagram, color: "#e1306c"},
  youtube: {name: "YouTube", icon: faYoutube, color: "#ff0033"},
  spotify: {name: "Spotify", icon: faSpotify, color: "#1db954"},
  herohero: {name: "Herohero", icon: faUserGroup, color: "#776ae9"},
};

interface SocialIconProps {
  platform: SocialPlatformName;
  url: string;
}

const SocialIcon: FC<SocialIconProps> = ({platform, url}) => {
  if (!socialPlatforms[platform]) return null;

  const {name, icon, color} = socialPlatforms[platform];
  return (
    <Link
      href={url}
      style={{color}}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={name}
      title={name}
    >
      <FontAwesomeIcon icon={icon} size="xl"/>
    </Link>
  );
};

interface SocialIconsProps {
  socials: SocialLink[];
}

export const SocialIcons: FC<SocialIconsProps> = ({socials}) => {
  return (
    <>
      {socials.map((social, index) => (
        <SocialIcon key={index} platform={social.platform} url={social.url}/>
      ))}
    </>
  );
};
