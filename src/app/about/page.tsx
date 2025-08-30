/**
 * Copyright (c) 2025 Oceanflo. Licensed under the MIT License. See LICENSE.
 */

"use client";

import Link from "next/link";
import Header from "../../components/Header";
import AnnouncementBanner from "../../components/AnnouncementBanner";

export default function AboutUs() {
  return (
    <>
      {/* Moving Banner Announcement */}
      <AnnouncementBanner />

      {/* Header */}
      <Header />

      <main className="main-container">
        <h1 className="hello oceanflo-text">OCEANFLO</h1>
        <h2 className="subtitle">About Us</h2>

        <div className="content-container">
          <div className="content-section">
            <h3>Who We Are</h3>
            <p>
              Oceanflo is a manufacturing company that produces packaged
              drinking water bottles. We're a new company that just started our
              business, and we sell to dealers at competitive prices.
            </p>
            <p>
              Here's the thing - we might be new, but we're serious about
              quality and building long-term relationships with our dealers.
              Every bottle we produce meets strict safety standards because
              that's what your customers deserve.
            </p>
          </div>

          <div className="content-section">
            <h3>Our Mission</h3>
            <p>
              We want to make clean, safe drinking water accessible to everyone
              through our dealer network. What this really means is fair pricing
              for dealers and reliable quality for consumers.
            </p>
          </div>

          <div className="content-section">
            <h3>Why Work With Us</h3>

            <h4 className="no-underline">Modern Manufacturing Facility</h4>
            <p>
              Our facility uses current technology and follows strict quality
              control. We maintain clean production environments and test every
              batch to ensure consistency.
            </p>

            <h4 className="no-underline">Quality Water Production</h4>
            <p>
              We source water carefully and use multi-stage purification
              including RO, UV, and ozonation. Our process removes impurities
              while maintaining essential minerals.
            </p>

            <h4>Competitive Dealer Pricing</h4>
            <p>
              We offer attractive wholesale rates that give dealers healthy
              profit margins. No complicated pricing structures - just
              straightforward, competitive rates.
            </p>

            <h4>Reliable Supply Chain</h4>
            <p>
              Our distribution network ensures consistent stock availability. We
              understand that empty shelves mean lost sales, so we prioritize
              reliable delivery schedules.
            </p>
          </div>

          <div className="content-section">
            <h3>Quality Standards</h3>
            <p>
              We manufacture with full compliance to FSSAI and ISO standards.
              Let's break this down:
            </p>
            <ul>
              <li>
                FSSAI certification ensures our food safety standards meet
                government requirements
              </li>
              <li>
                ISO compliance means our quality management systems follow
                international standards
              </li>
              <li>
                Our own in-house lab tests water quality daily to maintain
                consistency
              </li>
              <li>
                Regular third-party testing validates our water quality claims
              </li>
              <li>Strict hygiene protocols protect every step of production</li>
              <li>
                Quality control processes ensure consistent standards from
                source to shelf
              </li>
            </ul>
          </div>

          <div className="content-section">
            <h3>Our Products</h3>
            <p>
              We keep our product line focused on what dealers actually need:
            </p>
            <ul>
              <li>
                <strong>1L Mineral Water Bottles:</strong> Perfect for families
                and general consumption
              </li>
              <li>
                <strong>500ml Mineral Water Bottles:</strong> Ideal for personal
                use and retail sales
              </li>
              <li>
                <strong>20L Alkaline Water Jars:</strong> Designed for offices,
                businesses, and homes with dispensers
              </li>
            </ul>
            <p>
              The mineral water bottles contain natural minerals without
              alkaline enhancement. The 20L jars are specifically alkaline water
              for customers who prefer that option.
            </p>
          </div>

          <div className="content-section">
            <h3>Dealer Partnership</h3>
            <p>When you partner with us, here's what you get:</p>
            <ul>
              <li>Competitive wholesale pricing with clear profit margins</li>
              <li>Flexible payment terms that work for your cash flow</li>
              <li>Marketing materials to help promote the products</li>
              <li>Direct customer service support when you need help</li>
              <li>Territory protection in select areas</li>
              <li>Training on product knowledge and sales techniques</li>
            </ul>
          </div>

          <div className="content-section">
            <h3>What We Promise</h3>
            <p>
              As a new company, we know trust is earned. Here's our commitment:
            </p>
            <ul>
              <li>Consistent quality in every batch we produce</li>
              <li>Transparent business practices with no hidden fees</li>
              <li>Support for our dealers' growth and success</li>
              <li>Continuous investment in better equipment and processes</li>
              <li>Contributing positively to local communities</li>
            </ul>
          </div>

          <div className="content-section">
            <h3>Environmental Approach</h3>
            <p>We believe in responsible business practices:</p>
            <ul>
              <li>
                Careful water sourcing that doesn't deplete local resources
              </li>
              <li>Packaging designed for recyclability</li>
              <li>Waste reduction programs in our facility</li>
              <li>Energy-efficient production methods</li>
              <li>Supporting local water conservation efforts</li>
            </ul>
          </div>

          <div className="content-section">
            <h3>Ready to Partner?</h3>
            <p>
              Interested in working with us? We're looking for dealers who want
              to build a water business with reliable supply and fair pricing.
            </p>
            <p>
              <Link href="/contact" className="contact-link">
                Contact us here
              </Link>{" "}
              to discuss opportunities, pricing, and how we can work together.
              We're here to answer questions and help you understand if Oceanflo
              is right for your market.
            </p>
          </div>

          {/* <div className="content-section">
            <p className="last-updated">
              Oceanflo (ओशनफ्लो) - Clean Water, Fair Business
            </p>
          </div> */}
        </div>
      </main>

      {/* Copyright Footer */}
      <footer className="copyright-footer">
        <p className="copyright-text">© 2025 Oceanflo. All rights reserved.</p>
        <div className="footer-links">
          <Link href="/privacy">Privacy Policy</Link>
          <span className="separator">•</span>
          <Link href="/terms">Terms of Service</Link>
        </div>
      </footer>
    </>
  );
}
