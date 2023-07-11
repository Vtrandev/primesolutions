import React from "react";

const Footer = () => {
  return (
    <div id="footer" className="text-white text-sm bg-black py-3 md:py-10 md:text-base">
      <div className="flex justify-between mx-3 md:mx-16">

        <div className="flex flex-col p-2">
          <h1 className="font-bold mb-2">PrimeSolutions Financing</h1>
          <p className="mb-2">Visit Us!</p>
          <div className="flex flex-col md:flex-row">
            <span className="mr-2 mb-2">Instagram</span>
            <span className="mr-2 mb-2">Facebook</span>
            <span className="mr-2 mb-2">Tiktok</span>
          </div>
        </div>

        <div className="flex flex-col p-2">
          <h1 className="font-bold mb-2">Contact</h1>
          <span className="mb-2">Address, Langley, BC V3V 585</span>
          <span className="mb-2">604-123-4567</span>
          <span className="mb-2">email@primesolutions.com</span>
        </div>

      </div>
    </div>
  );
};

export default Footer;
