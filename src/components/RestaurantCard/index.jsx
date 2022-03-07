import React from "react";
import ReactStars from "react-rating-stars-component";

import { Restaurant, RestaurantInfo, RestaurantName, RestaurantAddress, RestaurantPhoto } from './styles';

import restaurant from "../../assets/restaurante-fake.png";

const RestaurantCard = () => (
    <Restaurant>
        <RestaurantInfo>
            <RestaurantName>Bubba Gump Shrimp Co.</RestaurantName>
            <ReactStars size={24} count={5} isHalf value={4} edit={false} activeColor="#e7711c" />
            <RestaurantAddress>301 Santa Monica Pier Building 9</RestaurantAddress>
        </RestaurantInfo>
        <RestaurantPhoto src={restaurant} alt="Foto do restaurante" />
    </Restaurant>
);

export default RestaurantCard;