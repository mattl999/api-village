import React, { useEffect } from "react";
import mapStyle from "./map-style";

function Map(props) {
  let mapDiv = React.createRef();

  let setMap = () => {
    if (props.lat && props.lng) {
      const location = { lat: props.lat, lng: props.lng };
      const map = new window.google.maps.Map(mapDiv.current, {
        zoom: props.zoom || 12,
        center: location,
        disableDefaultUI: false,
        styles: mapStyle,
      });
      new window.google.maps.Marker({ position: location, map: map });
    }
  };

  useEffect(() => {
    setMap();
    return () => {};
  });

  return <div ref={mapDiv} className="full"></div>;
}

export default Map;
