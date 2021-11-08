import React from "react";
import "leaflet/dist/leaflet.css";
import { region9GeoData } from "../data/region9Geo";
import { region10GeoData } from "../data/region10Geo";
import { region11GeoData } from "../data/region11Geo";
import { region12GeoData } from "../data/region12Geo";
import { region13GeoData } from "../data/region13Geo";
import { region14GeoData } from "../data/region14Geo";

import { MapContainer, TileLayer } from "react-leaflet";
import ProvinceShapes from "./ProvinceShapes";

const centerLoc = [7.8232, 124.4198];

const LeafletMap = () => {
  return (
    <>
      <MapContainer
        center={centerLoc}
        zoom={7}
        style={{ width: "100%", height: "100%" }}
        minZoom={7}
      >
        <TileLayer
          url="https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=4uThU4o90RRvKR2XeMf9"
          attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
        />

        <ProvinceShapes regionData={region9GeoData} />
        <ProvinceShapes regionData={region10GeoData} />
        <ProvinceShapes regionData={region11GeoData} />
        <ProvinceShapes regionData={region12GeoData} />
        <ProvinceShapes regionData={region13GeoData} />
        <ProvinceShapes regionData={region14GeoData} />
      </MapContainer>
    </>
  );
};

export default LeafletMap;
