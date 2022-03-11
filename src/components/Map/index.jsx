import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';

import { setRestaurantDetails, setRestaurants } from '../../redux/modules/restaurants';

export const MapContainer = (props) => {
    const dispatch = useDispatch();
    const { restaurants } = useSelector((state) => state.restaurants)
    const { google, query, placeId } = props;
    const [map, setMap] = useState(null);

    function searchNearby(map, center) {
        const service = new google.maps.places.PlacesService(map);

        // Clean previous requests
        dispatch(setRestaurants([]));

        const request = {
            location: center,
            radius: '500',
            type: ['restaurant']
        }

        service.nearbySearch(request, (results, status) => {
            if(status === google.maps.places.PlacesServiceStatus.OK){
                dispatch(setRestaurants(results));
            }
        });
    }

    useEffect(() => {
        if (query) {
            function searchByQuery(query) {
                const service = new google.maps.places.PlacesService(map);
        
                // Clean previous requests
                dispatch(setRestaurants([]));
        
                const request = {
                    location: map.center,
                    radius: '2000',
                    type: ['restaurant'],
                    query
                }
        
                service.textSearch(request, (results, status) => {
                    if(status === google.maps.places.PlacesServiceStatus.OK){
                        console.log(request);
                        dispatch(setRestaurants(results));
                    }
                });
            }
            searchByQuery(query);
        }
    }, [query, dispatch, google.maps.places, map])

    useEffect(() => {
        if (placeId) {
            function getRestaurantDetails(placeId) {
                const service = new google.maps.places.PlacesService(map);
        
                // Clean previous requests
                dispatch(setRestaurantDetails(null));
        
                const request = {
                    placeId,
                    fields: [
                        'name',
                        'opening_hours',
                        'formatted_address',
                        'formatted_phone_number',
                        'international_phone_number'
                    ]
                }
        
                service.getDetails(request, (place, status) => {
                    if(status === google.maps.places.PlacesServiceStatus.OK){
                        dispatch(setRestaurantDetails(place));
                    }
                });
            }
            getRestaurantDetails(placeId)
        }
    }, [placeId, dispatch, google.maps.places, map])

    function onMapReady(_, map) {
        setMap(map);
        searchNearby(map, map.center)
    }

    return (
        <Map 
            google={google}
            centerAroundCurrentLocation={true}
            onReady={onMapReady}
            onRecenter={onMapReady}
            onDragend={onMapReady}
            {...props}
        >
            {restaurants.map((restaurant) => (
                <Marker 
                    key={restaurant.place_id} 
                    title={restaurant.name}
                    name={restaurant.name}
                    position={
                        {
                            lat: restaurant.geometry.location.lat(),
                            lng: restaurant.geometry.location.lng()
                        }
                    }
                />
            ))}
        </Map>
    );
};

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  language: 'en-US'
})(MapContainer)