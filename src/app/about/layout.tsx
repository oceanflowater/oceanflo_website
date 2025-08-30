import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Oceanflo | FSSAI & ISO Certified Water Company Maharashtra",
  description:
    "FSSAI & ISO compliant water manufacturing. Daily lab testing, quality standards, dealer partnerships in Maharashtra. 80% plant ready.",
  keywords:
    "FSSAI water certification Maharashtra, ISO water company, water quality standards, daily lab testing, water manufacturing credibility, Maharashtra water company",
  openGraph: {
    title: "About OceanFlo | FSSAI & ISO Certified Water Company",
    description:
      "FSSAI & ISO compliant water manufacturing. Daily lab testing, quality standards, dealer partnerships in Maharashtra. 80% plant ready.",
    url: "https://oceanflo.xyz/about",
  },
  twitter: {
    title: "About OceanFlo | FSSAI & ISO Certified Water Company",
    description:
      "FSSAI & ISO compliant water manufacturing. Daily lab testing, quality standards, dealer partnerships in Maharashtra.",
  },
  alternates: {
    canonical: "/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
