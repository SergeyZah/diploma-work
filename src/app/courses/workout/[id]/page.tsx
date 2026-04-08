'use client';

import Workout from '@/components/Workout/Workout';
import { getWorkoutProgress } from '@/services/progress/progressApi';
import { getWorkautInfo } from '@/services/workouts/workoutsApi';
import { WorkoutProgressType, WorksType } from '@/sharedTypes/types';
import {
  setSelectedWorkout,
  setWorkoutProgress,
} from '@/store/features/CourseSlice';
import { useAppSelector } from '@/store/store';
import { AxiosError } from 'axios';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Bounce, toast } from 'react-toastify';

export default function WorkoutPage() {
  const params = useParams<{ id: string }>();
  const dispatch = useDispatch();

  const { token } = useAppSelector((state) => state.auth);

  const [error, setError] = useState('');
  const [workout, setWorkout] = useState<WorksType | null>(null);
  const [workProgress, setWorkProgress] = useState<WorkoutProgressType | null>(
    null,
  );
  const [courseId, setCourseId] = useState<string | null>('');

  const workoutId = params?.id ?? '';

  useEffect(() => {
    if (params?.id) {
      const courseId = localStorage.getItem('selectCourseId');
      setCourseId(courseId);
    }
  }, [params]);

  useEffect(() => {
    if (!workoutId || !token || !courseId) return;

    getWorkautInfo(token, workoutId)
      .then((res) => {
        dispatch(setSelectedWorkout(res));
        setWorkout(res);
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
      });

    getWorkoutProgress(token, courseId, workoutId)
      .then((res) => {
        dispatch(setWorkoutProgress(res));
        setWorkProgress(res);
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
      });
  }, [token, workoutId, dispatch, courseId]);

  return <Workout />;
}
