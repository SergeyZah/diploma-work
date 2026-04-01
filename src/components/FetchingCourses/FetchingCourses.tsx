'use client';

import { getAllCourses } from '@/services/courses/coursesApi';
import {
  setAllCourses,
  setFetchError,
  setFetchIsLoading,
} from '@/store/features/CourseSlice';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { AxiosError } from 'axios';
import { useEffect } from 'react';

export default function FetchingCourses() {
  const dispatch = useAppDispatch();
  const { allCourses } = useAppSelector((state) => state.courses);

  // console.log('FetchingCourses до юза');

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
              // dispatch(setFetchError('Неизвестная ошибка'));
            }
        })
        .finally(() => {
          dispatch(setFetchIsLoading(true));
          console.log('FetchingCourses конец юза');
        });
    }
  });
  return <></>;
}
