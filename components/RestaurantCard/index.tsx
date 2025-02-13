import { useState } from "react";

import Skeleton from '../Skeleton';

import { Restaurant, RestaurantInfo, RestaurantName, RestaurantPhoto, RestaurantLocation } from './styles';
import { RestaurantList } from "@/redux/interface";

interface RestaurantProps {
    restaurant: RestaurantList;
    onClick: () => void;
}

const RestaurantCard = ({ restaurant, onClick }: RestaurantProps) => {
    const [ imageLoaded, setImageLoaded ] = useState(false);
    
    const hasPhoto = (image: string, alt: string) => {
        if(image){
            return (
                <>
                    <RestaurantPhoto
                        $imageloaded={imageLoaded}
                        src={image}
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
                <RestaurantLocation>{restaurant.vicinity}</RestaurantLocation>
            </RestaurantInfo>
            {hasPhoto(restaurant.photo_url ?? '', restaurant.name ?? '')}
        </Restaurant>
    )
};

export default RestaurantCard;