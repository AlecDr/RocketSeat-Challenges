import React from "react";
import ReactMapGL from "react-map-gl";

const map = props => {
  const MAP_TOKEN = process.env.MapboxAccessToken;
  return (
    <ReactMapGL
      mapStyle="mapbox://styles/mapbox/light-v10"
      mapboxApiAccessToken={MAP_TOKEN}
      onViewportChange={props.onViewportChange}
      {...props}
    />
  );
};

export default map;
