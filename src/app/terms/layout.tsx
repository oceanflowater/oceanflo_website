import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Terms & Conditions | OceanFlo Water Company Maharashtra",
  description: "Terms of service for OceanFlo water dealership partnerships and business operations in Maharashtra region.",
  keywords: "terms of service water company, dealership agreements Maharashtra, business compliance India, water company terms conditions",
  openGraph: {
    title: "Terms & Conditions | OceanFlo Water Company",
    description: "Terms of service for OceanFlo water dealership partnerships and business operations in Maharashtra region.",
    url: 'https://oceanflo.xyz/terms',
  },
  twitter: {
    title: "Terms & Conditions | OceanFlo Water Company",
    description: "Terms of service for OceanFlo water dealership partnerships and business operations in Maharashtra region.",
  },
  alternates: {
    canonical: '/terms',
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
