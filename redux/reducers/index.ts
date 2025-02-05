import { combineSlices } from '@reduxjs/toolkit';
import { restaurantSlice } from '../modules/restaurants';

// `combineSlices` automatically combines the reducers using
// their `reducerPath`s, therefore we no longer need to call `combineReducers`.
const rootReducer = combineSlices(restaurantSlice);
// Infer the `RootState` type from the root reducer
export type RootState = ReturnType<typeof rootReducer>;

