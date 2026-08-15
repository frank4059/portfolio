import type { Metadata, Viewport } from "next";
import { Archivo_Black, Inter } from "next/font/google";
import "./globals.css";
import { profile } from "@/data";

const SITE_URL = "https://frank-editions.vercel.app";

const archivoBlack = Archivo_Black({
  variable: "--font-display",
  weight: "400",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.shortName,
  jobTitle: profile.role,
  url: SITE_URL,
  image: `${SITE_URL}${profile.photoUrl}`,
  email: `mailto:${profile.email}`,
  sameAs: [profile.instagramUrl],
  knowsAbout: profile.fields,
  address: {
    "@type": "PostalAddress",
    addressLocality: profile.location,
  },
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Frank Sarmiento | Video Editor & Motion Designer",
    template: "%s | Frank Sarmiento",
  },
  description:
    "Frank Sarmiento — video editor and motion designer with 5+ years of experience. Motion graphics, short-form content and graphic design for social media and commercials.",
  keywords: [
    "video editor",
    "motion graphics",
    "motion designer",
    "video editing",
    "short form content",
    "graphic design",
    "after effects",
    "premiere pro",
    "Frank Sarmiento",
  ],
  authors: [{ name: profile.shortName, url: SITE_URL }],
  creator: profile.shortName,
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Frank Editions",
    title: "Frank Sarmiento | Video Editor & Motion Designer",
    description:
      "Motion graphics, short-form content and graphic design. Take every project from concept to final result.",
    locale: "en_US",
    images: [
      {
        url: profile.photoUrl,
        width: 853,
        height: 846,
        alt: `Photo of ${profile.shortName}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Frank Sarmiento | Video Editor & Motion Designer",
    description:
      "Motion graphics, short-form content and graphic design. Take every project from concept to final result.",
    images: [profile.photoUrl],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${archivoBlack.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </body>
    </html>
  );
}