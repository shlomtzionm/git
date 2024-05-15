import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface listState {
  [name: string]: string;
  counter: number;
}

const initialState: listState = {
  counter: 0,
};

export const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<{ name: string; value: string }>) {
      const { name, value } = action.payload;
      if (!state[name]) {
        state[name] = value;
      } else {
        alert("The task name is already taken");
      }
    },

    removeItem(state, action: PayloadAction<string>) {
      delete state[action.payload];
    },

    editItem(state, action: PayloadAction<{ name: string; value: string }>) {
      const { name, value } = action.payload;
      if (state[name]) {
        state[name] = value; 
      } else {
        alert("The task name does not exist");
      }
    },
    setCounter:(state, action:PayloadAction<number>)=>{
      state.counter = action.payload
    }
  },
});

export const { addItem, removeItem, editItem,setCounter } = listSlice.actions;
export default listSlice.reducer;
