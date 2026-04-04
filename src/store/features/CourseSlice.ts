import { CourseType } from '@/sharedTypes/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type initialStateType = {
  allCourses: CourseType[];
  fetchIsLoading: boolean;
  fetchError: string;
  visibleAuthModal: boolean;
  visiblePopUser: boolean;
  selectedCourses: CourseType[];
  idSelectedCourses: string[];
};

const initialState: initialStateType = {
  allCourses: [],
  fetchIsLoading: false,
  fetchError: '',
  visibleAuthModal: false,
  visiblePopUser: false,
  selectedCourses: [],
  idSelectedCourses: [],
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
    setVisiblePopUser: (state, action: PayloadAction<boolean>) => {
      state.visiblePopUser = action.payload;
    },
    setSelectedCourses: (state, action: PayloadAction<CourseType[]>) => {
      state.selectedCourses = action.payload;
    },
    setIdSelectedCourses: (state, action: PayloadAction<string[]>) => {
      state.idSelectedCourses = action.payload;
    },
  },
});

export const {
  setAllCourses,
  setFetchIsLoading,
  setFetchError,
  setVisibleAuthModal,
  setVisiblePopUser,
  setSelectedCourses,
  setIdSelectedCourses,
} = courseSlice.actions;
export const courseSliceReducer = courseSlice.reducer;
