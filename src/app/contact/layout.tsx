import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Oceanflo | Water Dealer Partnership Chandrapur Maharashtra",
  description:
    "Water dealership opportunities in Chandrapur. Competitive pricing, reliable supply. Located Bamni, Ballarpur, Maharashtra - 442701.",
  keywords:
    "water dealer partnership Chandrapur, dealer network Maharashtra, water distribution opportunities, Ballarpur water supplier, water dealership India",
  openGraph: {
    title: "Contact OceanFlo | Water Dealer Partnership Chandrapur",
    description:
      "Water dealership opportunities in Chandrapur. Competitive pricing, reliable supply. Located Bamni, Ballarpur, Maharashtra - 442701.",
    url: "https://oceanflo.xyz/contact",
  },
  twitter: {
    title: "Contact OceanFlo | Water Dealer Partnership Chandrapur",
    description:
      "Water dealership opportunities in Chandrapur. Competitive pricing, reliable supply. Located Bamni, Ballarpur, Maharashtra.",
  },
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
