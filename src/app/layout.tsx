import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "OneClick - Transform Your Business with Odoo ERP Solutions",
  description: "OneClick specializes in Odoo ERP implementation, digital marketing, and accounting services. Streamline operations, automate workflows, and achieve 30% revenue growth with our expert consulting services.",
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  keywords: [
    "Odoo ERP",
    "ERP implementation",
    "business automation",
    "digital marketing",
    "accounting services",
    "Odoo consulting",
    "business transformation",
    "workflow optimization"
  ],
  authors: [{ name: "OneClick" }],
  creator: "OneClick",
  publisher: "OneClick",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://oneclick.com"),
  openGraph: {
    title: "OneClick - Transform Your Business with Odoo ERP Solutions",
    description: "Streamline operations, automate workflows, and achieve measurable growth with OneClick's expert Odoo ERP implementation and digital marketing services.",
    url: "https://oneclick.com",
    siteName: "OneClick",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "OneClick - Odoo ERP Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OneClick - Transform Your Business with Odoo ERP Solutions",
    description: "Streamline operations, automate workflows, and achieve measurable growth with expert Odoo ERP implementation services.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
