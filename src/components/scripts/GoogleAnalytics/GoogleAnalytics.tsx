import Script from "next/script";

export default function GoogleAnalytics () {
  const analyticsId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;

  if (analyticsId === undefined) {
    return null;
  }

  return (
    <>
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${analyticsId}`}
      />
      <Script id="google-analytics">
        {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('consent', 'default', {
                'ad_storage': 'denied',
                'ad_user_data': 'denied',
                'ad_personalization': 'denied',
                'analytics_storage': 'denied'
              });
              gtag('config', '${analyticsId}');
          `}
      </Script>
    </>
  );
};
