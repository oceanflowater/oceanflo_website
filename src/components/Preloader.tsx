/**
 * Copyright (c) 2025 Oceanflo. Licensed under the MIT License. See LICENSE.
 */

"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [hasLoadedBefore, setHasLoadedBefore] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);
  const percentageRef = useRef<HTMLDivElement>(null);
  const preloaderRef = useRef<HTMLDivElement>(null);

  // Function to animate main content slide up
  const animateMainContent = () => {
    const mainContent = document.querySelector("main");
    const header = document.querySelector("header");
    const announcementBanner = document.querySelector(".announcement-banner");

    if (mainContent) {
      gsap.set(mainContent, { y: 100, opacity: 0 });
      gsap.to(mainContent, {
        duration: 1.2,
        y: 0,
        opacity: 1,
        ease: "power2.out",
        delay: 0.2,
      });
    }

    if (header) {
      gsap.set(header, { opacity: 0 });
      gsap.to(header, {
        duration: 1,
        opacity: 1,
        ease: "power2.out",
        delay: 0.1,
      });
    }

    if (announcementBanner) {
      gsap.set(announcementBanner, { opacity: 0 });
      gsap.to(announcementBanner, {
        duration: 1,
        opacity: 1,
        ease: "power2.out",
      });
    }
  };

  useEffect(() => {
    // Check if this is a page reload vs client-side navigation
    const isPageReload =
      performance.navigation.type === 1 ||
      (performance.getEntriesByType &&
        performance.getEntriesByType("navigation")[0] &&
        (
          performance.getEntriesByType(
            "navigation"
          )[0] as PerformanceNavigationTiming
        ).type === "reload");

    // Check if site has been loaded before
    const hasLoaded = localStorage.getItem("oceanflo-loaded");

    // Only show preloader on page reloads, not on client-side navigation
    if (!isPageReload && hasLoaded === "true") {
      // Client-side navigation and site has been loaded before, skip preloader
      setHasLoadedBefore(true);
      setIsLoading(false);
      // Make sure content is visible immediately
      const mainContent = document.querySelector("main");
      const header = document.querySelector("header");
      const announcementBanner = document.querySelector(".announcement-banner");

      if (mainContent) {
        gsap.set(mainContent, { y: 0, opacity: 1 });
      }
      if (header) {
        gsap.set(header, { opacity: 1 });
      }
      if (announcementBanner) {
        gsap.set(announcementBanner, { opacity: 1 });
      }
      return;
    }

    // Add preloader-active class to body
    document.body.classList.add("preloader-active");

    let currentProgress = 0;
    const targetProgress = 100;

    // Track loading progress
    const updateProgress = (newProgress: number) => {
      currentProgress = newProgress;
      setProgress(newProgress);
    };

    // Simulate loading different assets
    const loadAssets = async () => {
      const assets = [
        // Fonts
        () => loadFonts(),
        // Images
        () => loadImages(),
        // Other resources
        () => loadOtherResources(),
      ];

      for (let i = 0; i < assets.length; i++) {
        await assets[i]();
        updateProgress(((i + 1) / assets.length) * 100);
      }
    };

    // Load fonts
    const loadFonts = async () => {
      const fonts = [
        "CoFo Raffine",
        "Articulat",
        "TiffinDevanagariRegular",
        "VesperDevanagariRegular",
        "Oswald",
      ];

      const fontPromises = fonts.map((font) => {
        return new Promise<void>((resolve) => {
          if (document.fonts && document.fonts.load) {
            document.fonts.load(`16px "${font}"`).then(() => resolve());
          } else {
            // Fallback for browsers that don't support Font Loading API
            setTimeout(resolve, 100);
          }
        });
      });

      await Promise.all(fontPromises);
    };

    // Load images
    const loadImages = async () => {
      const images = [
        "/black_icon.png",
        "/black_icon.svg",
        "/oceanflo_black.svg",
        "/oceanflo_white.svg",
      ];

      const imagePromises = images.map((src) => {
        return new Promise<void>((resolve) => {
          const img = new Image();
          img.onload = () => resolve();
          img.onerror = () => resolve(); // Continue even if image fails
          img.src = src;
        });
      });

      await Promise.all(imagePromises);
    };

    // Load other resources
    const loadOtherResources = async () => {
      // Simulate loading other resources
      await new Promise((resolve) => setTimeout(resolve, 200));
    };

    // Start loading
    loadAssets();

    // GSAP animation for percentage counter
    const tl = gsap.timeline();

    tl.to(percentageRef.current, {
      duration: 2,
      textContent: targetProgress,
      roundProps: "textContent",
      ease: "power2.out",
      onUpdate: function () {
        const currentValue = Math.round(this.targets()[0].textContent);
        setProgress(currentValue);
      },
    });

    // Animate progress bar
    tl.to(
      progressRef.current,
      {
        duration: 2,
        width: "100%",
        ease: "power2.out",
      },
      0
    );

    // Hide preloader when complete
    tl.to(
      preloaderRef.current,
      {
        duration: 0.8,
        opacity: 0,
        y: -50,
        ease: "power2.inOut",
        onComplete: () => {
          setIsLoading(false);
          // Remove preloader-active class from body
          document.body.classList.remove("preloader-active");
          // Mark site as loaded in localStorage
          localStorage.setItem("oceanflo-loaded", "true");
          // Trigger slide up animation for main content
          animateMainContent();
        },
      },
      1.5
    );

    return () => {
      tl.kill();
    };
  }, []);

  if (!isLoading || hasLoadedBefore) return null;

  return (
    <div ref={preloaderRef} className="preloader">
      <div className="preloader-content">
        {/* Logo/Brand */}
        <div className="preloader-brand">
          <h1>OCEANFLO</h1>
          <p>Loading...</p>
        </div>

        {/* Progress Bar */}
        <div className="preloader-progress">
          <div
            ref={progressRef}
            className="preloader-progress-bar"
            style={{ width: "0%" }}
          />
        </div>

        {/* Percentage */}
        <div className="preloader-percentage">
          <span ref={percentageRef}>0</span>%
        </div>
      </div>
    </div>
  );
};

export default Preloader;
