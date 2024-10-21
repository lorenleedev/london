import type { Metadata } from "next";
import "./globals.css";
import { AntdRegistry } from '@ant-design/nextjs-registry';

export const metadata: Metadata = {
  title: "Between Jobs",
  description: "헤드헌터와 구직자를 연결합니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <AntdRegistry>{children}</AntdRegistry>
      </body>
    </html>
  );
}
