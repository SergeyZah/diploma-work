'use client';

import { getUserInfo } from '@/services/auth/authApi';
import { setToken, setUser, setUserName } from '@/store/features/AuthSlice';
import {
  setSelectCourseId,
  setSelectWorkoutId,
} from '@/store/features/CourseSlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

export const useInitAuth = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userName = localStorage.getItem('userName') || '';
    const courseId = localStorage.getItem('selectCourseId') || '';
    const workoutId = localStorage.getItem('selectWorkoutId') || '';
    if (token) {
      dispatch(setToken(token));
      getUserInfo(token).then((res) => {
        dispatch(setUser(res));
      });
    } else {
      console.log('Токен не передался');
    }
    dispatch(setUserName(userName));
    dispatch(setSelectCourseId(courseId));
    dispatch(setSelectWorkoutId(workoutId));
  }, [dispatch]);
};
