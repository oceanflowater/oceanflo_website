/**
 * Copyright (c) 2025 Oceanflo. Licensed under the MIT License. See LICENSE.
 */

"use client";

import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import { useBannerContext } from "../contexts/BannerContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { isBannerVisible } = useBannerContext();
  const menuRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const menuItemsRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Scroll detection for header visibility
  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Only handle header visibility when we're not at the very top
      // This prevents conflict with the announcement banner
      if (currentScrollY > 0) {
        // Show header when scrolling up or when not at the top
        if (currentScrollY < lastScrollY || currentScrollY < 100) {
          setIsHeaderVisible(true);
        }
        // Hide header when scrolling down and not at the top
        else if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setIsHeaderVisible(false);
        }
      } else {
        // At the very top, keep header visible
        setIsHeaderVisible(true);
      }

      setLastScrollY(currentScrollY);
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
  }, [lastScrollY]);

  // Animate header visibility and position
  useEffect(() => {
    if (headerRef.current) {
      // Determine header position based on banner visibility
      const targetY = isHeaderVisible ? 0 : "-100%";
      const targetTop = isBannerVisible ? "50px" : "0px";

      gsap.to(headerRef.current, {
        y: targetY,
        top: targetTop,
        duration: 0.15,
        ease: "power2.out",
      });
    }
  }, [isHeaderVisible, isBannerVisible]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    try {
      if (isMenuOpen) {
        // Show menu and prevent body scroll
        document.body.style.overflow = "hidden";

        if (menuRef.current) {
          gsap.set(menuRef.current, { display: "flex" });
          gsap.fromTo(
            menuRef.current,
            { opacity: 0 },
            {
              opacity: 1,
              duration: 0.3,
              ease: "power2.out",
            }
          );
        }

        // Animate menu items
        if (menuItemsRef.current && menuItemsRef.current.children.length > 0) {
          const items = menuItemsRef.current.children;
          gsap.fromTo(
            items,
            { y: 30, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.4,
              stagger: 0.1,
              delay: 0.1,
              ease: "power2.out",
            }
          );
        }

        // Animate hamburger to X
        if (hamburgerRef.current && hamburgerRef.current.children.length >= 3) {
          gsap.to(hamburgerRef.current.children[0], {
            rotation: 45,
            y: 6,
            duration: 0.3,
          });
          gsap.to(hamburgerRef.current.children[1], {
            opacity: 0,
            duration: 0.3,
          });
          gsap.to(hamburgerRef.current.children[2], {
            rotation: -45,
            y: -6,
            duration: 0.3,
          });
        }
      } else {
        // Restore body scroll
        document.body.style.overflow = "unset";

        // Close animation
        if (menuRef.current) {
          gsap.to(menuRef.current, {
            opacity: 0,
            duration: 0.2,
            ease: "power2.in",
            onComplete: () => {
              if (menuRef.current) {
                gsap.set(menuRef.current, { display: "none" });
              }
            },
          });
        }

        // Reset hamburger
        if (hamburgerRef.current && hamburgerRef.current.children.length >= 3) {
          gsap.to(hamburgerRef.current.children[0], {
            rotation: 0,
            y: 0,
            duration: 0.3,
          });
          gsap.to(hamburgerRef.current.children[1], {
            opacity: 1,
            duration: 0.3,
          });
          gsap.to(hamburgerRef.current.children[2], {
            rotation: 0,
            y: 0,
            duration: 0.3,
          });
        }
      }
    } catch (error) {
      console.error("GSAP animation error:", error);
    }
  }, [isMenuOpen]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  // Close menu when clicking on a link
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header ref={headerRef} className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="header-logo">
          <Link href="/" className="logo-link">
            oceanflo
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="header-nav">
          <Link href="/" className="nav-link">
            home
          </Link>
          <Link href="/about" className="nav-link">
            about
          </Link>
          <Link href="/products" className="nav-link">
            products
          </Link>
          <Link href="/contact" className="nav-link">
            contact
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          ref={hamburgerRef}
          className={`hamburger ${isMenuOpen ? "menu-open" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div ref={menuRef} className="mobile-menu">
        <div ref={menuItemsRef} className="mobile-menu-items">
          <Link href="/" className="mobile-nav-link" onClick={handleLinkClick}>
            HOME
          </Link>
          <Link
            href="/about"
            className="mobile-nav-link"
            onClick={handleLinkClick}
          >
            ABOUT
          </Link>
          <Link
            href="/products"
            className="mobile-nav-link"
            onClick={handleLinkClick}
          >
            PRODUCTS
          </Link>
          <Link
            href="/contact"
            className="mobile-nav-link"
            onClick={handleLinkClick}
          >
            CONTACTS
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
