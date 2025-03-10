import type {Meta, StoryObj} from "@storybook/react";
import {SocialIcons} from "./SocialIcons";
import {SocialLink} from "../../../../types/Socials";

const meta: Meta<typeof SocialIcons> = {
  title: "Sjór Framework/Molecules/Socials/Social Icons List",
  component: SocialIcons,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof SocialIcons>;

const sampleSocials: SocialLink[] = [
  {platform: "linkedin", url: "https://www.linkedin.com/company/vjednomkole/"},
  {platform: "facebook", url: "https://www.facebook.com/profile.php?id=61571666354002"},
  {platform: "instagram", url: "https://www.instagram.com/vjednomkole_com/"},
  {platform: "youtube", url: "https://www.youtube.com/@vjednomkole_podcast"},
  {platform: "spotify", url: "https://open.spotify.com/show/1ToKYuqXvIsB08OsN78q36?si=f0924c160f5f4599"},
  {platform: "herohero", url: "https://herohero.co/vjednomkole"},
];

export const Default: Story = {
  args: {
    socials: sampleSocials,
  },
};
