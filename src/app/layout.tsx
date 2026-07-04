import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/LanguageContext";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-space",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ahmet.digital — Dijital Ajans",
  description:
    "Sosyal medya yönetimi, web geliştirme, marka kimliği ve dijital dönüşüm hizmetleri. Markanızı dijitalde güçlendiriyoruz.",
  keywords: [
    "dijital ajans",
    "sosyal medya yönetimi",
    "web geliştirme",
    "marka kimliği",
    "digital agency",
    "UI UX tasarım",
    "ahmet.digital",
  ],
  authors: [{ name: "Ahmet", url: "https://ahmet.digital" }],
  creator: "Ahmet",
  metadataBase: new URL("https://ahmet.digital"),
  openGraph: {
    type: "website",
    locale: "tr_TR",
    alternateLocale: "en_US",
    url: "https://ahmet.digital",
    siteName: "ahmet.digital",
    title: "ahmet.digital — Dijital Ajans",
    description:
      "Sosyal medya yönetimi, web geliştirme, marka kimliği ve dijital dönüşüm hizmetleri.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ahmet.digital — Dijital Ajans",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ahmet.digital — Dijital Ajans",
    description: "Markanızı dijitalde güçlendiriyoruz.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={spaceGrotesk.variable}>
      <body className="font-sans antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
