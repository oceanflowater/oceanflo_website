import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Privacy Policy | Oceanflo Data Protection & Customer Information Security",
  description:
    "OceanFlo privacy policy for customer data protection and contact information handling. GDPR compliant practices.",
  keywords:
    "privacy policy water company, data protection India, GDPR compliance, customer information security, contact data handling",
  openGraph: {
    title: "Privacy Policy | OceanFlo Data Protection",
    description:
      "OceanFlo privacy policy for customer data protection and contact information handling. GDPR compliant practices.",
    url: "https://oceanflo.xyz/privacy",
  },
  twitter: {
    title: "Privacy Policy | OceanFlo Data Protection",
    description:
      "OceanFlo privacy policy for customer data protection and contact information handling. GDPR compliant practices.",
  },
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
