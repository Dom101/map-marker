import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

import env from '../libs/env';

function MapContainer(props) {
  return (
    <Map
      google={props.google}
      zoom={8}
      style={mapStyles}
      initialCenter={{ lat: 47.444, lng: -122.176 }}
    />
  );
}

const mapStyles = {
  width: '100%',
  height: '100%',
};

export default GoogleApiWrapper({
  apiKey: env.get('REACT_APP_GOOGLE_API_KEY')
})(MapContainer);