import type {Meta, StoryObj} from "@storybook/react";
import {CookiesConsentDialog} from "./CookiesConsentDialog";

const meta: Meta<typeof CookiesConsentDialog> = {
  title: "Sjór Framework/Molecules/Legal/Cookies Consent Dialog",
  component: CookiesConsentDialog,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof CookiesConsentDialog>;

export const Default: Story = {
  args: {
    setCookiesConsent: (consent: boolean) => console.log("Cookies consent:", consent),
  },
};
