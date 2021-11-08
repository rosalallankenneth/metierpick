import React from "react";
import { GeoJSON } from "react-leaflet";

const ProvinceShapes = ({ regionData }) => {
  const styles = {
    provShape: {
      fillColor: "green",
      fillOpacity: 0.8,
      color: "#000",
      weight: 2
    }
  };

  const changeStyleOnHover = e => {
    e.target.setStyle({
      color: "black",
      fillColor: "yellow"
    });
  };

  const handleClickPopup = (province, layer) => {
    const provName = province.properties.PROVINCE;
    // const stats = province.properties.statistics;
    // console.log(stats);
    //const provName = province.properties.enrolledData;
    layer.bindPopup(provName);
    layer.options.fillOpacity = Math.random();

    layer.on({
      mouseOver: changeStyleOnHover
    });
  };

  return (
    <>
      <GeoJSON
        style={styles.provShape}
        data={regionData}
        onEachFeature={handleClickPopup}
      />
    </>
  );
};

export default ProvinceShapes;
