import React from 'react'
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { useEffect } from 'react';
import { iconUrlFromCode } from '../services/weatherServices';

function MapOl({weather:{lat,lon,icon}}) {
    useEffect(() => {
        new Map({
        target: 'olViewDiv',
        layers: [
            new TileLayer({
            source: new OSM()
            })
        ],
        view: new View({
            center: [0, 0],
            zoom: 2
        })
        });
    }, [lat,lon,icon]);

  return (
    <div id="olViewDiv" style={{width:"500px",height:"300px"}}></div>
  )
}

export default MapOl