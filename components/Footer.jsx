import React from "react";
import logoIMG from "../public/assets/logo.png";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="text-white text-sm bg-[#1F1F1F] 
    flex justify-between px-8 md:px-16 py-5 md:py-10  md:text-base"
    >
      <Link href="/" className="items-center">
        <Image
          src={logoIMG}
          alt="PrimeSolutions logo"
          style={{
            width: 60,
            height: 60,
          }}
          className="object-contain"
        />
      </Link>
      <div className="flex flex-col p-2">
        <h2 className="font-bold mb-2">PrimeSolutions Financing</h2>
        <p className="mb-2">Visit Us!</p>
        <div className="flex flex-col md:flex-row">
          <span className="mr-2 mb-2">Instagram</span>
          <span className="mr-2 mb-2">Facebook</span>
          <span className="mr-2 mb-2">Tiktok</span>
        </div>
        <p className="mb-2 text-sm">Copyright © 2023 PrimeSolutions. All Rights Reserved.</p>
      </div>

      <div className="flex flex-col p-2">
        <h2 className="font-bold mb-2">Contact</h2>
        <span className="mb-2">Address, Langley, BC V3V 585</span>
        <span className="mb-2">604-123-4567</span>
        <p className="mb-2">
          <a href="mailto:email@primesolutions.com">Email us</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
