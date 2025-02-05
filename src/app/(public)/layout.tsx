import type { Metadata } from "next";
import "../globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/common/Header/Header";
import Footer from "@/components/common/Footer/Footer";
import { poppins } from "@/lib/fonts";
import { CartContextProvider } from "@/context/CartContext";



export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={poppins.className}
      >
        <ClerkProvider>
          <CartContextProvider>
            <div className="max-w-[1440px] mx-auto">
              <Header />
              {children}
              <Footer />

            </div>

          </CartContextProvider>

        </ClerkProvider>
      </body>
    </html>
  );
}
