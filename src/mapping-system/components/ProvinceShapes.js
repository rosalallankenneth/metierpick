import React, { useCallback, useRef, useEffect } from "react";
import { GeoJSON } from "react-leaflet";
import { useSelector } from "react-redux";

function useStableCallback(callback) {
  const callbackRef = useRef(callback);
  callbackRef.current = callback;

  const stableCallback = useCallback((...args) => {
    return callbackRef.current(...args);
  }, []);

  return stableCallback;
}

const ProvinceShapes = props => {
  const { regionData, highestEnrollees, handleOpenPopup, options } = props;
  const pathSelect = useSelector(state => state.map.pathSelect);

  useEffect(() => {}, [pathSelect]);

  const styles = {
    provShape: {
      fillColor: "green",
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

  const HandleClickPopup = (province, layer) => {
    const stats = province.properties.statistics;

    const stableDisplayStats = useStableCallback(() => {
      const provName = province.properties.PROVINCE;
      const region = province.properties.REGION;
      options.setProvince(provName);
      options.setRegion(region);
      options.setPath(pathSelect);
      const enrollees = stats.find(
        i => i.PSCED_Name.trim() === pathSelect.trim()
      );

      if (enrollees) {
        options.setEnrollees(enrollees.Enrollment);
        handleOpenPopup();
      } else {
        options.setEnrollees(0);
        handleOpenPopup();
      }
    });

    const setColor = useStableCallback(() => {
      const enrollees = stats.find(i => i.PSCED_Name === pathSelect);
      if (enrollees && highestEnrollees) {
        const current = parseInt(enrollees.Enrollment);
        const highest = parseInt(highestEnrollees.Enrollment);
        return current / highest;
      } else {
        return 0;
      }
    });

    // layer.bindPopup(provName);
    layer.options.fillOpacity = setColor();

    layer.on({
      mouseOver: changeStyleOnHover,
      click: stableDisplayStats
    });
  };

  return (
    <>
      <GeoJSON
        style={styles.provShape}
        data={regionData}
        onEachFeature={HandleClickPopup}
      />
    </>
  );
};

export default ProvinceShapes;
