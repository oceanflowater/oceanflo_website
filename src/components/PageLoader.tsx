/**
 * Copyright (c) 2025 Oceanflo. Licensed under the MIT License. See LICENSE.
 */

'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const PageLoader = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Show loader when pathname changes (page transition)
    setIsLoading(true);
    setIsVisible(true);

    // Hide loader after a short delay to show the animation
    const timer = setTimeout(() => {
      setIsLoading(false);
      
      // Keep visible for a moment then fade out
      setTimeout(() => {
        setIsVisible(false);
      }, 300);
    }, 500);

    return () => clearTimeout(timer);
  }, [pathname]);

  // Show loader on initial page load
  useEffect(() => {
    setIsLoading(true);
    setIsVisible(true);

    const timer = setTimeout(() => {
      setIsLoading(false);
      
      setTimeout(() => {
        setIsVisible(false);
      }, 300);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`page-loader ${isLoading ? 'loading' : 'loaded'}`}>
      <div className="loader-container">
        <div className="spinner"></div>
      </div>
    </div>
  );
};

export default PageLoader;
