import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter, Manrope, Oswald } from "next/font/google";
import "./globals.css";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const interCard = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-card",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bjerkvik Grill",
  description:
    "Grill, pizza og mer på Bjerkvik. Maridalsveien 1 — ring 91 92 31 41 eller finn oss på kart.",
  openGraph: {
    title: "Bjerkvik Grill",
    description:
      "Grill og god mat — Bjerkvik Grill på Maridalsveien 1, 8530 Bjerkvik.",
    locale: "nb_NO",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#4a3c33",
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no">
      <body
        className={`${sans.variable} ${serif.variable} ${oswald.variable} ${interCard.variable} m-0 min-h-screen bg-background p-0 font-sans antialiased text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
