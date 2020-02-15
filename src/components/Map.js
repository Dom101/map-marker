import React, { useState } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

import env from '../libs/env';

function MapContainer(props) {

  const [activeMarker, setActiveMarker] = useState();
  const [isInfoOpen, setIsInfoOpen] = useState(false);

  const markers = [
    {
      name: 'Åland Islands',
      capital: 'Mariehamn',
      latitude: 60.116667,
      longitude: 19.9
    },
    {
      name: 'Albania',
      capital: 'Tirana',
      latitude: 41,
      longitude: 20
    },
    {
      name: 'Andorra',
      capital: 'Andorra la Vella',
      latitude: 42.5,
      longitude: 1.5
    },
    {
      name: 'Austria',
      capital: 'Vienna',
      latitude: 47.33333333,
      longitude: 13.33333333
    },
    {
      name: 'Belarus',
      capital: 'Minsk',
      latitude: 53,
      longitude: 28
    },
  ];

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