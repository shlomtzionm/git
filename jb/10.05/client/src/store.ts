import { configureStore } from '@reduxjs/toolkit';
import gradesReducer from '../src/features/gradesSlice.ts';

 export const store = configureStore({
    reducer: {
        grades: gradesReducer 
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
