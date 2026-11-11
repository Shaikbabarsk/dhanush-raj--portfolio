
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dhanush Raj N | Critical Care Technologist",
  description:
    "Explore the professional portfolio of Dhanush Raj N, Critical Care Technologist Intern at Saveetha Medical College and Hospitals, Chennai.",
  keywords: [
    "Dhanush Raj N",
    "Critical Care Technologist",
    "Critical Care Technology",
    "Healthcare Portfolio",
    "Saveetha Medical College",
  ],
  openGraph: {
    title: "Dhanush Raj N | Professional Portfolio",
    description:
      "Critical Care Technologist Intern | Healthcare | Patient Care",
    type: "website",
  },
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
