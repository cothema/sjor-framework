import type {Meta, StoryObj} from "@storybook/react";
import {ComgateLogosLine} from "./ComgateLogosLine";

const meta: Meta<typeof ComgateLogosLine> = {
  title: "Sjór Framework/Molecules/Payments/Comgate Logos Line",
  component: ComgateLogosLine,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ComgateLogosLine>;

export const Default: Story = {
  args: {},
};
