'use client';

import { getUserInfo } from '@/services/auth/authApi';
import { getAllCourses } from '@/services/courses/coursesApi';
import { setUser } from '@/store/features/AuthSlice';
import {
  setAllCourses,
  setFetchError,
  setFetchIsLoading,
  setIdSelectedCourses,
} from '@/store/features/CourseSlice';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { AxiosError } from 'axios';
import { useEffect } from 'react';

export default function FetchingCourses() {
  const dispatch = useAppDispatch();
  const { allCourses, idSelectedCourses } = useAppSelector(
    (state) => state.courses,
  );
  const { token } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (allCourses.length) {
      dispatch(setAllCourses(allCourses));
    } else {
      dispatch(setFetchIsLoading(true));
      getAllCourses()
        .then((res) => {
          dispatch(setAllCourses(res));
        })
        .catch((error) => {
          if (error instanceof AxiosError)
            if (error.response) {
              dispatch(setFetchError(error.response.data));
            } else if (error.request) {
              dispatch(setFetchError('Произошла ошибка. Попробуйте позже'));
              console.log(error);
            } else {
              dispatch(setFetchError('Неизвестная ошибка'));
            }
        })
        .finally(() => {
          dispatch(setFetchIsLoading(false));
        });
    }
  }, []);

  useEffect(() => {
    if (idSelectedCourses) {
      dispatch(setIdSelectedCourses(idSelectedCourses));
    } else {
      dispatch(setFetchIsLoading(true));
      getUserInfo(token)
        .then((response) => {
          dispatch(setUser(response));
          dispatch(setIdSelectedCourses(response.selectedCourses));
        })
        .catch((error) => {
          if (error instanceof AxiosError)
            if (error.response) {
              dispatch(setFetchError(error.response.data));
            } else if (error.request) {
              dispatch(setFetchError('Произошла ошибка. Попробуйте позже'));
              console.log(error);
            } else {
              dispatch(setFetchError('Неизвестная ошибка'));
            }
        })
        .finally(() => {
          dispatch(setFetchIsLoading(true));
        });
    }
  }, []);
  return <></>;
}
