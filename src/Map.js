import React from 'react'
import './Map.css'
// rename Map as LeafletMap
import { Map as LeafletMap, TileLayer } from "react-leaflet";

function Map() {
    return (
        <div className="map">
            <LeafletMap>
                   <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
            </LeafletMap>
            <h1>I am a Map</h1>
        </div>
    )
}

export default Map
