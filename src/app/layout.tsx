/**
 * Copyright (c) 2025 Oceanflo. Licensed under the MIT License. See LICENSE.
 */

import type { Metadata } from "next";
import "./styles/globals.css";
import { BannerProvider } from "../contexts/BannerContext";
import SmoothScroll from "../components/SmoothScroll";
import BackToTop from "../components/BackToTop";
import Preloader from "../components/Preloader";

export const metadata: Metadata = {
  title: "Oceanflo",
  description: "Welcome to Oceanflo - We are opening soon",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <BannerProvider>
          <Preloader />
          <SmoothScroll />
          {children}
          <BackToTop />
        </BannerProvider>
      </body>
    </html>
  );
}
