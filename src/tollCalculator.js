
import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup,useMapEvents} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import {Icon} from 'leaflet'
import icon from './icon.png';

const TollCalculator = () => {
    const [marker1Position, setMarker1Position] = useState(null);
    const [marker2Position, setMarker2Position] = useState(null);
    const [distance,setDistance] = useState(null);
    const [tollValue,seTollValue] = useState(0);
  

  const calculateToll = () => {

    if (marker1Position && marker2Position) {
        // Calculate distance (using haversine formula)
        const R = 6371e3; // Earth radius in meters
        const lat1 = (marker1Position.lat * Math.PI) / 180;
        const lat2 = (marker2Position.lat * Math.PI) / 180;
        const deltaLat = ((marker2Position.lat - marker1Position.lat) * Math.PI) / 180;
        const deltaLng = ((marker2Position.lng - marker1Position.lng) * Math.PI) / 180;
  
        const a =
          Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
          Math.cos(lat1) * Math.cos(lat2) * Math.sin(deltaLng / 2) * Math.sin(deltaLng / 2);
  
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  
       const dst = R* c;
        setDistance(dst.toFixed(2));
      const toll = dst * 0.01; 
      seTollValue(toll.toFixed(2));
      alert(`Click 'Ok' to Calculate Tollcosts of these 2 locations..`);
    } else {
      alert('Please select both start and end positions!!');
    }
  };

  return (
    <div className="toll-calculator">
      <MapContainer center={[23.04386, 79.06112]} zoom={13} style={{ height: '400px', width: '50%' }}  >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
<MapClick marker1Position={marker1Position}
marker2Position={marker2Position}
setMarker1Position={setMarker1Position}
setMarker2Position={setMarker2Position} />

      </MapContainer>

<br />
<div>
{marker1Position && marker2Position ?
  <form style={{ height: '170px', width: '50%',alignItems:'left',textAlign:"left",justifyContent:"left" }}>
    <label style={{fontSize:"18px" }}>First Point :</label>
    <input type="text" value={marker1Position} style={{height:"40px",width:"270px",marginLeft:"14px"}}/>
<br />
<br />
    <label style={{fontSize:"18px" }}>Second Point :</label>
    <input type="text" value={marker2Position}  style={{height:"40px",width:"270px",marginLeft:"8px"}} />
<br />
<br />
  {distance ? <><label style={{fontSize:"18px" }}>Distance : </label>
    <input type="text" value={distance} style={{height:"40px",width:"270px",marginLeft:"8px"}} />
    </> :<></>}
    <br />
    <br />
    {tollValue ? <><label style={{fontSize:"18px" }}>Toll Cost : $</label>
    <input type="text" value={tollValue} style={{height:"40px",width:"270px",marginLeft:"8px"}} />
    </> :<></>}
  </form>
  : <></>}
</div>
      <button style={{backgroundColor:"blue",color:"white",height:"40px",width:"150px",fontSize:"20px",border:0,position:"absolute",top:"760px"}} onClick={calculateToll}>Calculate Toll</button>
    </div>
  );
};

export default TollCalculator;

export function MapClick({marker1Position,marker2Position,setMarker1Position,setMarker2Position}){
  const map =  useMapEvents({
        click(e) {
         
           
            if(!marker1Position){
               setMarker1Position(e.latlng)
            }
            else  setMarker2Position(e.latlng)
            map.flyTo(e.latlng, map.getZoom())
          },
})
return(
    <>
     {marker1Position && (
          <Marker position={marker1Position}  icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})}>
           {/* <Popup><img src={icon} alt='' style={{height:"20px",width:"20px"}} /> </Popup> */}
          </Marker>
        )}

{marker2Position && (
          <Marker position={marker2Position}   icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})}>
            {/* <Popup>Hii </Popup> */}
          </Marker>
        )}
    </>
)

};
