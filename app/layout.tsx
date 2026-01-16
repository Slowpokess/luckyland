import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { GA4_MEASUREMENT_ID, META_PIXEL_ID } from "@/lib/analytics";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Lucky Link LLC - Digital Advertising & Promotional Services",
    template: "%s | Lucky Link LLC",
  },
  description:
    "Digital advertising & promotional services platform providing rewards-based engagement programs and marketing solutions. No purchase necessary. Void where prohibited.",
  keywords: [
    "digital advertising",
    "promotional services",
    "marketing solutions",
    "rewards programs",
    "promotional giveaways",
  ],
  authors: [{ name: "Lucky Link LLC" }],
  creator: "Lucky Link LLC",
  publisher: "Lucky Link LLC",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://luckylink.com"
  ),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Lucky Link LLC - Digital Advertising & Promotional Services",
    description:
      "Digital advertising & promotional services platform providing rewards-based engagement programs.",
    siteName: "Lucky Link LLC",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lucky Link LLC - Digital Advertising & Promotional Services",
    description:
      "Digital advertising & promotional services platform providing rewards-based engagement programs.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* GA4 */}
        {GA4_MEASUREMENT_ID && (
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}`}
            strategy="afterInteractive"
          />
        )}
        {GA4_MEASUREMENT_ID && (
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA4_MEASUREMENT_ID}');
            `}
          </Script>
        )}
        {/* Meta Pixel */}
        {META_PIXEL_ID && (
          <Script id="meta-pixel" strategy="afterInteractive">
            {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${META_PIXEL_ID}');
              fbq('track', 'PageView');
            `}
          </Script>
        )}
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
