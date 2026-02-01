import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { UnifiedThemeProvider } from "@/lib/contexts/unified-theme-context";

// Design system CSS imports
import '@shopify/polaris/build/esm/styles.css';
import '@carbon/styles/css/styles.css';
import 'antd/dist/reset.css';
import '@primer/primitives/dist/css/functional/themes/light.css';
import '@primer/primitives/dist/css/functional/themes/dark.css';
import "./globals.css";

// Isolation CSS imports
import '@/styles/isolation/shadcn-isolation.css';
import '@/styles/isolation/mui-isolation.css';
import '@/styles/isolation/antd-isolation.css';
import '@/styles/isolation/chakra-isolation.css';
import '@/styles/isolation/primer-isolation.css';
import '@/styles/isolation/polaris-isolation.css';
import '@/styles/isolation/carbon-isolation.css';
import '@/styles/isolation/fluent-isolation.css';
import '@/styles/isolation/lightning-isolation.css';
import '@/styles/isolation/atlaskit-isolation.css';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Design System Comparator",
  description: "Side-by-side comparison of popular design systems",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <UnifiedThemeProvider>
          {children}
          <Toaster />
        </UnifiedThemeProvider>
      </body>
    </html>
  );
}
