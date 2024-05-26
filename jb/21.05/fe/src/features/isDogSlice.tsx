
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'


interface IsDogState{
    isDog : string,
    addOrEdit: string

}

const initialState: IsDogState = {
    isDog : "home page",
addOrEdit : ""
}

export const isDogSlice = createSlice({
    name:"isDog",
    initialState,
    reducers:{
        changeIsDog:(state, action: PayloadAction<string>)=>{
            state.isDog = action.payload
        },
        addOrEdit:(state, action:PayloadAction<string>)=>{
            state.addOrEdit = action.payload
        }
    } 
   } )

export const { changeIsDog,addOrEdit } = isDogSlice.actions


export const selectCount = (state: RootState) => state.isDog
export default isDogSlice.reducer


