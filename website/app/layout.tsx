import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CookieConsent from "@/features/cookie-consent";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "名前迷子 / keyno63 | Software Engineer",
  description:
    "サーバーサイドを中心に、Webサービスや音声通信システムの開発に携わるソフトウェアエンジニア、名前迷子（keyno63）のプロフィールです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
