import React,{useState} from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function Maps() {
    const position = [5.8180393, -55.1984961]; // replace with your coordinates


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