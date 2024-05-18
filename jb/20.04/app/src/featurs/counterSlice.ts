import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Counter {
  counterName: string;
  count: number;
}

export interface CounterState {
  counters: Counter[];
}

const initialState: CounterState = {
  counters: [],
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addCounter: (state, action: PayloadAction<string>) => {
      const counterName = action.payload.trim();
      if (!counterName) return; 
      const existingCounter = state.counters.find(counter => counter.counterName === counterName);
      if (existingCounter) {
        alert('Counter name already exists');
        return;
      }
      state.counters.push({ counterName, count: 0 });
    },
    decrement: (state, action: PayloadAction<string>) => {
      const counter = state.counters.find(counter => counter.counterName === action.payload);
      if (counter) counter.count--;
    },
    increment: (state, action: PayloadAction<string>) => {
      const counter = state.counters.find(counter => counter.counterName === action.payload);
      if (counter) counter.count++;
    },
  },
});

export const { addCounter, increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
