import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import "@/styles/globals.css";

export const metadata = {
  title: "PrimeSolutions Financing",
  description: "Get approved for a loan! We are PrimeSolutions, dedicated to providing reliable financial solutions tailored to meet the diverse needs of our clients. With years of experience in the lending industry, we have established ourselves as a trusted and reputable institution and lender committed to helping individuals and businesses achieve their financial goals.",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <main className="app max-w-screen-2xl mx-2 xl:mx-auto">
          <Nav />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
