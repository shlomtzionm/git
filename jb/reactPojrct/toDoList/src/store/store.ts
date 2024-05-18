import { configureStore } from "@reduxjs/toolkit";
import listReducer from '../featurs/listSlice'
import settingReducer from "../featurs/settingSlice"

export const store = configureStore({
  reducer: {
   list: listReducer,
   setting: settingReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;