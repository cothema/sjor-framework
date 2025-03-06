import type {Meta, StoryObj} from "@storybook/react";
import {ComgateLogosLine} from "./ComgateLogosLine";

const meta: Meta<typeof ComgateLogosLine> = {
  title: "UI/ComgateLogosLine",
  component: ComgateLogosLine,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ComgateLogosLine>;

export const Default: Story = {
  args: {},
};
