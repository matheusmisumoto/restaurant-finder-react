import React from "react";
import {GoogleApiWrapper, Map, Marker } from 'google-maps-react';

export const MapContainer = (props) => {
    const { google } = props;

    return (
        <Map 
            google={google}
            centerAroundCurrentLocation={true}
        />
    );
};

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  language: 'en-US'
})(MapContainer)