import "../globals.css";
import Header from "@/components/common/Header/Header";
import Footer from "@/components/common/Footer/Footer";

export default function ProtectedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="max-w-[1440px] mx-auto">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
