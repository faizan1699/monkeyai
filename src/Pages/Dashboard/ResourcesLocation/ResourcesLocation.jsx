import React from "react";

import map from './img.webp';
// import GoogleMapReact from 'google-map-react';

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap() {
  // const defaultProps = {
  //   center: {
  //     lat: 10.99835602,
  //     lng: 77.01502627
  //   },
  //   zoom: 11
  // };

  return (
    <div className="card h-100">
      <h5 className="card-header">Resource Location</h5>
      <div className="card-body p-0">
        {/* { 
          // Conditionally render based on the presence of the API key
          { key: "YOUR_DUMMY_GOOGLE_MAPS_API_KEY" } ? (
            <GoogleMapReact
              bootstrapURLKeys={{ key: "YOUR_DUMMY_GOOGLE_MAPS_API_KEY" }}
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}>
              <AnyReactComponent
                lat={10.99835602}
                lng={77.01502627}
                text="My Marker"
              />
            </GoogleMapReact>
          ) : (
            {map}
          )
        } */}
        <img className="img-fluid w-100" src={map} alt="" />
      </div>
    </div>
  );
}
