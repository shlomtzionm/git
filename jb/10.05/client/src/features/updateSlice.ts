import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export interface UpdateState{
 update: boolean
}

const initialState: UpdateState = {
  update: false
}

export const UpdateSlice = createSlice({
    name: 'update',
    initialState,
    reducers:{
        Update: (state, action: PayloadAction<boolean>) => {
    state.update = action.payload
                }
            }
})

export const {Update} = UpdateSlice.actions

export default UpdateSlice.reducer