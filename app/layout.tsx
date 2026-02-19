import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Public_Sans } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { JsonLd } from "@/components/JsonLd";
import config from "@/lib/config";
import "@/app/globals.css";
import { Navbar } from "@/components/global/Navbar";

const publicSans = Public_Sans({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: config.title,
    template: "%s | John Andrei Tacujan",
  },
  description: config.description,
  keywords: config.keywords,
  authors: [{ name: config.name.full, url: config.url }],
  creator: config.name.full,
  metadataBase: new URL(config.url || "dreidevs-portfolio.vercel.app"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/man-technologist.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: config.url,
    siteName: config.name.full,
    title: config.title,
    description: config.description,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: config.name.full,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: config.title,
    description: config.description,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={publicSans.variable} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/icon/man-technologist.svg" type="image/svg" />
        <JsonLd />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="max-w-8xl mx-auto  md:px-6 lg:px-8">
            <Navbar />
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
