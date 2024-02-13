import React,{useState} from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css'; // Re-uses images from ~leaflet package
import * as L from 'leaflet';
import 'leaflet-defaulticon-compatibility';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';


function Maps() {
    const position = [5.8180393, -55.1984961]; // replace with your coordinates

    let DefaultIcon = L.icon({
        iconUrl: icon,
        shadowUrl: iconShadow,
        iconSize: [25, 41], // size of the icon
        iconAnchor: [12, 41], // point of the icon which will correspond to marker's location
        popupAnchor: [1, -34], // point from which the popup should open relative to the iconAnchor
        shadowSize: [41, 41] // size of the shadow
    });
    
    L.Marker.prototype.options.icon = DefaultIcon;
    


    const currentYear = new Date().getFullYear();
  
    return (
        <MapContainer center={position} zoom={20} scrollWheelZoom={false} dragging={false}  className=' xPc:w-[550px] phones:w-[80vw] phones:m-auto pc:h-[550px]'>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
                <Popup>
                    Nuirone © {currentYear}
                </Popup>
            </Marker>
        </MapContainer>
    );
}

export default Maps;