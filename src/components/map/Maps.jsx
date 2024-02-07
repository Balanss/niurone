import React,{useState} from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function Maps() {
    const position = [5.8180393, -55.1984961]; // replace with your coordinates
    const [loading, setLoading] = useState(true);
  
    const handleMapLoad = (map) => {
      map.on('load', () => setLoading(false));
      map.on('unload', () => setLoading(true));
    };
  
    return (
        <MapContainer center={position} zoom={20} scrollWheelZoom={false} dragging={false}  className='phones:w-screen xPc:w-[550px] pc:h-[550px]'>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {/* <Marker position={position}>
                <Popup>
                    Nuirone © 2024
                </Popup>
            </Marker> */}
        </MapContainer>
    );
}

export default Maps;