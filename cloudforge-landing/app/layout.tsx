import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CloudForge | Build. Deploy. Scale.",
  description:
    "A full-stack web application hosted on AWS, with a frontend on S3 and a backend running on EC2.",
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
