import { createSlice, PayloadAction } from "@reduxjs/toolkit";




export interface GradeState{
 grades: {name:string,grade:number}[]
}

const initialState: GradeState = {
  grades: []
}

export const gradeSlice = createSlice({
    name: 'grades',
    initialState,
    reducers:{
        edit:(state, action: PayloadAction<{name:string,grade:number}>)=>{
            state.grades.forEach(item => {
                if (item.name===action.payload.name){
                    item.grade = action.payload.grade
                }
            });
        },
        setGrades: (state, action: PayloadAction<{name:string,grade:number}[]>) => {
            // Concatenate new grades with existing ones and filter out duplicates
            const newGrades = action.payload;
            const uniqueGrades = newGrades.filter(newGrade => !state.grades.find(existingGrade => existingGrade.name === newGrade.name));
            state.grades = [...state.grades, ...uniqueGrades];;
                 
                }
            }
})

export const {edit,setGrades} = gradeSlice.actions

export default gradeSlice.reducer