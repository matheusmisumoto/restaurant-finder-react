export const Types = {
    SET_RESTAURANTS: 'restaurants/SET_RESTAURANTS',
    SET_RESTAURANT_DETAILS: 'restaurants/SET_RESTAURANT_DETAILS',
}

const initialState = {
    restaurants: [],
    restaurantSelected: null,    
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case Types.SET_RESTAURANTS:
            return { ...state, restaurants: action.payload };
        
        case Types.SET_RESTAURANT_DETAILS:
            return { ...state, restaurantSelected: action.payload };
            
        default:
            return state;
    }
};

export function setRestaurants(restaurants) {
    return {
        type: Types.SET_RESTAURANTS,
        payload: restaurants,
    }
}

export function setRestaurantDetails(restaurants) {
    return {
        type: Types.SET_RESTAURANT_DETAILS,
        payload: restaurants,
    }
}