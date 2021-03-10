import React, { useContext } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = (props) => {
  const { data } = props;
  const mapStyles = {
    height: '500px',
    with: '100%',
  };
  const defaultCenter = { lat: data.lat, lng: data.lng };
  return (
    <LoadScript googleMapsApiKey='AIzaSyAVOOLZ39sSqJsULpetBT-dSYgF84qpwuQ'>
      <GoogleMap mapContainerStyle={mapStyles} zoom={9} center={defaultCenter}>
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
