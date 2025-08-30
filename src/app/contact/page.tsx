/**
 * Copyright (c) 2025 Oceanflo. Licensed under the MIT License. See LICENSE.
 */

"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "../../components/Header";
import AnnouncementBanner from "../../components/AnnouncementBanner";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("+91 ");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) {
      setMessage("Please enter your name");
      setIsSuccess(false);
      return;
    }

    if (!email) {
      setMessage("Please enter your email address");
      setIsSuccess(false);
      return;
    }

    if (!phone || phone.trim() === "+91" || phone.trim() === "+91 ") {
      setMessage("Please enter your phone number");
      setIsSuccess(false);
      return;
    }

    setIsLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/submit-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, phone, source: "contact" }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Thank you! We'll be in touch soon.");
        setIsSuccess(true);
        setName(""); // Clear the form
        setEmail(""); // Clear the form
        setPhone("+91 "); // Reset phone to default
      } else {
        setMessage(data.error || "Something went wrong. Please try again.");
        setIsSuccess(false);
      }
    } catch (error) {
      setMessage("Network error. Please check your connection and try again.");
      setIsSuccess(false);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Ensure +91 prefix is always maintained
    if (!value.startsWith("+91")) {
      setPhone("+91 ");
    } else {
      setPhone(value);
    }
  };

  return (
    <>
      {/* Moving Banner Announcement */}
      <AnnouncementBanner />

      {/* Header */}
      <Header />

      <main className="main-container">
        <h1 className="hello oceanflo-text">OCEANFLO</h1>
        <h2 className="subtitle">Contact Us</h2>
        <h3 className="subtitle-2">
          Get in touch for dealer partnerships and business opportunities.
        </h3>

        <form className="email-form" onSubmit={handleSubmit}>
          <div className="form-inputs">
            <input
              type="text"
              placeholder="Enter your name"
              className="form-input name-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={isLoading}
              required
            />
            <input
              type="email"
              placeholder="Enter your email address"
              className="form-input email-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading}
              required
            />
            <input
              type="tel"
              placeholder="Enter your phone number"
              className="form-input phone-input"
              value={phone}
              onChange={handlePhoneChange}
              disabled={isLoading}
              required
            />
          </div>
          <button
            type="submit"
            className={`submit-btn ${isLoading ? "loading" : ""}`}
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : "Contact Us"}
          </button>
          {message && (
            <div className={`message ${isSuccess ? "success" : "error"}`}>
              {message}
            </div>
          )}
        </form>

        <div className="content-container">
          <div className="content-section">
            <h3>Business Inquiries</h3>
            <p>
              We're looking for dealers and distributors who want to partner
              with us. Whether you're interested in wholesale pricing, dealer
              partnerships, or have questions about our products, we're here to
              help.
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:work@oceanflo.xyz" className="email-link">
                work@oceanflo.xyz
              </a>
            </p>
            <p>
              Our team responds to inquiries within 24 hours during business
              days.
            </p>
          </div>

          <div className="content-section">
            <h3>Manufacturing Plant Address</h3>
            <p>
              <strong>Oceanflo Water Manufacturing</strong>
            </p>
            <p>
              Rajura Road, Near Zullulwar Petrol Pump
              <br />
              Bamni, Ballarpur
              <br />
              Maharashtra - 442701
            </p>
          </div>

          <div className="content-section">
            <h3>Current Dealer Network</h3>
            <p>
              We currently serve the Chandrapur area and are expanding our
              dealer network gradually. Our focus is on building strong
              relationships with reliable dealers who understand the local
              market.
            </p>
            <p>
              We're actively looking for dealers in nearby areas who are
              interested in quality packaged water products with competitive
              pricing.
            </p>
          </div>

          <div className="content-section">
            <h3>What We Offer Dealers</h3>
            <ul>
              <li>Competitive wholesale pricing with healthy profit margins</li>
              <li>Flexible payment terms that work for your business</li>
              <li>Reliable supply and consistent product quality</li>
              <li>Marketing support to help grow your sales</li>
              <li>Direct customer service when you need assistance</li>
            </ul>
          </div>

          <div className="content-section">
            <h3>Network Expansion</h3>
            <p>
              We're gradually expanding our network beyond Chandrapur. If you're
              interested in becoming a dealer in other areas of Maharashtra,
              we'd love to hear from you.
            </p>
            <p>
              Fill out the contact form above or email us to discuss
              opportunities in your area.
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
