import {
  CourseProgressType,
  CourseType,
  WorkoutProgressType,
  WorksType,
} from '@/sharedTypes/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type initialStateType = {
  allCourses: CourseType[];
  fetchIsLoading: boolean;
  fetchError: string;
  visibleAuthModal: boolean;
  visiblePopUser: boolean;
  selectedCourses: CourseType[];
  selectedWorkout: WorksType | null;
  selectCoursName: string;
  selectCourseId: string;
  courseProgress: CourseProgressType | null;
  workoutProgress: WorkoutProgressType | null;
  courseWorkouts: WorksType[];
  idSelectedCourses: string[];
};

const initialState: initialStateType = {
  allCourses: [],
  fetchIsLoading: false,
  fetchError: '',
  visibleAuthModal: false,
  visiblePopUser: false,
  selectedCourses: [],
  selectedWorkout: null,
  selectCoursName: '',
  selectCourseId: '',
  courseProgress: null,
  workoutProgress: null,
  courseWorkouts: [],
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
    setSelectedCourses: (state, action: PayloadAction<CourseType[]>) => {
      state.selectedCourses = action.payload;
    },
    setIdSelectedCourses: (state, action: PayloadAction<string[]>) => {
      state.idSelectedCourses = action.payload;
    },
    setCourseWorkouts: (state, action: PayloadAction<WorksType[]>) => {
      state.courseWorkouts = action.payload;
    },
    setSelectedWorkout: (state, action: PayloadAction<WorksType>) => {
      state.selectedWorkout = action.payload;
    },
    setSelectCourseName: (state, action: PayloadAction<string>) => {
      state.selectCoursName = action.payload;
    },
    setSelectCourseId: (state, action: PayloadAction<string>) => {
      state.selectCourseId = action.payload;
      localStorage.setItem('selectCourseId', JSON.stringify(action.payload));
      console.log(`Сохранил в localStorage ${action.payload}`);
    },
    setCourseProgress: (state, action: PayloadAction<CourseProgressType>) => {
      state.courseProgress = action.payload;
    },
    setWorkoutProgress: (state, action: PayloadAction<WorkoutProgressType>) => {
      state.workoutProgress = action.payload;
    },
    setVisibleAuthModal: (state, action: PayloadAction<boolean>) => {
      state.visibleAuthModal = action.payload;
    },
    setVisiblePopUser: (state, action: PayloadAction<boolean>) => {
      state.visiblePopUser = action.payload;
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
  setSelectedWorkout,
  setCourseWorkouts,
  setSelectCourseId,
  setIdSelectedCourses,
  setSelectCourseName,
  setCourseProgress,
  setWorkoutProgress,
} = courseSlice.actions;
export const courseSliceReducer = courseSlice.reducer;
