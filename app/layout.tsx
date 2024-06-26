import type { Metadata } from "next";
import font from "next/font/local";
import "./globals.scss";
import ThemeProvider from "@/components/theme/ThemeProvider";
import Header from "@/components/layout/Header";

const pretendard = font({
  src: "../public/static/fonts/PretendardVariable.woff2",
  display: "swap",
  preload: true,
  weight: "45 920",
});

export const metadata: Metadata = {
  title: "pung.dev",
  description: "개발 관련 지식, 경험들을 정리해두고 있습니다.",
  openGraph: {
    title: "pung.dev",
    description: "개발 관련 지식, 경험들을 정리해두고 있습니다.",
    emails: "jhpung.dev@gmail.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body
        className={`${pretendard.className} min-h-screen prose dark:prose-invert prose-a:text-primary hover:prose-a:underline prose-a:no-underline hover:prose-a:text-primary w-full max-w-full relative`}
      >
        <ThemeProvider>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
