import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Oceanflo Water Products | 1L 500ml Mineral Water Bottles 20L Alkaline Jars",
  description:
    "1L & 500ml mineral water bottles, 20L alkaline jars. Manufacturing plant 80% complete. Daily lab testing, quality process.",
  keywords:
    "mineral water bottles India, alkaline water jars, 1L mineral water, 500ml water bottles, 20L water jar, PET bottle manufacturing, water quality process",
  openGraph: {
    title: "OceanFlo Water Products | Mineral & Alkaline Water",
    description:
      "1L & 500ml mineral water bottles, 20L alkaline jars. Manufacturing plant 80% complete. Daily lab testing, quality process.",
    url: "https://oceanflo.xyz/products",
  },
  twitter: {
    title: "OceanFlo Water Products | Mineral & Alkaline Water",
    description:
      "1L & 500ml mineral water bottles, 20L alkaline jars. Manufacturing plant 80% complete. Daily lab testing.",
  },
  alternates: {
    canonical: "/products",
  },
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
