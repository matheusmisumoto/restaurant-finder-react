import React from "react";
import ReactStars from "react-rating-stars-component";

import { Restaurant, RestaurantInfo, RestaurantName, RestaurantAddress, RestaurantPhoto } from './styles';

import { placeholder } from '../../assets/restaurante-fake.png';

const hasPhoto = (image, alt) =>{
    if(image){
        return (
            <RestaurantPhoto src={image[0].getUrl()} alt={alt} />
        )
    }
}

const RestaurantCard = ({ restaurant }) => (
    <Restaurant>
        <RestaurantInfo>
            <RestaurantName>{restaurant.name}</RestaurantName>
            <ReactStars size={18} count={5} isHalf value={restaurant.rating} edit={false} activeColor="#e7711c" />
            <RestaurantAddress>{restaurant.vicinity || restaurant.formatted_address}</RestaurantAddress>
        </RestaurantInfo>
        {hasPhoto(restaurant.photos, restaurant.name)}
    </Restaurant>
);

export default RestaurantCard;