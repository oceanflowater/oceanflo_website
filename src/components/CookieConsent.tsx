/**
 * Copyright (c) 2025 Oceanflo. Licensed under the MIT License. See LICENSE.
 */

"use client";

import { useState, useEffect } from "react";

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consentGiven = localStorage.getItem("cookie-consent");

    if (!consentGiven) {
      // Show consent after a short delay for better UX
      const timer = setTimeout(() => {
        setShowConsent(true);
        // Add a small delay for the animation
        setTimeout(() => setIsVisible(true), 100);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
    setTimeout(() => setShowConsent(false), 300);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setIsVisible(false);
    setTimeout(() => setShowConsent(false), 300);
  };

  if (!showConsent) return null;

  return (
    <div
      className={`cookie-consent ${isVisible ? "visible" : ""}`}
      role="dialog"
      aria-label="Cookie consent"
    >
      <div className="cookie-content">
        <p>
          This website uses cookies to improve your experience.
          <button
            onClick={handleAccept}
            className="cookie-btn accept"
            aria-label="Accept cookies"
          >
            Accept
          </button>
          <button
            onClick={handleDecline}
            className="cookie-btn decline"
            aria-label="Decline cookies"
          >
            Decline
          </button>
        </p>
      </div>
    </div>
  );
}
