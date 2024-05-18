import { configureStore } from '@reduxjs/toolkit';
import gradesReducer from '../src/features/gradesSlice.ts';
import UpdateReducer from './features/updateSlice.ts';

 export const store = configureStore({
    reducer: {
        grades: gradesReducer,
        update: UpdateReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
