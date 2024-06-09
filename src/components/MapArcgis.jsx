import React, { useEffect, useState } from "react";
import esriConfig from "@arcgis/core/config";
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import PictureMarkerSymbol from "@arcgis/core/symbols/PictureMarkerSymbol";
import { iconUrlFromCode } from '../services/weatherServices';

function MapArcgis({ weather: { lat, lon, icon } }) {
  const [view, setView] = useState(null);

  useEffect(() => {
    esriConfig.apiKey =
      "AAPKe1212b4d95e94b4ea89e583056811149j4Ch_LhofyiLwAcBzXpXGAoxBYJAx8-ZWGHWDwhS6NvYsNpOEqHUDKNxD-iGNHh0";
    const map = new Map({
      basemap: "arcgis-topographic",
    });
    const mapView = new MapView({
      container: "viewDiv",
      map: map,
      center: [77.58119997032259, 19.960216207745685],
      zoom: 5,
    });
    setView(mapView);
  }, []);

  useEffect(() => {
    if (view) {
      const markerSymbol = new PictureMarkerSymbol({
        url: iconUrlFromCode(icon),
        width: "40px",
        height: "40px",
      });
      view.graphics.add({
        symbol: markerSymbol,
        geometry: {
          type: "point",
          longitude: lon,
          latitude: lat,
        },
      });
      view.goTo({
        center: [lon, lat],
        zoom: 10,
      });
    }
  }, [lat, lon, icon, view]);

  return (
    <>
      <div id="viewDiv" className="h-96" style={{width:'100%'}}></div>
    </>
  );
}

export default MapArcgis;
