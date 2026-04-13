import type { Metadata } from "next";
import "./global.css";
import { RootProvider } from "fumadocs-ui/provider/next";
import { bricolageGrotesque, inter, notoSansBengali } from "./_fonts";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NODE_ENV === "production"
      ? "https://obk-new-website.vercel.app"
      : "http://localhost:3000",
  ),
  title: "OpenBangla",
  description: "It is an organization.",
};

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${bricolageGrotesque.variable} ${inter.variable} ${notoSansBengali.variable}`}
      suppressHydrationWarning
    >
      <body className={"flex min-h-screen flex-col"}>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
