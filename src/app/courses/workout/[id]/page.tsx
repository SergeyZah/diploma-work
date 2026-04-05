'use client';

import Workout from '@/components/Workout/Workout';
import { dataWorkouts } from '@/dataWorks';
import {
  getWorkautInfo,
  getWorkoutProgress,
} from '@/services/courses/coursesApi';
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

export default function WorkoutPage() {
  const params = useParams<{ id: string }>();
  const dispatch = useDispatch();

  const {
    selectedWorkout,
    selectCoursName,
    idSelectedCourses,
    selectCourseId,
  } = useAppSelector((state) => state.courses);
  const { token } = useAppSelector((state) => state.auth);

  const [error, setError] = useState('');
  const [workout, setWorkout] = useState<WorksType | null>(null);
  const [workProgress, setWorkProgress] = useState<WorkoutProgressType | null>(
    null,
  );

  const workoutId = params?.id ?? '';
  const coursesId = localStorage.getItem('selectCourseId');

  useEffect(() => {
    if (!workoutId || !token || !coursesId) return;

    getWorkautInfo(token, workoutId)
      .then((res) => {
        dispatch(setSelectedWorkout(res));
        setWorkout(res);
      })
      .catch((error) => {
        if (error instanceof AxiosError) {
          if (error.response) {
            setError(error.response.data);
          } else if (error.request) {
            setError('Что-то с интернетом');
          } else {
            setError('Неизвестная ошибка');
          }
        }
      });

    getWorkoutProgress(token, coursesId, workoutId)
      .then((res) => {
        dispatch(setWorkoutProgress(res));
        setWorkProgress(res);
      })
      .catch((error) => {
        if (error instanceof AxiosError) {
          if (error.response) {
            setError(error.response.data);
          } else if (error.request) {
            setError('Что-то с интернетом');
          } else {
            setError('Неизвестная ошибка');
          }
        }
      });
  }, [token, workoutId, dispatch, coursesId]);

  return <Workout workout={workout!} workProgress={workProgress!} />;
}
