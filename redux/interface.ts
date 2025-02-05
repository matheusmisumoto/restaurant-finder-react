export interface RestaurantList {
    place_id?: string,
    name?: string,
    vicinity?: string,
    photo_url?: string | null,
    geometry: {
        location: {
            lat?: number,
            lng?: number
        }
    }
}

export interface RestaurantDetails {
    place_id?: string,
    name?: string,
    vicinity?: string,
    formatted_phone_number?: string,
    international_phone_number?: string,
    photo_url?: string| null,
    rating?: number,
    price_level?: number,
    is_open?: boolean,
    geometry: {
      location: {
        lat?: number,
        lng?: number
      }
    }
}