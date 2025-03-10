import {ReactNode} from "react";

export type Recommendation = {
  text: string | ReactNode;
  name: string;
  role: string;
  image: string;
};
