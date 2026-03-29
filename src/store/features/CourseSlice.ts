import { CourseType } from '@/sharedTypes/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type initialStateType = {
  allCourses: CourseType[];
  fetchIsLoading: boolean;
  fetchError: string;
};

const initialState: initialStateType = {
  allCourses: [],
  fetchIsLoading: false,
  fetchError: '',
};

const CourseSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    setAllCourses: (state, action: PayloadAction<CourseType[]>) => {
      state.allCourses = action.payload;
    },
    setFetchIsLoading: (state, action: PayloadAction<boolean>) => {
      state.fetchIsLoading = action.payload;
    },
    setFetchError: (state, action: PayloadAction<string>) => {
      state.fetchError = action.payload;
    },
  },
});

export const { setAllCourses, setFetchIsLoading, setFetchError } =
  CourseSlice.actions;
export const CourseSliceReducer = CourseSlice.reducer;
