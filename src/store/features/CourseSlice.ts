import { Course } from '@/sharedTypes/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type initialStateType = {
  allCourses: Course[];
};

const initialState: initialStateType = {
  allCourses: [],
};

const CourseSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    setAllCourses: (state, action: PayloadAction<Course[]>) => {
      state.allCourses = action.payload;
    },
  },
});

export const { setAllCourses } = CourseSlice.actions;
export const CourseSliceReducer = CourseSlice.reducer;
