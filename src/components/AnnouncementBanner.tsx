/**
 * Copyright (c) 2025 Oceanflo. Licensed under the MIT License. See LICENSE.
 */

"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useBannerContext } from "../contexts/BannerContext";

const AnnouncementBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [hasScrolledDown, setHasScrolledDown] = useState(false);
  const bannerRef = useRef<HTMLDivElement>(null);
  const { setIsBannerVisible } = useBannerContext();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Always show banner when at the very top (0px)
      if (currentScrollY === 0) {
        setIsVisible(true);
        setHasScrolledDown(false);
      }
      // If we scroll down for the first time, hide the banner and mark as scrolled
      else if (!hasScrolledDown && currentScrollY > 0) {
        setIsVisible(false);
        setHasScrolledDown(true);
      }
      // Once we've scrolled down, keep the banner hidden regardless of scroll direction
      else if (hasScrolledDown) {
        setIsVisible(false);
      }
    };

    // Throttle scroll events for better performance
    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledHandleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
    };
  }, [hasScrolledDown]);

  // Animate banner visibility and notify context
  useEffect(() => {
    if (bannerRef.current) {
      if (isVisible) {
        gsap.to(bannerRef.current, {
          y: 0,
          duration: 0.15,
          ease: "power2.out",
          onComplete: () => setIsBannerVisible(true),
        });
      } else {
        gsap.to(bannerRef.current, {
          y: "-100%",
          duration: 0.15,
          ease: "power2.in",
          onComplete: () => setIsBannerVisible(false),
        });
      }
    }
  }, [isVisible, setIsBannerVisible]);

  return (
    <div ref={bannerRef} className="announcement-banner">
      <div className="announcement-text">
        we are opening soon contact us for more information
      </div>
    </div>
  );
};

export default AnnouncementBanner;
