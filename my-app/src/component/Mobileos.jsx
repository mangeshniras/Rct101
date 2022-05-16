import React from "react";
import Navbar from "./Navbar";

const MobileApp = () => {
    return (
        // <Navbar/>

       <div>
           <Navbar/>
            <div>
           <h2>Mobile Operating System</h2>
        <ul>
            <li>Android</li>
            <li>Blackberry</li>
            <li>iPhone</li>
            <li>Windows Phone</li>
        </ul>

        <h2>Mobile Manufacturers</h2>
        <ul>
            <li>Samsung</li>
            <li>HTC</li>
            <li>Micromax</li>
            <li>Apple</li>
        </ul>
        </div>
       </div>
    )
}

export default MobileApp;