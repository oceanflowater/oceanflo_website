/**
 * Copyright (c) 2025 Oceanflo. Licensed under the MIT License. See LICENSE.
 */

"use client";

import Link from "next/link";
import Header from "../../components/Header";
import AnnouncementBanner from "../../components/AnnouncementBanner";

export default function Products() {
  return (
    <>
      {/* Moving Banner Announcement */}
      <AnnouncementBanner />

      {/* Header */}
      <Header />

      <main className="main-container">
        <h1 className="hello oceanflo-text">OCEANFLO</h1>
        <h2 className="subtitle">Our Products</h2>

        <div className="content-container">
          <div className="content-section">
            <h3>What We Make</h3>
            <p>
              Oceanflo produces packaged drinking water with full FSSAI and ISO
              compliance. We keep our product line focused on what dealers and
              customers actually need.
            </p>
          </div>

          <div className="content-section">
            <h3>Mineral Water Bottles</h3>

            <h4>1L Mineral Water Bottles</h4>
            <p>
              Our 1-liter bottles are perfect for families and general
              consumption. These contain natural minerals without alkaline
              enhancement. Great for home use, small offices, and retail sales
              where customers want larger quantities.
            </p>

            <h4>500ml Mineral Water Bottles</h4>
            <p>
              The 500ml size works well for personal use and retail sales. Easy
              to carry, fits in bags, and appeals to customers who want portion
              control. These also contain natural minerals without alkaline
              enhancement.
            </p>
          </div>

          <div className="content-section">
            <h3>Alkaline Water Jars</h3>

            <h4>20L Alkaline Water Jars</h4>
            <p>
              These large jars are designed for offices, businesses, and homes
              with water dispensers. Unlike our mineral water bottles, these
              jars contain alkaline water for customers who specifically want
              that option. Perfect for workplaces and families with higher water
              consumption.
            </p>
          </div>

          <div className="content-section">
            <h3>Quality Process</h3>
            <p>Here's how we ensure quality:</p>
            <ul>
              <li>Multi-stage purification using RO, UV, and ozonation</li>
              <li>FSSAI certified manufacturing processes</li>
              <li>ISO compliant quality management systems</li>
              <li>Our own lab tests water quality daily before bottling</li>
              <li>Food-grade packaging materials only</li>
              <li>Regular testing and quality monitoring</li>
              <li>Controlled environment bottling</li>
            </ul>
          </div>

          <div className="content-section">
            <h3>For Dealers</h3>
            <p>What this really means for your business:</p>
            <ul>
              <li>Consistent quality customers can rely on</li>
              <li>Product variety to meet different customer needs</li>
              <li>Proper certifications that satisfy health inspectors</li>
              <li>Packaging designed for easy storage and display</li>
              <li>Competitive pricing that allows healthy margins</li>
            </ul>
          </div>

          <div className="content-section">
            <h3>Manufacturing Plant Progress</h3>
            <p>
              The manufacturing plant is under construction. We will add photos
              of our products and license number when everything is completed.
            </p>

            <h4>Current Progress: 80% Complete</h4>
            <p>
              Only the Fully Automatic PET Bottle Blow Moulding Machine is
              currently in the making. Rest assured, everything is set for the
              launch.
            </p>

            <ul>
              <li>✅ Plant infrastructure completed</li>
              <li>✅ Water purification systems installed</li>
              <li>✅ Quality control lab setup</li>
              <li>✅ Packaging and labeling equipment ready</li>
              <li>🔄 PET Bottle Blow Moulding Machine (in progress)</li>
              <li>✅ Safety and compliance systems verified</li>
            </ul>
          </div>

          <div className="content-section">
            <h3>Coming Soon</h3>
            <p>
              We're finalizing our manufacturing and distribution operations.
              Our products will be available through our dealer network
              chandrapur district, Maharashtra.
            </p>
            <p>
              Interested in carrying our products?{" "}
              <Link href="/contact" className="contact-link">
                Contact us here
              </Link>{" "}
              for pricing and partnership details.
            </p>
          </div>

          <div className="content-section">
            <p className="last-updated">
              Product specifications and availability will be finalized once
              operations begin.
            </p>
          </div>
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
