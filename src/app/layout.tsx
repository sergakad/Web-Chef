import type { Metadata } from "next";
import {
  Inter,
  Montserrat,
  Poppins,
} from "next/font/google";
import "@/shared/styles/reset.scss";
import "@/shared/styles/variables.scss";
import "@/shared/styles/globals.scss";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import cn from "classnames";


const moncerat = Montserrat({
  weight: ["400"],
  subsets: ["cyrillic"],
  variable: "--font-montserrat",
});

const inter = Inter({
  weight: ["400", "300", "200", "100"],
  subsets: ["cyrillic", "cyrillic-ext", "latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  weight: ["400", "500", "600"],
  subsets: ["latin", "latin-ext"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Web-Chef",
  description: "Web-Chef",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={cn(
          moncerat.variable,
          inter.variable,
          poppins.variable,
        )}
      >
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
