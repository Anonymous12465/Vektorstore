import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admin Login - VektorStore',
  description: 'Admin login for VektorStore',
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminLoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}