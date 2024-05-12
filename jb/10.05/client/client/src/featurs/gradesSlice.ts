import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface GradesObj{
    name:string,grade:number
}

interface GradeState{
    GradesObj: GradesObj[]
}

const initialState: GradeState = {
  GradesObj: []
}

export const gradeSlice = createSlice({
    name: 'grades',
    initialState,
    reducers:{
        edit:(state, action: PayloadAction<{name:string,grade:number}>)=>{
            state.GradesObj.forEach(item => {
                if (item.name===action.payload.name){
                    item.grade = action.payload.grade
                }
            });
        }
    }
})

export const {edit} = gradeSlice.actions

export default gradeSlice.reducer