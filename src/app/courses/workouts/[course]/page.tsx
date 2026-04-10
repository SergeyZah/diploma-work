'use client';

import {
  setCourseWorkouts,
  setFetchIsLoading,
  setSelectCourseName,
} from '@/store/features/CourseSlice';
import styles from './page.module.css';
import SelectWorkouts from '@/components/SelectWorkouts/SelectWorkouts';
import { useAppSelector } from '@/store/store';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { AxiosError } from 'axios';
import { getCourseWorkouts } from '@/services/workouts/workoutsApi';
import { Bounce, toast } from 'react-toastify';
import { catchError } from '@/hooks/funcToast';

export default function WorkoutsPage() {
  const params = useParams<{ course: string }>();
  const dispatch = useDispatch();

  const { allCourses, selectedWorkout } = useAppSelector(
    (state) => state.courses,
  );
  const { token } = useAppSelector((state) => state.auth);

  const [courseName, setCourseName] = useState('');
  const [courseId, setCourseId] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (params?.course) {
      const courseSelect = allCourses.find(
        (course) => course._id === params.course,
      );

      setCourseId(params?.course);

      if (courseSelect) {
        setCourseName(courseSelect?.nameRU);
        dispatch(setSelectCourseName(courseSelect?.nameRU));
      }
    }
  }, [params, selectedWorkout]);

  useEffect(() => {
    if (!token || !courseId) return;
    getCourseWorkouts(token, courseId)
      .then((res) => {
        dispatch(setCourseWorkouts(res));
      })
      .catch((error) => {
        if (error instanceof AxiosError) {
          if (error.response) {
            setError(error.response.data.message);
            catchError(error.response.data.message);
          } else if (error.request) {
            setError('Отсутствует интернет. Попробуйте позже');
            catchError('Отсутствует интернет. Попробуйте позже');
          } else {
            setError('Неизвестная ошибка');
            catchError('Неизвестная ошибка');
          }
        }
      })
      .finally(() => {
        dispatch(setFetchIsLoading(false));
      });
  }, [token, courseId]);

  return (
    <div className={styles.workoutsPage}>
      <SelectWorkouts courseName={courseName} />
    </div>
  );
}
