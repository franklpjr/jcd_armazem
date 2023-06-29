import React from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function Mapa(){
  const defaultProps = {
    center: {
      lat: -3.1765773856756327,
      lng: -60.11379391182524
    },
    zoom: 14
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '40vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBh7prLsV99429tnwBek-aVYA2-jCcRcc0" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
}