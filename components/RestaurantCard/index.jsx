import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";

import Skeleton from '../Skeleton';

import { Restaurant, RestaurantInfo, RestaurantName, RestaurantPhoto, RestaurantLocation } from './styles';

const RestaurantCard = ({ restaurant, onClick }) => {
    const [ imageLoaded, setImageLoaded ] = useState(false);

    
    const hasPhoto = (image, alt) => {
        if(image){
            return (
                <>
                    <RestaurantPhoto
                        imageLoaded={imageLoaded}
                        src={image[0].getUrl()}
                        alt={alt}
                        onLoad={() => setImageLoaded(true)}
                    />
                    {!imageLoaded && <Skeleton width="100px" height="100px" />}
                </>
            )
        }
    }
    
    return(
        <Restaurant onClick={onClick}>
            <RestaurantInfo>
                <RestaurantName>{restaurant.name}</RestaurantName>
                <RestaurantLocation>{restaurant.vicinity || restaurant.formatted_address}</RestaurantLocation>
            </RestaurantInfo>
            {hasPhoto(restaurant.photos, restaurant.name)}
        </Restaurant>
    )
};

export default RestaurantCard;