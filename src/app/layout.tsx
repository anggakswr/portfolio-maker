import type { Metadata } from "next";
import { Inter, Poppins, Public_Sans } from "next/font/google";
import "./globals.css";
import ReactQueryContainer from "@/components/ReactQueryContainer";
import GlobalLoading from "@/components/GlobalLoading";

const publicSans = Public_Sans({
  // weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-public-sans",
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const inter = Inter({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "MySkill Portfolio Maker",
  description:
    "Create amazing portfolio to be a manager at 19 years old in America",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${inter.variable} ${publicSans.className} bg-[#FAFAFA] px-40 py-[59px]`}
      >
        <ReactQueryContainer>{children}</ReactQueryContainer>
        <GlobalLoading />
      </body>
    </html>
  );
}
