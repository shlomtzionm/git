import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface GradeState {
  grades: { name: string; grade: number }[];
}

const initialState: GradeState = {
  grades: [],
};

export const gradeSlice = createSlice({
  name: "grades",
  initialState,
  reducers: {
    edit: (state, action: PayloadAction<{ name: string; grade: number }>) => {
      state.grades.forEach((item) => {
        if (item.name === action.payload.name) {
          item.grade = action.payload.grade;
        }
      });
    },
    setGrades: (
      state,
      action: PayloadAction<{ name: string; grade: number }[]>
    ) => {
      const newGrades = action.payload;
      const uniqueGrades = newGrades.filter(
        (newGrade) =>
          !state.grades.find(
            (existingGrade) => existingGrade.name === newGrade.name
          )
      );
      state.grades = [...state.grades, ...uniqueGrades];
    },
    addName: (state, action: PayloadAction<{ name: string; grade: number }>) => {
      const { name, grade } = action.payload;
      if (!state.grades.some((item) => item.name === name)) {
        state.grades.push({ name, grade });
      }
    },
    deleteName: (state, action: PayloadAction<string>) => {
      state.grades = state.grades.filter((item) => item.name !== action.payload);
    },
  },
});

export const { edit, setGrades, addName, deleteName } = gradeSlice.actions;

export default gradeSlice.reducer;
