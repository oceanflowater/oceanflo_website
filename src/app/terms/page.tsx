/**
 * Copyright (c) 2025 Oceanflo. Licensed under the MIT License. See LICENSE.
 */

"use client";

import Link from "next/link";
import Header from "../../components/Header";
import AnnouncementBanner from "../../components/AnnouncementBanner";

export default function TermsAndConditions() {
  return (
    <>
      {/* Moving Banner Announcement */}
      <AnnouncementBanner />

      {/* Header */}
      <Header />

      <main className="main-container">
        <h1 className="hello oceanflo-text">OCEANFLO</h1>
        <h2 className="subtitle">Terms and Conditions</h2>

        <div className="content-container">
          <div className="content-section">
            <h3>1. Acceptance of Terms</h3>
            <p>
              By accessing and using the Oceanflo website and services, you
              accept and agree to be bound by the terms and provision of this
              agreement. If you do not agree to abide by the above, please do
              not use this service.
            </p>
          </div>

          <div className="content-section">
            <h3>2. Company Information</h3>
            <p>
              Oceanflo (ओशनफ्लो) is a manufacturing company that produces
              packaged mineral drinking water and supplies it to local dealers
              across India. We are committed to providing high-quality, safe,
              and pure drinking water products.
            </p>
          </div>

          <div className="content-section">
            <h3>3. Product Quality and Safety</h3>
            <p>
              All our products are manufactured in compliance with Indian food
              safety standards and regulations. We maintain strict quality
              control measures to ensure the safety and purity of our packaged
              drinking water.
            </p>
          </div>

          <div className="content-section">
            <h3>4. Dealer Relationships</h3>
            <p>
              We work exclusively with authorized dealers and distributors. All
              business transactions are subject to our dealer agreement terms
              and conditions, which are provided separately upon request.
            </p>
          </div>

          <div className="content-section">
            <h3>5. Website Usage</h3>
            <p>
              This website is intended for informational purposes and dealer
              inquiries. Users may not use this site for any unlawful purpose or
              in any way that could damage, disable, overburden, or impair the
              site.
            </p>
          </div>

          <div className="content-section">
            <h3>6. Contact Information</h3>
            <p>
              For business inquiries, dealer partnerships, or general
              information, please contact us at work@oceanflo.xyz. We will
              respond to legitimate inquiries within reasonable timeframes.
            </p>
          </div>

          <div className="content-section">
            <h3>7. Intellectual Property</h3>
            <p>
              All content on this website, including but not limited to text,
              graphics, logos, and images, is the property of Oceanflo and is
              protected by copyright laws.
            </p>
          </div>

          <div className="content-section">
            <h3>8. Limitation of Liability</h3>
            <p>
              Oceanflo shall not be liable for any indirect, incidental,
              special, consequential, or punitive damages resulting from your
              use of this website or our services.
            </p>
          </div>

          <div className="content-section">
            <h3>9. Changes to Terms</h3>
            <p>
              We reserve the right to modify these terms at any time. Changes
              will be effective immediately upon posting on the website. Your
              continued use of the service constitutes acceptance of the
              modified terms.
            </p>
          </div>

          <div className="content-section">
            <h3>10. Governing Law</h3>
            <p>
              These terms shall be governed by and construed in accordance with
              the laws of India. Any disputes arising from these terms shall be
              subject to the exclusive jurisdiction of the courts in India.
            </p>
          </div>

          <div className="content-section">
            <h3>11. Contact Us</h3>
            <p>
              If you have any questions about these Terms and Conditions, please
              contact us at work@oceanflo.xyz.
            </p>
          </div>

          <div className="content-section">
            <p className="last-updated">Last updated: January 2025</p>
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
