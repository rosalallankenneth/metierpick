import React, { useEffect } from "react";
import "leaflet/dist/leaflet.css";
import { region9GeoData } from "../data/region9Geo";
import { region10GeoData } from "../data/region10Geo";
import { region11GeoData } from "../data/region11Geo";
import { region12GeoData } from "../data/region12Geo";
import { region13GeoData } from "../data/region13Geo";
import { region14GeoData } from "../data/region14Geo";

import { MapContainer, TileLayer } from "react-leaflet";
import ProvinceShapes from "./ProvinceShapes";
import { enrolleesData } from "../data/enrollees";
import InfoPopup from "./InfoPopup";

const centerLoc = [7.8232, 124.4198];
const geoData = [
  region9GeoData,
  region10GeoData,
  region11GeoData,
  region12GeoData,
  region13GeoData,
  region14GeoData
];

const LeafletMap = props => {
  const { pathSelect, ifModalOpen } = props;
  const pathEnrollees = enrolleesData.filter(p => p.PSCED_Name === pathSelect);
  const sortedEnrollees = pathEnrollees.sort((a, b) =>
    parseInt(a.Enrollment) > parseInt(b.Enrollment)
      ? 1
      : parseInt(b.Enrollment) > parseInt(a.Enrollment)
      ? -1
      : 0
  );
  const highestEnrollees = sortedEnrollees[sortedEnrollees.length - 1];

  const [openPopup, setOpenPopup] = React.useState(false);
  const [province, setProvince] = React.useState("");
  const [region, setRegion] = React.useState("");
  const [path, setPath] = React.useState("");
  const [enrollees, setEnrollees] = React.useState(0);
  const [mapKey, setMapKey] = React.useState(Math.random());

  const handleOpenPopup = () => {
    if (ifModalOpen) {
      setOpenPopup(true);
    }
  };
  const handleClosePopup = () => {
    setOpenPopup(false);
  };

  useEffect(() => {
    setMapKey(Math.random());
  }, [pathSelect]);

  return (
    <>
      <InfoPopup
        open={openPopup}
        handleClose={handleClosePopup}
        path={path}
        enrollees={enrollees}
        province={province}
        region={region}
      />
      <MapContainer
        key={mapKey}
        center={centerLoc}
        zoom={8}
        style={{ width: "100%", height: "100%" }}
        minZoom={7}
        // dragging={false}
      >
        {/* <TileLayer
          url="https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=4uThU4o90RRvKR2XeMf9"
          attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
        /> */}
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {geoData.map(data => (
          <ProvinceShapes
            key={data.id}
            regionData={data}
            highestEnrollees={highestEnrollees}
            handleOpenPopup={handleOpenPopup}
            options={{ setProvince, setPath, setEnrollees, setRegion }}
          />
        ))}
      </MapContainer>
    </>
  );
};

export default LeafletMap;
