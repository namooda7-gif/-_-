import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import ThemeManager from "@/components/ThemeManager";
import ScrollIndicator from "@/components/ScrollIndicator";
import { CursorProvider } from "@/context/CursorContext";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "#0F0E0D",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: "라올 실내건축 | Laol Interior Architecture",
  description: "여성의 섬세함으로, 당신의 공간을 가장 안전하고 아름답게 바꿉니다.",
  keywords: ["라올실내건축", "인테리어", "여성대표인테리어", "홈케어", "우먼픽스"],
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Laol Interior",
  },
  formatDetection: {
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" data-theme="dark">
      <body className={inter.className}>
        <CursorProvider>
          <CustomCursor />
          <ThemeManager>
            <Navigation />
            {children}
            <ScrollIndicator />
            <Footer />
          </ThemeManager>
        </CursorProvider>
      </body>
    </html>
  );
}
