import React from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import icon from "../../assets/mapbox-icons/marker-15.svg";

const map = props => {
  const MAP_TOKEN = process.env.MapboxAccessToken;

  return (
    <ReactMapGL
      onClick={coords => props.onMapClickHandler(coords)}
      mapStyle="mapbox://styles/mapbox/light-v10"
      mapboxApiAccessToken={MAP_TOKEN}
      onViewportChange={props.onViewportChange}
      {...props}
    >
      {props.users.length
        ? props.users.map(user => (
            <Marker
              key={user.login}
              latitude={user.latitude}
              longitude={user.longitude}
            >
              <img src={icon} />
            </Marker>
          ))
        : null}
    </ReactMapGL>
  );
};

export default map;
