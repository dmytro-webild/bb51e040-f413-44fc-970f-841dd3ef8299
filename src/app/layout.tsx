import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { DM_Sans } from "next/font/google";



export const metadata: Metadata = {
  title: 'ShopFusion - Your Destination for Aesthetic & Viral Products',
  description: 'Discover trending products, luxury items, and unique finds on ShopFusion. Optimized for Pinterest traffic, high conversions, and an addictive shopping experience. Supports dropshipping, affiliate, digital, and physical products.',
  keywords: ["e-commerce, aesthetic products, viral products, pinterest shopping, luxury shopping, trending items, dropshipping, affiliate marketing, digital products, physical products, high conversion, online store, next.js"],
  openGraph: {
    "title": "ShopFusion - Discover & Shop Aesthetic Products",
    "description": "Discover trending products, luxury items, and unique finds on ShopFusion. Optimized for Pinterest traffic and high conversions.",
    "url": "https://www.shopfusion.com",
    "siteName": "ShopFusion",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/side-view-young-woman-sitting-chair_23-2149411363.jpg",
        "alt": "Aesthetic product display with modern lighting and premium feel"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "ShopFusion - Discover & Shop Aesthetic Products",
    "description": "Discover trending products, luxury items, and unique finds on ShopFusion. Optimized for Pinterest traffic and high conversions.",
    "images": [
      "http://img.b2bpic.net/free-photo/side-view-young-woman-sitting-chair_23-2149411363.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${dmSans.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
