import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export interface UpdateState{
 update: number
}

const initialState: UpdateState = {
  update: 0
}

export const UpdateSlice = createSlice({
    name: 'update',
    initialState,
    reducers:{
        Update: (state, action: PayloadAction<number>) => {
    state.update += action.payload
                }
            }
})

export const {Update} = UpdateSlice.actions

export default UpdateSlice.reducer