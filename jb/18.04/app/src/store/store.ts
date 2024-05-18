import { configureStore } from "@reduxjs/toolkit"
import userNameReducer from "../featurers/useNameSlice"


export const store = configureStore({
    reducer:{
        name: userNameReducer
    }
})

