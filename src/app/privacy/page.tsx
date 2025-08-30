/**
 * Copyright (c) 2025 Oceanflo. Licensed under the MIT License. See LICENSE.
 */

"use client";

import Link from "next/link";
import Header from "../../components/Header";
import AnnouncementBanner from "../../components/AnnouncementBanner";

export default function PrivacyPolicy() {
  return (
    <>
      {/* Moving Banner Announcement */}
      <AnnouncementBanner />

      {/* Header */}
      <Header />

      <main className="main-container">
        <h1 className="hello oceanflo-text">OCEANFLO</h1>
        <h2 className="subtitle">Privacy Policy</h2>

        <div className="content-container">
          <div className="content-section">
            <h3>1. Information We Collect</h3>
            <p>
              Oceanflo (ओशनफ्लो) collects information that you provide directly
              to us, such as when you fill out our contact form, including your
              email address and phone number. We also collect information about
              your use of our website through cookies and similar technologies.
            </p>
          </div>

          <div className="content-section">
            <h3>2. How We Use Your Information</h3>
            <p>We use the information we collect to:</p>
            <ul>
              <li>
                Respond to your inquiries about our packaged drinking water
                products
              </li>
              <li>
                Provide information about dealer partnerships and distribution
                opportunities
              </li>
              <li>
                Send you updates about our manufacturing operations and product
                launches
              </li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>
          </div>

          <div className="content-section">
            <h3>3. Information Sharing</h3>
            <p>
              We do not sell, trade, or otherwise transfer your personal
              information to third parties without your consent, except as
              described in this policy. We may share your information with:
            </p>
            <ul>
              <li>
                Service providers who assist us in operating our website and
                business
              </li>
              <li>Legal authorities when required by law</li>
              <li>Business partners with your explicit consent</li>
            </ul>
          </div>

          <div className="content-section">
            <h3>4. Data Security</h3>
            <p>
              We implement appropriate security measures to protect your
              personal information against unauthorized access, alteration,
              disclosure, or destruction. However, no method of transmission
              over the internet is 100% secure.
            </p>
          </div>

          <div className="content-section">
            <h3>5. Cookies and Website Technologies</h3>
            <p>
              Our website uses cookies and similar technologies to enhance your
              browsing experience. These technologies help us improve our
              services and provide a better user experience. You can control
              cookie settings through your browser preferences.
            </p>
          </div>

          <div className="content-section">
            <h3>6. Website Functionality</h3>
            <p>
              We use essential website technologies to ensure proper
              functionality, security, and performance. These technologies help
              us provide you with the best possible experience while maintaining
              your privacy.
            </p>
          </div>

          <div className="content-section">
            <h3>7. Your Rights</h3>
            <p>You have the right to:</p>
            <ul>
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Withdraw consent for data processing</li>
              <li>Opt-out of marketing communications</li>
            </ul>
          </div>

          <div className="content-section">
            <h3>8. Data Retention</h3>
            <p>
              We retain your personal information for as long as necessary to
              fulfill the purposes outlined in this policy, unless a longer
              retention period is required or permitted by law.
            </p>
          </div>

          <div className="content-section">
            <h3>9. Children's Privacy</h3>
            <p>
              Our website is not intended for children under the age of 13. We
              do not knowingly collect personal information from children under
              13. If you believe we have collected such information, please
              contact us immediately.
            </p>
          </div>

          <div className="content-section">
            <h3>10. International Data Transfers</h3>
            <p>
              Your information may be transferred to and processed in countries
              other than your own. We ensure that such transfers comply with
              applicable data protection laws.
            </p>
          </div>

          <div className="content-section">
            <h3>11. Changes to This Policy</h3>
            <p>
              We may update this privacy policy from time to time. We will
              notify you of any changes by posting the new policy on this page
              and updating the "Last updated" date.
            </p>
          </div>

          <div className="content-section">
            <h3>12. Contact Us</h3>
            <p>
              If you have any questions about this Privacy Policy or our data
              practices, please contact us at work@oceanflo.xyz.
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
