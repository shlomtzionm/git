import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface settingState {
  counter: number; 
 name:string,
  value: string
}

const initialState: settingState = {
  counter: 0,
  name:"",
  value:""
};

export const settingSlice = createSlice({
    name: "setting",
    initialState,
    reducers: {
      plus(state, action: PayloadAction<number>) {
        state.counter += action.payload;
      },
      changeName: (state, action: PayloadAction<{ name: string; }>) => {
        state.name = action.payload.name;
      },  changeValue: (state, action: PayloadAction<{ value: string }>) => {
        state.value = action.payload.value as string;
      },
      setCounter:(state, action:PayloadAction<number>)=>{
        state.counter += action.payload
      }
    },
  });
  

export const { plus, changeName,changeValue,setCounter } = settingSlice.actions;
export default settingSlice.reducer;