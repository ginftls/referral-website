import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'RefCodes Canada | Canadian Referral Codes & Sign-up Bonuses',
  description: 'Save money with the best Canadian referral codes and sign-up bonuses. Get free cash when you sign up for banking, telecom, and investing services.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}