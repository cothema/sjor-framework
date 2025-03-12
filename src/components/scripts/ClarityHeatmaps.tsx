"use client"

import React, {useEffect} from "react";
import Clarity from "@microsoft/clarity";

export const ClarityHeatmaps: React.FC<{ cookiesConsent: boolean }> = ({cookiesConsent}) => {
  useEffect(() => {
    if (cookiesConsent && process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID !== undefined) {
      Clarity.init(process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID);
    }
  }, [cookiesConsent]);

  return <></>;
};
