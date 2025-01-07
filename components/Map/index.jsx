import { useState, useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setRestaurantDetails, setRestaurants } from '../../redux/modules/restaurants';

import { APIProvider, Map, useMapsLibrary } from '@vis.gl/react-google-maps';
import { Marker } from '../Marker';

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

    console.log(placeId);

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
  const [location, setLocation] = useState();
  const [placeId, setPlaceId] = useState(props.placeId);
  const { restaurants } = useSelector((state) => state.restaurants);
  const [openInfoWindowId, setOpenInfoWindowId] = useState(false);

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
        // Default location: Apple Park - Cupertino, CA - USA
        setLocation({ lat: 37.33490107543049, lng: -122.00916714760184 })
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
              clickableIcons={false}
              onCenterChanged={(map) => handleDragEnd(map)}
              mapId={'DEMO_MAP_ID'}
            />
            <SearchFromLocation location={location} placeId={placeId} />
          </>
        )}
        {
          restaurants.map((restaurant) => (
            <Marker 
              position={{ lat: restaurant.geometry.location.lat(), lng: restaurant.geometry.location.lng() }} 
              restaurant={restaurant} 
              isOpen={openInfoWindowId === restaurant.place_id} 
              onClick={() => setPlaceId(restaurant.place_id)}
              key={restaurant.place_id} />
          ))
        }
      </APIProvider>
  );
};