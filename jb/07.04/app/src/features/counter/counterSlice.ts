import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface counterState{
    value:number
}

const initialState:counterState = {
    value:0
}

export const counterSlice= createSlice({
    name:"counter",
    initialState,
    reducers:{
        increment:(state)=>{
            state.value += 1
        
        },decrement:(state)=>{
            state.value -= 1
        },
        incrementByAmount:(state,actions:PayloadAction<number>)=>{
            state.value += actions.payload
        }
    }
})

export const {increment,decrement,incrementByAmount} = counterSlice.actions

export default counterSlice.reducer