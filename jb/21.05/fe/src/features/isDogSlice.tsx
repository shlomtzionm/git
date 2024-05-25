
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'


interface IsDogState{
    isDog : string,

}

const initialState: IsDogState = {
    isDog : "home page",

}

export const isDogSlice = createSlice({
    name:"isDog",
    initialState,
    reducers:{
        changeIsDog:(state, action: PayloadAction<string>)=>{
            state.isDog = action.payload
        },
    } 
   } )

export const { changeIsDog } = isDogSlice.actions


export const selectCount = (state: RootState) => state.isDog
export default isDogSlice.reducer


