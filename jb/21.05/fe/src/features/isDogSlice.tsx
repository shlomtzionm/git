
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'


interface IsDogState{
    isDog : boolean
}

const initialState: IsDogState = {
    isDog : true
}

export const isDogSlice = createSlice({
    name:"isDog",
    initialState,
    reducers:{
        changeIsDog:(state, action: PayloadAction<boolean>)=>{
            state.isDog = action.payload
        }
    }
})

export const { changeIsDog } = isDogSlice.actions


export const selectCount = (state: RootState) => state.isDog
export default isDogSlice.reducer


