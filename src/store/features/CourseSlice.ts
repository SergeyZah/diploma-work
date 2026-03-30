import { CourseType } from '@/sharedTypes/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type initialStateType = {
  allCourses: CourseType[];
  fetchIsLoading: boolean;
  fetchError: string;
  visibleAuthModal: boolean;
};

const initialState: initialStateType = {
  allCourses: [],
  fetchIsLoading: false,
  fetchError: '',
  visibleAuthModal: false,
};

const courseSlice = createSlice({
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
    setVisibleAuthModal: (state, action: PayloadAction<boolean>) => {
      state.visibleAuthModal = action.payload;
    },
  },
});

export const {
  setAllCourses,
  setFetchIsLoading,
  setFetchError,
  setVisibleAuthModal,
} = courseSlice.actions;
export const courseSliceReducer = courseSlice.reducer;
