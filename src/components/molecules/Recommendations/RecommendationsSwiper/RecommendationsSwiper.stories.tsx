import type {Meta, StoryObj} from "@storybook/react";
import {RecommendationsSwiper} from "./RecommendationsSwiper";

const meta: Meta<typeof RecommendationsSwiper> = {
  title: "Sjór Framework/Molecules/Recommendations/Recommendations Swiper",
  component: RecommendationsSwiper,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof RecommendationsSwiper>;

const recommendationsData = [
  {
    text: "„Lorem ipsum.“",
    name: "Jack",
    role: "CTO",
    image: "/img/reviews/jack.jpg",
  },
  {
    text: "„Lorem ipsum.“",
    name: "George",
    role: "Freelancer",
    image: "/img/reviews/george.jpg",
  },
  {
    text: "„Lorem ipsum.“",
    name: "Jack",
    role: "CTO",
    image: "/img/reviews/jack.jpg",
  },
  {
    text: "„Lorem ipsum.“",
    name: "George",
    role: "Freelancer",
    image: "/img/reviews/george.jpg",
  },
];

export const Default: Story = {
  args: {
    recommendations: recommendationsData,
  },
};

export const Empty: Story = {
  args: {
    recommendations: [],
  },
};
