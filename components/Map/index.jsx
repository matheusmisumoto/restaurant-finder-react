import React, { useState, useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setRestaurantDetails, setRestaurants } from '../../redux/modules/restaurants';

import {APIProvider, Map, useMapsLibrary, AdvancedMarker} from '@vis.gl/react-google-maps';

const debounce = (func, wait) => {
  let timeout;
  return function(...args) {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), wait);
  };
}

const SearchFromLocation = ({location, placeId}) => {
  const placesLib = useMapsLibrary('places');
  const dispatch = useDispatch();
  const places = useMemo(
    () => placesLib && new placesLib.PlacesService(document.createElement('div')),
    [placesLib]
  );

  useEffect(() => {
    if (!places) return;
    
    // Clean previous requests
    dispatch(setRestaurants([]));

    places.nearbySearch(
      {
        location: location,
        radius: 500,
        type: 'restaurant',
        maxResultCount: 5
      },
      (results, status) => {
        if (status === 'OK') {
          dispatch(setRestaurants(results));
        } else {
          console.error('Error fetching nearby restaurants');
        }
      }
    );
  }, [places, location]);

  useEffect(() => {
    if (!places || placeId == null) return;
    
    // Clean previous requests
    dispatch(setRestaurantDetails(null));

    places.getDetails(
      {
        placeId: placeId
      },
      (result, status) => {
        if (status === 'OK') {
          dispatch(setRestaurantDetails(result));
        } else {
          console.error('Error fetching restaurant details');
        }
      }
    );
  }, [places, placeId]);

  return null;
};

export default function MapContainer(props) {
  // Default location: Apple Park - Cupertino, CA - USA
  const [location, setLocation] = useState({ lat: 37.33490107543049, lng: -122.00916714760184 });
  const { restaurants } = useSelector((state) => state.restaurants)

  // Get user's geolocation
  const getUserGeolocation = (success, error) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      error(new Error("Geolocation is not supported by this browser."));
    }
  }

  // Get user's geolocation on component mount
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

  const handleDragEnd = debounce((map) => {
    const newCenter = map.detail.center;
    setLocation({
      lat: newCenter.lat,
      lng: newCenter.lng,
    });
  }, 1000);  

  return (
      <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY} onLoad={() => console.log('Maps API has loaded.')}>
        { location && (
          <>
            <Map
              style={{width: '100dvw', height: '100dvh'}}
              disableDefaultUI={true}
              defaultZoom={16}
              defaultCenter={location}
              gestureHandling={'greedy'}
              onCenterChanged={(map) => handleDragEnd(map)}
              mapId={'DEMO_MAP_ID'}
            />
            <SearchFromLocation location={location} placeId={props.placeId} />
          </>
        )}
        {
          restaurants.map((restaurant) => (
            <AdvancedMarker position={{ lat: restaurant.geometry.location.lat(), lng: restaurant.geometry.location.lng() }} key={restaurant.place_id} onMouseOver={(e) => alert(restaurant.name)} />
          ))
        }
      </APIProvider>
  );
};