"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FooterBase from '@/components/sections/footer/FooterBase';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import ProductDetailCard from '@/components/ecommerce/productDetail/ProductDetailCard';

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
          name: "Home",          id: "/"},
        {
          name: "Products",          id: "/products"},
        {
          name: "Features",          id: "/#features"},
        {
          name: "Testimonials",          id: "/#testimonials"},
        {
          name: "FAQ",          id: "/#faq"},
      ]}
      logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=kd6aiy"
      logoAlt="ShopFusion Logo"
      brandName="ShopFusion"
      button={{
        text: "Shop Now",        href: "/products"}}
    />
  </div>

  <div id="product-detail" data-section="product-detail">
      <ProductDetailCard
      layout="page"
      name="Aurora Glow Lamp - Sunset Projector"
      price="$79.99"
      showRating={true}
      rating={4.8}
      description="Immerse yourself in a serene sunset ambiance with the Aurora Glow Lamp. Its minimalist design and captivating light projection transform any room into a tranquil oasis. Perfect for creating a relaxing atmosphere or a stunning backdrop for your content."
      images={[
        {
          src: "http://img.b2bpic.net/free-photo/everyday-bath-utensils-dark-marble-background_58702-17721.jpg",          alt: "Aurora Glow Lamp close-up"},
        {
          src: "http://img.b2bpic.net/free-photo/still-life-refillable-reusable-container_23-2150936068.jpg",          alt: "Aurora Glow Lamp in a living room"},
        {
          src: "http://img.b2bpic.net/free-photo/still-life-burnt-paper-with-flames_23-2150104311.jpg",          alt: "Aurora Glow Lamp casting light"},
      ]}
      variants={[
        {
          label: "Color",          options: [
            "Sunset Red",            "Ocean Blue",            "Forest Green"],
          selected: "Sunset Red",          onChange: (value) => {},
        },
      ]}
      quantity={{
        label: "Quantity",        options: [
          "1",          "2",          "3"],
        selected: "1",        onChange: (value) => {},
      }}
      buttons={[
        {
          text: "Add to Cart"},
        {
          text: "Buy Now"},
      ]}
    />
  </div>

  <div id="product-related" data-section="product-related">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "rp-1",          name: "Zen Desktop Fountain",          price: "$65.00",          imageSrc: "http://img.b2bpic.net/free-photo/still-life-cosmetic-products_23-2149163158.jpg",          imageAlt: "Zen Desktop Fountain",          isFavorited: false,
        },
        {
          id: "rp-2",          name: "Scented Candle Set",          price: "$30.00",          imageSrc: "http://img.b2bpic.net/free-photo/minimal-beauty-products-composition_23-2148961350.jpg",          imageAlt: "Scented Candle Set",          isFavorited: true,
        },
        {
          id: "rp-3",          name: "Minimalist Ceramic Mug",          price: "$18.00",          imageSrc: "http://img.b2bpic.net/free-photo/person-using-nfc-technology-pay-bill-restaurant_23-2150039428.jpg",          imageAlt: "Minimalist Ceramic Mug",          isFavorited: false,
        },
        {
          id: "rp-4",          name: "Boho Macrame Wall Hanging",          price: "$40.00",          imageSrc: "http://img.b2bpic.net/free-photo/summer-spring-break-holiday-vacation-leisure-concept_53876-31829.jpg",          imageAlt: "Boho Macrame Wall Hanging",          isFavorited: false,
        },
        {
          id: "rp-5",          name: "Organic Cotton Throw",          price: "$70.00",          imageSrc: "http://img.b2bpic.net/free-photo/creative-arrangement-minimalist-podium_23-2148959329.jpg",          imageAlt: "Organic Cotton Throw",          isFavorited: true,
        },
        {
          id: "rp-6",          name: "Geometric Planter Set",          price: "$50.00",          imageSrc: "http://img.b2bpic.net/free-photo/flat-lay-composition-cleaning-products-with-copyspace_23-2148133459.jpg",          imageAlt: "Geometric Planter Set",          isFavorited: false,
        },
      ]}
      title="You Might Also Like"
      description="Explore other aesthetic essentials that complement your style and enhance your space. Curated just for you."
      tag="Complementary"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        {
          title: "Shop",          items: [
            {
              label: "All Products",              href: "/products"},
            {
              label: "Trending",              href: "/products#trending"},
            {
              label: "Best Sellers",              href: "/products#bestsellers"},
            {
              label: "Flash Deals",              href: "/products#deals"},
          ],
        },
        {
          title: "Company",          items: [
            {
              label: "About Us",              href: "/#features"},
            {
              label: "Testimonials",              href: "/#testimonials"},
            {
              label: "FAQ",              href: "/#faq"},
            {
              label: "Contact",              href: "/#contact"},
          ],
        },
        {
          title: "Legal",          items: [
            {
              label: "Privacy Policy",              href: "#"},
            {
              label: "Terms of Service",              href: "#"},
            {
              label: "Return Policy",              href: "#"},
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
