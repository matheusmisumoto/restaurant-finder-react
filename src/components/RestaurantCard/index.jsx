import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";

import Skeleton from '../Skeleton';

import { Restaurant, RestaurantInfo, RestaurantName, RestaurantAddress, RestaurantPhoto } from './styles';

import { placeholder } from '../../assets/restaurante-fake.png';

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
                    {!imageLoaded && <Skeleton width="100px" height="120px" />}
                </>
            )
        }
    }
    
    return(
        <Restaurant onClick={onClick}>
            <RestaurantInfo>
                <RestaurantName>{restaurant.name}</RestaurantName>
                <ReactStars size={18} count={5} isHalf value={restaurant.rating} edit={false} activeColor="#e7711c" />
                <RestaurantAddress>{restaurant.vicinity || restaurant.formatted_address}</RestaurantAddress>
            </RestaurantInfo>
            {hasPhoto(restaurant.photos, restaurant.name)}
        </Restaurant>
    )
};

export default RestaurantCard;