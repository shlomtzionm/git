import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface userNameState{
    value: {name:string,nickName:string}
}

const initialState: userNameState = {
    value: {name:"shlomtzion",nickName:"shlomtz"}
}


export const userNameSlice = createSlice({
    name:"userNickName",
    initialState,
    reducers:{
        setNickName: (state, action: PayloadAction<string>) => {
            state.value = { ...state.value, nickName: action.payload };
   
}
    }
})

export const {setNickName} = userNameSlice.actions

export default userNameSlice.reducer