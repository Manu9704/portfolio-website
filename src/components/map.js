import React from "react";
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Ensure Leaflet styles are included
import './map.css'; // Import the CSS file

export default function MapComponent() {
  return (
    <div className="map-wrapper">
      <MapContainer className="map-container" center={[17.811200, 83.181526]} zoom={15} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  );
}
