import { Bricolage_Grotesque, Inter } from "next/font/google";
import localFont from "next/font/local";

export const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage-grotesque",
  display: "swap",
});

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const notoSansBengali = localFont({
  src: "./noto-sans-bengali/NotoSansBengali[wdth,wght].woff2", // full/variable-ttf => v3.000
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
  adjustFontFallback: false,
  variable: "--font-noto-sans-bengali",
  preload: false,
});
