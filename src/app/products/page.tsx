"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import BlogCardThree from '@/components/sections/blog/BlogCardThree';
import FooterBase from '@/components/sections/footer/FooterBase';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardOne from '@/components/sections/product/ProductCardOne';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-bubble"
        defaultTextAnimation="reveal-blur"
        borderRadius="pill"
        contentWidth="smallMedium"
        sizing="largeSmall"
        background="aurora"
        cardStyle="gradient-radial"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="solid"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Home",
          id: "/",
        },
        {
          name: "Products",
          id: "/products",
        },
        {
          name: "Features",
          id: "/#features",
        },
        {
          name: "Testimonials",
          id: "/#testimonials",
        },
        {
          name: "FAQ",
          id: "/#faq",
        },
      ]}
      logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=kd6aiy"
      logoAlt="ShopFusion Logo"
      brandName="ShopFusion"
      button={{
        text: "Shop Now",
        href: "/products",
      }}
    />
  </div>

  <div id="product-listing" data-section="product-listing">
      <ProductCardOne
      animationType="scale-rotate"
      textboxLayout="default"
      gridVariant="bento-grid"
      useInvertedBackground={true}
      products={[
        {
          id: "pl-1",
          name: "Minimalist Smart Speaker",
          price: "$129.00",
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-professional-reflex-camera_52683-128977.jpg",
          imageAlt: "Minimalist Smart Speaker",
          isFavorited: false,
        },
        {
          id: "pl-2",
          name: "Vintage Leather Wallet",
          price: "$59.00",
          imageSrc: "http://img.b2bpic.net/free-photo/arranglement-with-flip-flops-orange-slices_23-2148922345.jpg",
          imageAlt: "Vintage Leather Wallet",
          isFavorited: true,
        },
        {
          id: "pl-3",
          name: "Artisan Coffee Mug Set",
          price: "$45.00",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-woman-looking-watch_23-2148760451.jpg",
          imageAlt: "Artisan Coffee Mug Set",
          isFavorited: false,
        },
        {
          id: "pl-4",
          name: "Ergonomic Desk Chair",
          price: "$349.00",
          imageSrc: "http://img.b2bpic.net/free-photo/white-wireless-earbuds-with-case_53876-96327.jpg",
          imageAlt: "Ergonomic Desk Chair",
          isFavorited: false,
        },
        {
          id: "pl-5",
          name: "Weighted Comfort Blanket",
          price: "$89.00",
          imageSrc: "http://img.b2bpic.net/free-photo/concept-location-photo-shoot-photo-studio_185193-164056.jpg",
          imageAlt: "Weighted Comfort Blanket",
          isFavorited: true,
        },
        {
          id: "pl-6",
          name: "Ceramic Abstract Vase",
          price: "$55.00",
          imageSrc: "http://img.b2bpic.net/free-photo/minimal-tech-setup-with-earbuds_58702-17254.jpg",
          imageAlt: "Ceramic Abstract Vase",
          isFavorited: false,
        },
      ]}
      title="Shop Our Full Collection"
      description="Immerse yourself in our Pinterest-style feed of viral products, trending finds, and timeless bestsellers. Discover something new every day."
      tag="Discovery Feed"
    />
  </div>

  <div id="blog" data-section="blog">
      <BlogCardThree
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      title="Style Guides & Inspiration"
      description="Dive into our blog for the latest trends, styling tips, and product spotlights. Your daily dose of aesthetic inspiration awaits."
      tag="Discover More"
      blogs={[
        {
          id: "b1",
          category: "Fashion",
          title: "5 Viral Fashion Trends You Need Now",
          excerpt: "Discover the top fashion trends taking over social media and how to incorporate them into your wardrobe.",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-woman-holding-skateboard_23-2148436057.jpg",
          imageAlt: "Fashion trend collage",
          authorName: "Alice Wonderland",
          authorAvatar: "http://img.b2bpic.net/free-photo/software-developer-agency-office-coding-her-computer_482257-126122.jpg",
          date: "July 15, 2024",
        },
        {
          id: "b2",
          category: "Home Decor",
          title: "Transform Your Space with Minimalist Decor",
          excerpt: "Learn how to create a serene and aesthetic living environment with simple, elegant decor pieces.",
          imageSrc: "http://img.b2bpic.net/free-photo/cozy-home-still-life-with-inscription-home_169016-1530.jpg",
          imageAlt: "Minimalist living room",
          authorName: "Bob The Builder",
          authorAvatar: "http://img.b2bpic.net/free-photo/front-view-smiley-man-work_23-2149721867.jpg",
          date: "July 10, 2024",
        },
        {
          id: "b3",
          category: "Tech",
          title: "The Future of Smart Home Gadgets",
          excerpt: "Explore innovative smart home devices that blend seamlessly into your aesthetic and simplify your life.",
          imageSrc: "http://img.b2bpic.net/free-photo/large-transparent-presentation-screen-research-center_53876-101144.jpg",
          imageAlt: "Smart home devices",
          authorName: "Charlie Chaplin",
          authorAvatar: "http://img.b2bpic.net/free-photo/male-graphic-designer-using-digital-tablet_1170-1092.jpg",
          date: "July 5, 2024",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        {
          title: "Shop",
          items: [
            {
              label: "All Products",
              href: "/products",
            },
            {
              label: "Trending",
              href: "/products#trending",
            },
            {
              label: "Best Sellers",
              href: "/products#bestsellers",
            },
            {
              label: "Flash Deals",
              href: "/products#deals",
            },
          ],
        },
        {
          title: "Company",
          items: [
            {
              label: "About Us",
              href: "/#features",
            },
            {
              label: "Testimonials",
              href: "/#testimonials",
            },
            {
              label: "FAQ",
              href: "/#faq",
            },
            {
              label: "Contact",
              href: "/#contact",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms of Service",
              href: "#",
            },
            {
              label: "Return Policy",
              href: "#",
            },
          ],
        },
      ]}
      logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=kd6aiy"
      logoAlt="ShopFusion Logo"
      logoText="ShopFusion"
      copyrightText="© 2024 ShopFusion. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
