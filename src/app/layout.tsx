import type { Metadata } from "next";
import "../styles/fonts.css";
import "../styles/tailwind.css";
import "../styles/theme.css";

export const metadata: Metadata = {
  title: "Faheem Ahmed",
  description:
    "Portfolio of Faheem Ahmed, a Flutter Developer specializing in cross-platform mobile applications, modern UI design, and scalable software solutions.",
  robots: { index: false, follow: false },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
