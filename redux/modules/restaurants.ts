import { createAppSlice } from "@/redux/createAppSlice";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RestaurantList, RestaurantDetails } from "../interface";

export interface RestaurantSliceState {
  list: RestaurantList[];
  selected: RestaurantDetails;
}

const initialState: RestaurantSliceState = {
    list: [],
    selected: {} as any,
};

// If you are not using async thunks you can use the standalone `createSlice`.
export const restaurantSlice = createAppSlice({
  name: "restaurants",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: (create) => ({
    setRestaurants: create.reducer((state, action: PayloadAction<RestaurantList[]>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.list = action.payload;
    }),
    // Use the `PayloadAction` type to declare the contents of `action.payload`
    setRestaurantDetails: create.reducer(
      (state, action: PayloadAction<RestaurantDetails>) => {
        state.selected = action.payload;
      },
    ),
  }),
  // You can define your selectors here. These selectors receive the slice
  // state as their first argument.
  selectors: {
    selectRestaurants: (restaurants) => restaurants.list,
    selectRestaurantDetails: (restaurants) => restaurants.selected,
  },
});

// Action creators are generated for each case reducer function.
export const { setRestaurants, setRestaurantDetails } =
  restaurantSlice.actions;

// Selectors returned by `slice.selectors` take the root state as their first argument.
export const { selectRestaurants, selectRestaurantDetails } = restaurantSlice.selectors;
