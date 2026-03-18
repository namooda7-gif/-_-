import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "라올 실내건축 | Laol Interior Architecture",
  description: "여성의 섬세함으로, 당신의 공간을 가장 안전하고 아름답게 바꿉니다.",
  keywords: ["라올실내건축", "인테리어", "여성대표인테리어", "홈케어", "우먼픽스"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
