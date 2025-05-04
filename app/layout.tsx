import type { Metadata } from "next";
import "./globals.css";
import Layout from "@/src/common/Layout";



export const metadata: Metadata = {
  title:{
    template: "%s - Trendcart online store",
    default: "Trendcart online store",
  },
  description:'Trendcart online store , Your one stop shop for all your needs'
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` font-poppins  antialiased  bg-shop-light-pink`}
      >
        <Layout>
        {children}

        </Layout>

      </body>
    </html>
  );
}
