import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const HomeMap = () => {
  return (
    <>
      <MapContainer
        center={[8.1624, 123.7741]}
        zoom={10}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[8.1624, 123.7741]}>
          <Popup>Data</Popup>
        </Marker>
      </MapContainer>
    </>
  );
};

export default HomeMap;