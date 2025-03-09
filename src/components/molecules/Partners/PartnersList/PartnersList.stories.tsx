import {Meta, StoryObj} from "@storybook/react";
import {PartnersList} from "./PartnersList";

const meta: Meta<typeof PartnersList> = {
  title: "Sjór Framework/Molecules/Partners/Partners List",
  component: PartnersList,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof PartnersList>;

const partnersData = [
  {
    href: "https://cothema.com/?utm_source=cth-sjor-framework&utm_medium=storybook-example&utm_campaign=storybook",
    imageSrc: "/partners/cothema.png",
    title: "Cothema",
  },
];

export const Default: Story = {
  args: {
    partners: partnersData,
  },
};

export const Empty: Story = {
  args: {
    partners: [],
  },
};
