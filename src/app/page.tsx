"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardTwentyFour from '@/components/sections/feature/FeatureCardTwentyFour';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';

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

  <div id="hero" data-section="hero">
      <HeroBillboardScroll
      background={{
        variant: "radial-gradient",
      }}
      title="Unlock Your Aesthetic"
      description="Discover trending products and viral finds that resonate with your unique style. ShopFusion brings you an addictive collection optimized for high conversions and endless inspiration."
      tag="Pinterest-Inspired Shopping"
      tagAnimation="blur-reveal"
      buttons={[
        {
          text: "Explore Viral Products",
          href: "/products",
        },
        {
          text: "Learn More",
          href: "/#features",
        },
      ]}
      buttonAnimation="slide-up"
      imageSrc="http://img.b2bpic.net/free-photo/side-view-young-woman-sitting-chair_23-2149411363.jpg"
      imageAlt="Aesthetic product display with modern lighting and premium feel"
    />
  </div>

  <div id="featured-products" data-section="featured-products">
      <ProductCardOne
      animationType="scale-rotate"
      textboxLayout="default"
      gridVariant="bento-grid"
      useInvertedBackground={false}
      products={[
        {
          id: "p-viral-1",
          name: "Aurora Glow Lamp",
          price: "$79.99",
          imageSrc: "http://img.b2bpic.net/free-photo/elegant-smartwatch-with-abstract-background_1134-390.jpg",
          imageAlt: "Aurora Glow Lamp",
          isFavorited: false,
        },
        {
          id: "p-viral-2",
          name: "Zen Sand Diffuser",
          price: "$49.99",
          imageSrc: "http://img.b2bpic.net/free-photo/autumn-composition-with-inscription-home-still-life-home-interior_169016-59463.jpg",
          imageAlt: "Zen Sand Diffuser",
          isFavorited: true,
        },
        {
          id: "p-viral-3",
          name: "Mirrored Vanity Tray",
          price: "$34.50",
          imageSrc: "http://img.b2bpic.net/free-photo/skin-care-banner-concept-with-lotion_23-2149449093.jpg",
          imageAlt: "Mirrored Vanity Tray",
          isFavorited: false,
        },
        {
          id: "p-viral-4",
          name: "Minimalist Wall Art",
          price: "$120.00",
          imageSrc: "http://img.b2bpic.net/free-photo/hot-drink-present-warm-clothes_23-2147936933.jpg",
          imageAlt: "Minimalist Wall Art",
          isFavorited: false,
        },
        {
          id: "p-viral-5",
          name: "Ceramic Abstract Vase",
          price: "$55.00",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-hands-holding-device_23-2149294453.jpg",
          imageAlt: "Ceramic Abstract Vase",
          isFavorited: true,
        },
        {
          id: "p-viral-6",
          name: "Weighted Comfort Blanket",
          price: "$89.00",
          imageSrc: "http://img.b2bpic.net/free-photo/ceramic-pottery-tools-still-life_23-2150197303.jpg",
          imageAlt: "Weighted Comfort Blanket",
          isFavorited: false,
        },
      ]}
      title="Featured Viral Products"
      description="Hand-picked for their popularity and unique appeal, these products are flying off the digital shelves. Get them before they're gone!"
      tag="Trending"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyFour
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        {
          id: "f1",
          title: "Secure & Fast Checkout",
          author: "Payments",
          description: "Our streamlined, mobile-optimized checkout ensures your purchases are quick, safe, and hassle-free, with multiple payment options.",
          tags: [
            "Stripe",
            "PayPal",
            "UPI",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/shopping-purchase-order-discount-concept_53876-121192.jpg",
          imageAlt: "Secure and fast payment processing",
        },
        {
          id: "f2",
          title: "Global, Reliable Shipping",
          author: "Delivery",
          description: "From local dropshipping to international deliveries, we ensure your products arrive swiftly and securely, wherever you are.",
          tags: [
            "Worldwide",
            "Trackable",
            "Fast",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/logistics-means-transport-together-with-technological-futuristic-holograms_23-2151662921.jpg",
          imageAlt: "Global delivery network",
        },
        {
          id: "f3",
          title: "24/7 Premium Support",
          author: "Assistance",
          description: "Our dedicated support team is always ready to assist you, ensuring a smooth and satisfying shopping journey from start to finish.",
          tags: [
            "Responsive",
            "Helpful",
            "Friendly",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/experienced-worker-talking-with-customer-using-headphones-mic-closeup_482257-126149.jpg",
          imageAlt: "Customer support team assisting",
        },
      ]}
      title="Why Shop with ShopFusion?"
      description="Experience e-commerce redefined with features built for discovery, trust, and seamless conversions. Your next favorite product is just a click away."
      tag="Core Benefits"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardOne
      animationType="depth-3d"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",
          name: "Sarah J.",
          role: "Designer",
          company: "Home Aesthetics",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/happy-young-elegant-man-smiling_23-2148332976.jpg",
          imageAlt: "Happy customer Sarah J.",
        },
        {
          id: "t2",
          name: "Michael Chen",
          role: "Trendsetter",
          company: "Style Innovators",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/happy-adult-businessman-working-desk-office_1262-1839.jpg",
          imageAlt: "Satisfied customer Michael Chen",
        },
        {
          id: "t3",
          name: "Emily R.",
          role: "Blogger",
          company: "Aesthetic Life",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-smiley-woman-painting_23-2149050493.jpg",
          imageAlt: "Pleased customer Emily R.",
        },
        {
          id: "t4",
          name: "David Kim",
          role: "Collector",
          company: "Rare Finds",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/poor-family-with-bags-food_1398-5029.jpg",
          imageAlt: "Content customer David Kim",
        },
        {
          id: "t5",
          name: "Jessica Lee",
          role: "Influencer",
          company: "Viral Picks",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-handsome-cheerful-gardener-smiling-looking-camera-posing_176420-3837.jpg",
          imageAlt: "Enthusiastic customer Jessica Lee",
        },
      ]}
      title="What Our Customers Say"
      description="Hear from our community of happy shoppers who've transformed their spaces and styles with ShopFusion's unique finds."
      tag="Trusted Reviews"
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={true}
      names={[
        "SecurePay",
        "GlobalLogistics",
        "QualityTested",
        "EcoCert",
        "InnovateTech",
        "FashionForward",
        "HomeLux",
      ]}
      title="Partnered with Trustworthy Brands"
      description="Shop with confidence knowing we collaborate with leading brands and secure platforms to bring you the best."
      tag="Our Partners"
      speed={35}
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={false}
      faqs={[
        {
          id: "q1",
          title: "What payment methods do you accept?",
          content: "We accept all major credit cards, PayPal, Stripe, Razorpay, UPI, and Cash on Delivery for your convenience and flexibility.",
        },
        {
          id: "q2",
          title: "How long does shipping take?",
          content: "Shipping times vary based on your location and the product. Standard shipping usually takes 5-7 business days. You'll receive a tracking number once your order ships.",
        },
        {
          id: "q3",
          title: "Can I return a product?",
          content: "Yes, we offer a hassle-free return policy within 30 days of purchase, provided the item is in its original condition and packaging.",
        },
        {
          id: "q4",
          title: "Do you ship internationally?",
          content: "Absolutely! We offer international shipping to most countries. Shipping fees and times will be calculated at checkout.",
        },
        {
          id: "q5",
          title: "How do I track my order?",
          content: "Once your order is dispatched, you will receive an email with a tracking number and a link to monitor your shipment's progress in real-time.",
        },
      ]}
      sideTitle="Your Questions, Answered"
      sideDescription="Find quick answers to the most common questions about shopping, shipping, and returns at ShopFusion."
      faqsAnimation="slide-up"
      textPosition="left"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={true}
      background={{
        variant: "downward-rays-animated",
      }}
      text="Join Our Exclusive Community for Daily Inspiration & Deals"
      buttons={[
        {
          text: "Subscribe Now",
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
