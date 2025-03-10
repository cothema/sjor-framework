import {socialPlatforms} from "../components/molecules/Socials/SocialIcons/SocialIcons";

export type SocialPlatformName = keyof typeof socialPlatforms;

export type SocialLink = {
  platform: SocialPlatformName;
  url: string;
};
