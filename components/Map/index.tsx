import { useState, useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RestaurantDetails, RestaurantList } from '../../redux/interface';

import { APIProvider, Map, useMapsLibrary } from '@vis.gl/react-google-maps';
import { Marker } from '../Marker';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { selectRestaurants, setRestaurantDetails, setRestaurants } from '@/redux/modules/restaurants';

const debounce = (func: (...args: any[]) => void, wait: number) => {
  let timeout: ReturnType<typeof setTimeout> | null;
  return function(this: any, ...args: any[]) {
    const context = this;
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => func.apply(context, args), wait);
  };
};

const SearchFromLocation = ({location, placeId, query}: {location:  google.maps.LatLng | google.maps.LatLngLiteral, placeId: string | null, query: string}) => {
  const placesLib = useMapsLibrary('places');
  const dispatch = useAppDispatch();
  const [places, setPlaces] = useState<google.maps.places.PlacesService | undefined>();

  useEffect(() => {
    if (placesLib) {
      setPlaces(new placesLib.PlacesService(document.createElement('div')));
    }
  }, [placesLib]);

  const sanitizeList = (results: google.maps.places.PlaceResult[]): RestaurantList[] => {
    return results.map((restaurant: google.maps.places.PlaceResult) => ({
      place_id: restaurant.place_id,
      name: restaurant.name,
      vicinity: restaurant.vicinity,
      photo_url: restaurant.photos && restaurant.photos.length > 0 ? restaurant.photos[0].getUrl() : null,
      geometry: {
        location: {
          lat: restaurant.geometry?.location?.lat(),
          lng: restaurant.geometry?.location?.lng()
        }
      }
    }));
  }

  const sanitizeDetails = (result: google.maps.places.PlaceResult): RestaurantDetails => {
    return {
      place_id: result.place_id,
      name: result.name,
      vicinity: result.vicinity,
      formatted_phone_number: result.formatted_phone_number,
      international_phone_number: result.international_phone_number,
      photo_url: result.photos && result.photos.length > 0 ? result.photos[0].getUrl() : null,
      rating: result.rating,
      price_level: result.price_level,
      is_open: result.opening_hours?.isOpen(),
      geometry: {
        location: {
          lat: result.geometry?.location?.lat(),
          lng: result.geometry?.location?.lng()
        }
      }
    };
  }

  // Search by nearby restaurants on location change
  useEffect(() => {
    if (!places) return;
    
    // Clean previous requests
    dispatch(setRestaurants([] as any));

    places.nearbySearch(
      {
        location: location,
        radius: 500,
        type: 'restaurant',
      },
      (results: google.maps.places.PlaceResult[] | null, status) => {
        if (status === 'OK' && results) {	
          dispatch(setRestaurants(sanitizeList(results)));
        } else {
          console.error('Error fetching nearby restaurants');
        }
      }
    );
  }, [places, location]);


  useEffect(() => {
    if (!places || !query) return;
    
    // Clean previous requests
    dispatch(setRestaurants([]));

    places.textSearch(
      {
        location: location,
        query: query,
        radius: 500,
        type: 'restaurant',
      },
      (results: google.maps.places.PlaceResult[] | null, status) => {
        if (status === 'OK' && results) {
          dispatch(setRestaurants(sanitizeList(results)));
        } else {
          console.error('Error fetching nearby restaurants by query');
        }
      }
    );
  }, [places, query]);

  // Fetch restaurant details on placeId change
  useEffect(() => {
    if (!places || placeId == null) return;
    
    // Clean previous requests
    dispatch(setRestaurantDetails({} as any));

    places.getDetails(
      {
        placeId: placeId
      },
      (result: google.maps.places.PlaceResult | null, status) => {
        if (status === 'OK' && result) {
          dispatch(setRestaurantDetails(sanitizeDetails(result)));
        } else {
          console.error('Error fetching restaurant details');
        }
      }
    );
  }, [places, placeId]);

  return null;
};

export default function MapContainer(props: {placeId: string | null, query: string}) {
  const [location, setLocation] = useState<{ lat: number; lng: number } | undefined>(undefined);
  const [placeId, setPlaceId] = useState<string | null>(props.placeId);
  const restaurants = useAppSelector(selectRestaurants);

  // Get user's geolocation
  const getUserGeolocation = (success: PositionCallback, error: PositionErrorCallback) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      error({
        code: 0,
        message: "Geolocation is not supported by this browser.",
        PERMISSION_DENIED: 1,
        POSITION_UNAVAILABLE: 2,
        TIMEOUT: 3
      } as GeolocationPositionError);
    }
  }

  // Sync placeId from props and state
  useEffect(() => {
    setPlaceId(props.placeId);
  }, [props.placeId, placeId]);

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

  const handleMarkerClick = (placeId: string, restaurant: RestaurantDetails) => {
    if(placeId === restaurant.place_id) {
      setPlaceId(null);
    } else {
      setPlaceId(restaurant?.place_id ?? null);
    }
  }

  return (
      <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY || ''} onLoad={() => console.log('Maps API has loaded.')}>
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
              mapId={process.env.NEXT_PUBLIC_GOOGLE_MAPS_ID}
            />
            <SearchFromLocation location={location} placeId={placeId} query={props.query} />
          </>
        )}
        {
          restaurants.map((restaurant: RestaurantList) => (
            <Marker 
              position={{ lat: restaurant.geometry.location.lat ?? 0, lng: restaurant.geometry.location.lng ?? 0 }} 
              restaurant={restaurant} 
              onClick={() => handleMarkerClick(placeId ?? '', restaurant)}
              key={restaurant.place_id} />
          ))
        }
      </APIProvider>
  );
};