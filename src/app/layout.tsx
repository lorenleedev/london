import type { Metadata } from "next";
import "./globals.scss";
import { AntdRegistry } from '@ant-design/nextjs-registry';
import Navigation from "@/ui/components/organism/Navigation";
import Footer from "@/ui/components/organism/Footer";
import Layout from "@/ui/components/atom/Layout";

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
      <AntdRegistry>
        <Layout>
          <Navigation/>
          {children}
          <Footer/>
        </Layout>
      </AntdRegistry>
      </body>
    </html>
  );
}
