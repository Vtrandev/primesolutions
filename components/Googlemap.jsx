"use client";

import React, { useMemo } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

const Googlemap = () => {

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.GOOGLEMAP_API_KEY,
  });
  const center = useMemo(() => ({ lat: 49.10666, lng: -122.68722 }), []);

  return (
    <div className="w-full h-[400px] bg-gray-400">
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          mapContainerClassName="w-full h-full"
          center={center}
          zoom={10}
        >
          <Marker position={{ lat: 49.10666, lng: -122.68722 }} />
        </GoogleMap>
      )}
    </div>
  );
};

export default Googlemap;
