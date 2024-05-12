import { configureStore } from '@reduxjs/toolkit';
import gradesReducer from 'featurs\gradesSlice'

export const store = configureStore({
    reducer: {
        grades: gradesReducer 
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
