import React, { useState, useContext } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

import MarkersContext from '../contexts/markers/Context';
import env from '../libs/env';

function MapContainer(props) {

  const [activeMarker, setActiveMarker] = useState();
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const { markers } = useContext(MarkersContext);

  const onMarkerClicked = (props, marker) => {
    if (isInfoOpen) {
      setActiveMarker(null);
      return setIsInfoOpen(false)
    }
    setActiveMarker(marker);
    setIsInfoOpen(true);
  };

  function displayMarkers() {
    return markers.map((marker, i) =>
      <Marker
        key={i}
        title={marker.name}
        position={{ lat: marker.latitude, lng: marker.longitude }}
        onClick={onMarkerClicked}
      />
    );
  }

  return (
    <Map
      google={props.google}
      zoom={2}
      style={mapStyles}
      initialCenter={{ lat: 30, lng: 0 }}
    >
      {displayMarkers()}
      <InfoWindow
        marker={activeMarker}
        visible={isInfoOpen}>
        <div>
          {activeMarker ? activeMarker.title : ''}
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