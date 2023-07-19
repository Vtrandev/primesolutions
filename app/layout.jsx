import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import "@/styles/globals.css";
import Image from "next/image";
import backgroundImg from "../public/assets/BG.jpg";

export const metadata = {
  title: "PrimeSolutions Financing",
  description: "Get approved for a loan!",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <main className="app max-w-screen-2xl md:mx-14 xl:mx-auto">
          <Nav />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
