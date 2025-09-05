import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/Theme";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ayodele Toluwani - Portfolio",
  description:
    "Ayodele Toluwani - Full stack javaScript developer. Personal Website.",
  icons: [
    {
      rel: "icon",
      type: "image/svg+xml",
      url: "/Tolu.jpg",
      media: "(prefers-color-scheme: light)",
    },
    {
      rel: "icon",
      type: "image/svg+xml",
      url: "/Tolu.jpg",
      media: "(prefers-color-scheme: dark)",
    },
  ],
  metadataBase: new URL("https://toluwani-portfolio.vercel.app/"),
  openGraph: {
    title: "Ayodele Toluwani - Portfolio",
    description:
      "Ayodele Toluwani - Full stack javaScript developer. Personal Website.",
    url: "https://toluwani-portfolio.vercel.app/",
    siteName: "Ayodele Toluwani Portfolio",
    images: [
      {
        url: "/Tolu.jpg",
        width: 1200,
        height: 630,
        alt: "Ayodele Toluwani Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayodele Toluwani - Portfolio",
    description:
      "Full Stack JavaScript Developer showcasing projects and skills",

    creator: "@toluwani_dev",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          {children}
          <Toaster
            toastOptions={{
              classNames: {
                error: "bg-red-500",
                info: "bg-blue-400",
                success: "bg-teal-600",
                warning: "bg-orange-400",
                toast: "bg-blue-400",
                title: "text-white",
                description: "text-white",
                actionButton: "bg-zinc-400",
                cancelButton: "bg-orange-400",
                closeButton: "bg-lime-400",
                icon: "text-white",
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
