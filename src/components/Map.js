import React, { useState } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

import env from '../libs/env';

function MapContainer(props) {

  const [activeMarker, setActiveMarker] = useState();
  const [isInfoOpen, setIsInfoOpen] = useState(false);


  const onMarkerClicked = (props, marker) => {
    if (isInfoOpen) {
      setActiveMarker(null);
      return setIsInfoOpen(false)
    }
    setActiveMarker(marker);
    setIsInfoOpen(true);
  };

  return (
    <Map
      google={props.google}
      zoom={8}
      style={mapStyles}
      initialCenter={{ lat: 47.444, lng: -122.176 }}
    >
      <Marker title="test" position={{ lat: 48.00, lng: -122.00 }} onClick={onMarkerClicked} />
      <InfoWindow
        marker={activeMarker}
        visible={isInfoOpen}>
        <div>
          TEST PLACE
        </div>
      </InfoWindow>
    </Map>
  );
}

const mapStyles = {
  width: '100%',
  height: '100%',
};

export default GoogleApiWrapper({
  apiKey: env.get('REACT_APP_GOOGLE_API_KEY')
})(MapContainer);