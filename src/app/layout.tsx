import "@/styles/globals.css";

import profileImage from "@/assets/images/profile-image.jpg";
import { Footer } from "@/components/footer";
import { site } from "@/configs/site";
import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
  openGraph: {
    images: profileImage.src,
  },
  twitter: {
    images: profileImage.src,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      suppressHydrationWarning
      className={`${pretendard.variable} font-pretendard`}
    >
      <body className="antialiased">
        <Providers>
          <div className="container">{children}</div>
          <Footer />
        </Providers>
        <GoogleAnalytics gaId={process.env.GA_ID!} />
      </body>
    </html>
  );
}

const pretendard = localFont({
  src: [
    {
      path: "../assets/fonts/Pretendard-Regular.subset.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/Pretendard-Medium.subset.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/Pretendard-SemiBold.subset.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../assets/fonts/Pretendard-Bold.subset.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/fonts/Pretendard-ExtraBold.subset.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-pretendard",
});
