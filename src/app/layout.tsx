import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import ThemeManager from "@/components/ThemeManager";
import ScrollIndicator from "@/components/ScrollIndicator";
import KakaoFloatingButton from "@/components/KakaoFloatingButton";
import { CursorProvider } from "@/context/CursorContext";
import Maintenance from "@/components/Maintenance";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "#0F0E0D",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://laol.kr"),
  title: "라올 실내건축 | Laol Interior Architecture",
  description: "여성의 섬세함으로, 당신의 공간을 가장 안전하고 아름답게 바꿉니다.",
  keywords: ["라올실내건축", "인테리어", "여성대표인테리어", "홈케어"],
  alternates: {
    canonical: "/",
  },
  verification: {
    other: {
      "naver-site-verification": "efc9c7c7c68017c7db1b295da784fa1cf3596791",
    },
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://laol.kr",
    siteName: "라올 실내건축",
    title: "라올 실내건축 | Laol Interior Architecture",
    description: "여성의 섬세함으로, 당신의 공간을 가장 안전하고 아름답게 바꿉니다.",
    images: [
      {
        url: "/styles/all-styles/Modern_luxury_living_202603191156.jpeg",
        width: 1376,
        height: 768,
        alt: "라올 실내건축 - 프리미엄 인테리어",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "라올 실내건축 | Laol Interior Architecture",
    description: "여성의 섬세함으로, 당신의 공간을 가장 안전하고 아름답게 바꿉니다.",
    images: ["/styles/all-styles/Modern_luxury_living_202603191156.jpeg"],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Laol Interior",
  },
  formatDetection: {
    telephone: false,
  },
};

// [OnRoom 서비스 임시 중단 설정]
// - true: 홈페이지 서비스 중지 및 점검 안내 화면 표시
// - false: 정상 서비스 운영
// 일주일 후 서비스를 재개하려면 아래 값을 false로 변경하고 배포(커밋/푸시)해 주시면 됩니다.
const MAINTENANCE_MODE = false;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" data-theme="dark">
      <body className={inter.className}>
        {MAINTENANCE_MODE ? (
          <Maintenance />
        ) : (
          <CursorProvider>
            <CustomCursor />
            <ThemeManager>
              <Navigation />
              {children}
              <ScrollIndicator />
              <KakaoFloatingButton />
              <Footer />
            </ThemeManager>
          </CursorProvider>
        )}
      </body>
    </html>
  );
}
