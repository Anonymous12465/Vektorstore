import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - VektorStore Premium Fashion',
  description: 'Read VektorStore\'s privacy policy to understand how we collect, use, and protect your personal information when you shop with us.',
  openGraph: {
    title: 'Privacy Policy - VektorStore Premium Fashion',
    description: 'Read VektorStore\'s privacy policy to understand how we protect your personal information.',
    images: ['/images/banner1.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy - VektorStore Premium Fashion',
    description: 'Read VektorStore\'s privacy policy to understand how we protect your personal information.',
    images: ['/images/banner1.png'],
  },
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}