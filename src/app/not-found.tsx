/**
 * Copyright (c) 2025 Oceanflo. Licensed under the MIT License. See LICENSE.
 */

"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import Header from "../components/Header";
import AnnouncementBanner from "../components/AnnouncementBanner";

export default function NotFound() {
  const containerRef = useRef<HTMLDivElement>(null);
  const numberRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    try {
      // Entrance animations
      const tl = gsap.timeline();

      // Animate 404 number
      if (numberRef.current) {
        tl.fromTo(
          numberRef.current,
          {
            opacity: 0,
            scale: 0.5,
            y: 50,
          },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.8,
            ease: "back.out(1.7)",
          }
        );
      }

      // Animate text
      if (textRef.current) {
        tl.fromTo(
          textRef.current,
          {
            opacity: 0,
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.3"
        );
      }

      // Animate button
      if (buttonRef.current) {
        tl.fromTo(
          buttonRef.current,
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
          },
          "-=0.2"
        );
      }

      // Floating animation for the 404 number
      if (numberRef.current) {
        gsap.to(numberRef.current, {
          y: -10,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
          delay: 1,
        });
      }
    } catch (error) {
      console.error("404 page animation error:", error);
    }
  }, []);

  return (
    <>
      {/* Moving Banner Announcement */}
      <AnnouncementBanner />

      {/* Header */}
      <Header />

      <main className="not-found-container" ref={containerRef}>
        <div className="not-found-content">
          <div className="not-found-number" ref={numberRef}>
            404
            <div className="water-drop water-drop-1"></div>
            <div className="water-drop water-drop-2"></div>
            <div className="water-drop water-drop-3"></div>
          </div>

          <div className="not-found-text" ref={textRef}>
            <h1 className="not-found-title">Oops! Page not found</h1>
            <p className="not-found-description">
              The page you're looking for seems to have dried up. Let's get you
              back to the main flow.
            </p>
          </div>

          <Link href="/" className="not-found-button" ref={buttonRef}>
            Back to Home
          </Link>
        </div>

        {/* Decorative Water Drops */}
        <div className="not-found-decoration">
          <div className="water-drop water-drop-1"></div>
          <div className="water-drop water-drop-2"></div>
          <div className="water-drop water-drop-3"></div>
        </div>
      </main>

      {/* Copyright Footer */}
      <footer className="copyright-footer">
        <p className="copyright-text">© 2025 Oceanflo. All rights reserved.</p>
      </footer>
    </>
  );
}
