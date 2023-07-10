import React from "react";

const Footer = () => {
  return (
    <div id="footer" className="text-white bg-black py-10">
      <div className="flex justify-between mx-[120px]">
        <div>
          <h1 className="font-bold mb-2">PrimeSolutions Financing</h1>
          <p className="mb-2">Visit Us!</p>
          <div>
            <span className="mr-2">Instagram</span>
            <span className="mr-2">Facebook</span>
            <span className="mr-2">Tiktok</span>
          </div>
        </div>

        <div className="flex flex-col">
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
