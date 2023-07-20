import Link from "next/link";
import React from "react";

const Success = () => {
  return (
    <section className="flex flex-col items-center py-24">
      <h2 className="title">
        Thank you for your application!
        <br />
        We will reach out to you soon.
      </h2>
      <Link href="/" className="text-lg font-semibold">
        Back to Home
      </Link>
    </section>
  );
};

export default Success;
