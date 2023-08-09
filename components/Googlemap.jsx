
import React from "react";

const Googlemap = () => {
  return (
    <div className="w-full h-[400px] mb-10 bg-gray-400">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2611.9445634804774!2d-122.68718249999999!3d49.1066936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485d020db255555%3A0x7ce60d79752a5645!2s19335%20Langley%20Bypass%20Suite%20110A%2C%20Surrey%2C%20BC%20V3S%206K1!5e0!3m2!1sen!2sca!4v1691605322903!5m2!1sen!2sca"
          className="w-full h-full"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
    </div>
  );
};

export default Googlemap;
