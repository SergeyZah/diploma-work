'use client';

import {
  getCourseWorkouts,
  getWorkautInfo,
} from '@/services/courses/coursesApi';
import styles from './selectWorkouts.module.css';
import { getNameWorkaut, getString } from '@/hooks/croppingLines';
import { useAppSelector } from '@/store/store';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  setCourseWorkouts,
  setFetchIsLoading,
  setSelectedWorkout,
} from '@/store/features/CourseSlice';
import { AxiosError } from 'axios';

type SelectWorkoutsTypeProp = {
  courseName: string;
};

export default function SelectWorkouts({ courseName }: SelectWorkoutsTypeProp) {
  const router = useRouter();
  const dispatch = useDispatch();

  const { courseWorkouts } = useAppSelector((state) => state.courses);
  const { token } = useAppSelector((state) => state.auth);

  const [selectedId, setSelectedId] = useState('');
  const [error, setError] = useState('');

  const openWorkout = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    getWorkautInfo(token, selectedId)
      .then((res) => {
        console.log(res);
        dispatch(setSelectedWorkout(res));
        console.log('Происходит запрос');
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
      })
      .finally(() => {
        setFetchIsLoading(false);
        router.push(`/courses/workout/${selectedId}`);
      });
  };

  return (
    <div className={styles.selectWorkouts}>
      <div className={styles.selectWorkouts__container}>
        <h2 className={styles.selectWorkouts__title}>Выберите тренировку</h2>
        <div className={styles.selectWorkouts__box}>
          {courseWorkouts.map((workout, id) => {
            return (
              <label
                key={workout._id}
                className={styles.selectWorkouts__workaut}
              >
                <input
                  type="radio"
                  name="workout"
                  className={styles.radio}
                  onChange={() => setSelectedId(workout._id)}
                />
                <div className={styles.workaut__info}>
                  <div className={styles.workaut__name}>
                    <p className={styles.name__text}>
                      {getNameWorkaut(workout.name)}
                    </p>
                  </div>
                  <div className={styles.workaut__subtitle}>
                    <p className={styles.subtitle__text}>
                      {getString(workout.name, courseName, id)}
                    </p>
                  </div>
                </div>
              </label>
            );
          })}
        </div>
        <button className={styles.selectWorkouts__button} onClick={openWorkout}>
          Начать
        </button>
      </div>
    </div>
  );
}
