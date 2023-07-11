import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import "@/styles/globals.css";

export const metadata = {
  title: "PrimeSolutions Financing",
  description: "Get approved for a loan!",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className="max-w-screen-2xl md:mx-14 xl:mx-auto">
        <main className="app">
          <Nav />

          {children}
          
          <Footer />
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
