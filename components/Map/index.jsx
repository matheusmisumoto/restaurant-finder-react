import React, { useState, useEffect } from 'react';

import {APIProvider, Map} from '@vis.gl/react-google-maps';


export default function MapContainer(props) {
    const [location, setLocation] = useState({ lat: 37.33490107543049, lng: -122.00916714760184 });

    const getUserGeolocation = (success, error) => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(success, error);
        } else {
          error(new Error("Geolocation is not supported by this browser."));
        }
      }

      useEffect(() => {
        getUserGeolocation(
          (position) => {
            setLocation({
              lat: position.coords.latitude,
              lng: position.coords.longitude
            });
          },
          (error) => {
            console.error("Error getting geolocation: ", error.message);
          }
        );
      }, []);

    return (
        <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY} onLoad={() => console.log('Maps API has loaded.')}>
            <Map
            style={{width: '100dvw', height: '100dvh'}}
            disableDefaultUI={true}
            defaultZoom={16}
            defaultCenter={location}
            />
        </APIProvider>
    );
};