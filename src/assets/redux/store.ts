import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import homeReducer from './homeSlice';


export const store = configureStore({
  reducer: {
    home: homeReducer,
  },
});
type TAppDispatch = typeof store.dispatch
export type TAppState = ReturnType<typeof store.getState>

export const useAppDispatch = () => useDispatch<TAppDispatch>();
export const useAppSelector: TypedUseSelectorHook<TAppState> = useSelector;