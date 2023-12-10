import React from "react";


export default function UserGuide(){
    return (
        <div style={{alignItems:"center",justifyContent:"left",textAlign:"left"}}>
        <h3>Toll Cost Calculator User Guide</h3>



<li style={{justifyContent:"left",alignItems:"left",fontSize:"20px"}}>Navigate to Map section.</li>
<li style={{justifyContent:"left",fontSize:"20px",alignItems:"left",}}>Click on the map to set your desired location.</li>


<h3> Calculate Toll Cost</h3>

<li style={{justifyContent:"left",fontSize:"20px",alignItems:"left",}}> After setting your location, the map will display a marker at the selected point.</li>
<li style={{justifyContent:"left",fontSize:"20px",alignItems:"left",}}>The toll cost will be calculated based on your selected location.</li>
<br />
<button style={{color:"white",backgroundColor:"blue",height:"40px",width:"150px"}} ><a style={{color:"white",textDecoration:"none",fontSize:"19px"}} href="/tollCalculator">Getting Started</a></button>

        </div>
    )
}