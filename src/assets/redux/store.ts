import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import homeReducer from './homeSlice';
import racesReducer from './racesSlice'
import classesReducer from './classesSlice'

export const store = configureStore({
  reducer: {
    races: racesReducer,
    home: homeReducer,
    classes: classesReducer,
  },
});
type TAppDispatch = typeof store.dispatch
export type TAppState = ReturnType<typeof store.getState>

export const useAppDispatch = () => useDispatch<TAppDispatch>();
export const useAppSelector: TypedUseSelectorHook<TAppState> = useSelector;