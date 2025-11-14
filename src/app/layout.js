import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://portfoliolio25.vercel.app/"),
  title: "2025©",
  description:
    "Creative Developer specializing in Web Development, Motion Website, and UI/UX. Someone who can always be relied on.",

  keywords: [
    "Raffa Hitipeuw",
    "Creative Developer",
    "Web Developer",
    "UI UX Designer",
    "Motion Website",
    "Frontend Developer",
    "Next.js Developer",
    "Portfolio",
  ],

  authors: [{ name: "Raffa Hitipeuw" }],
  creator: "Raffa Hitipeuw",
  publisher: "Raffa Hitipeuw",

  robots: "index, follow",

  alternates: {
    canonical: "https://portfoliolio25.vercel.app/",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfoliolio25.vercel.app/",
    siteName: "Raffa Hitipeuw — Portfolio",
    title: "Raffa Hitipeuw — Creative Developer",
    description:
      "Creative Developer specializing in Web Development, Motion Website, and UI/UX.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Raffa Hitipeuw Portfolio Preview",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Raffa Hitipeuw — Creative Developer",
    description:
      "Creative Developer specializing in Web Development, Motion Website, and UI/UX.",
    images: ["/og-image.png"],
  },

  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/android-icon-192x192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon-57x57.png", sizes: "57x57" },
      { url: "/apple-icon-60x60.png", sizes: "60x60" },
      { url: "/apple-icon-72x72.png", sizes: "72x72" },
      { url: "/apple-icon-76x76.png", sizes: "76x76" },
      { url: "/apple-icon-114x114.png", sizes: "114x114" },
      { url: "/apple-icon-120x120.png", sizes: "120x120" },
      { url: "/apple-icon-144x144.png", sizes: "144x144" },
      { url: "/apple-icon-152x152.png", sizes: "152x152" },
      { url: "/apple-icon-180x180.png", sizes: "180x180" },
    ],
    shortcut: "/favicon.ico",
  },

  manifest: "/manifest.json",

  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
