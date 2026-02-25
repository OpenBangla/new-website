import type { Metadata } from "next";
import "./global.css";
import { RootProvider } from "fumadocs-ui/provider/next";
import { Bricolage_Grotesque, Instrument_Sans } from "next/font/google";

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage-grotesque",
  display: "swap",
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NODE_ENV === "production"
      ? "https://openbangla.org"
      : "http://localhost:3000",
  ),
  title: "OpenBangla",
  description: "It is an organization.",
};

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${bricolageGrotesque.variable} ${instrumentSans.variable}`}
      suppressHydrationWarning
    >
      <body
        className={`${instrumentSans.className} flex min-h-screen flex-col`}
      >
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
