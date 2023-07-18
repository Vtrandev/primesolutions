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
        {/* <div className="background absolute w-full h-[50vh] -z-10"></div> */}

        <Image
          src={backgroundImg}
          alt="World background"
          loading="lazy"
          className="absolute bg-center top-[72px] w-full min-h-[20vh] -z-10 opacity-30"
        />

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
