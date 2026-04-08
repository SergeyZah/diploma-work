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
            setError(error.response.data);
            toast.error(error.response.data, {
              position: 'top-right',
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: 'light',
              transition: Bounce,
            });
          } else if (error.request) {
            setError('Что-то с интернетом');
            toast.error('Что-то с интернетом', {
              position: 'top-right',
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: 'light',
              transition: Bounce,
            });
          } else {
            setError('Неизвестная ошибка');
            toast.error('Неизвестная ошибка', {
              position: 'top-right',
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: 'light',
              transition: Bounce,
            });
          }
        }
      })
      .finally(() => {
        dispatch(setFetchIsLoading(false));
      });
  }, [token, courseId]);

  console.log(error);

  return (
    <div className={styles.workoutsPage}>
      <SelectWorkouts courseName={courseName} />
    </div>
  );
}
