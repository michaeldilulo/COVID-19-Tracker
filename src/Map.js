import React from 'react'
import './Map.css'
import {showDataOnMap} from "./util"
// Needed to import MapContainer instead of leafletMap, map shows
import { MapContainer, TileLayer } from "react-leaflet";

function Map({countries, casesType, center, zoom}) {
    return (
        <div className="map">
            <MapContainer center={center} zoom={zoom}>
                   <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {showDataOnMap(countries, casesType)}
            </MapContainer>
        </div>
    )
}

export default Map
