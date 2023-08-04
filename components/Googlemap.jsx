
import React from "react";

const Googlemap = () => {
  return (
    <div className="w-full h-[400px] mb-10 bg-gray-400">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2611.945549353158!2d-122.68982368724627!3d49.106674871247485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485ce2a84f7a523%3A0xa8f972454a84d05a!2sVancouver%20Auto%20Credit!5e0!3m2!1sen!2sca!4v1691183659702!5m2!1sen!2sca"
          className="w-full h-full"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
    </div>
  );
};

export default Googlemap;
