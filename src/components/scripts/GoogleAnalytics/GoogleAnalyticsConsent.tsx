"use client"

import Script from "next/script";
import React from "react";

interface GoogleAnalyticsConsentProps {
  cookiesConsent: boolean;
}

export const GoogleAnalyticsConsent: React.FC<GoogleAnalyticsConsentProps> = ({cookiesConsent}) => {
  const analyticsId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;

  if (!cookiesConsent || !analyticsId) {
    return null;
  }

  return (
    <>
      <Script id="google-analytics-consent">
        {`
              gtag('consent', 'update', {
                'ad_storage': '${cookiesConsent ? 'granted' : 'denied'}',
                'ad_user_data': '${cookiesConsent ? 'granted' : 'denied'}',
                'ad_personalization': '${cookiesConsent ? 'granted' : 'denied'}',
                'analytics_storage': '${cookiesConsent ? 'granted' : 'denied'}'
              });
        `}
      </Script>
    </>
  );
};
