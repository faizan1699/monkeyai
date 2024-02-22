import React, { useEffect } from "react";

import L from "leaflet";
import "leaflet/dist/leaflet.css";

const EmployeLocation = () => {

    useEffect(() => {
        const map = L.map("map").setView([10.99835602, 77.01502627], 11);

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: '© OpenStreetMap contributors',
        }).addTo(map);

        L.marker([29.3858, 71.7557]).addTo(map)
            .bindPopup("The islamia university of Bahwalpur")
            .openPopup();
    }, []);

    return (
        <div className="card h-100">
            <h5 className="card-header">Resource Location</h5>

            <div className="card-body p-0">
                <div id="map" className="img-fluid w-100" style={{ height: "400px" }}></div>
            </div>

        </div>

    );
}

export default EmployeLocation;