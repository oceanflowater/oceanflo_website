/**
 * Copyright (c) 2025 Oceanflo. Licensed under the MIT License. See LICENSE.
 */

"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "../components/Header";
import AnnouncementBanner from "../components/AnnouncementBanner";
import { useBannerContext } from "../contexts/BannerContext";

export default function Home() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { isBannerVisible } = useBannerContext();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/submit-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, name, source: "home" }),
      });

      if (response.ok) {
        setMessage("Thank you! We will contact you soon.");
        setEmail("");
        setName("");
      } else {
        setMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      setMessage("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main>
      {/* Moving Banner Announcement */}
      <AnnouncementBanner />

      {/* Header */}
      <Header />

      {/* Main Content */}
      <div
        className={`main-container ${!isBannerVisible ? "banner-hidden" : ""}`}
      >
        <h1 className="hello oceanflo-text">OCEANFLO</h1>
        <p className="subtitle">Elevate how you hydrate with oceanflo</p>
        <p className="subtitle-2">
          We are opening soon. Contact us for more information.
        </p>

        {/* Email Form */}
        <form onSubmit={handleSubmit} className="email-form">
          <div className="form-inputs">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-input"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-input"
              required
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className={`submit-btn ${isLoading ? "loading" : ""}`}
          >
            {isLoading ? "Sending..." : "Get Notified"}
          </button>
        </form>

        {/* Message Display */}
        {message && (
          <div
            className={`message ${
              message.includes("Thank you") ? "success" : "error"
            }`}
          >
            {message}
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="copyright-footer">
        <p className="copyright-text">© 2025 Oceanflo. All rights reserved.</p>
        <div className="footer-links">
          <Link href="/privacy">Privacy Policy</Link>
          <span className="separator">•</span>
          <Link href="/terms">Terms of Service</Link>
        </div>
      </footer>
    </main>
  );
}
