'use client';

import { useAppSelector } from '@/store/store';
import styles from './progressModal.module.css';
import { getQuestionExercise } from '@/hooks/croppingLines';
import { useEffect, useState } from 'react';
import {
  getWorkoutProgress,
  saveWorkoutProgress,
} from '@/services/progress/progressApi';
import { useDispatch } from 'react-redux';
import { AxiosError } from 'axios';
import {
  setFetchIsLoading,
  setVisibleProgressModal,
  setWorkoutProgress,
} from '@/store/features/CourseSlice';

type ProgressModalTypeProp = {
  valuesNull: number[];
};

export default function ProgressModal({ valuesNull }: ProgressModalTypeProp) {
  const dispatch = useDispatch();
  const { selectedWorkout, selectCourseId, selectWorkoutId, workoutProgress } =
    useAppSelector((state) => state.courses);
  const { token } = useAppSelector((state) => state.auth);

  const [values, setValues] = useState<number[]>([]);
  const [error, setError] = useState('');

  console.log(values);
  console.log(error);

  useEffect(() => {
    setValues(valuesNull);
  }, [valuesNull, workoutProgress]);

  // useEffect(() => {
  //   setRequestValues(Object.values(values));
  // }, [values]);

  const onChange = (id: number, value: string) => {
    const next = Number(value);
    setValues((prev) => ({ ...prev, [id]: next }));
  };

  const saveProgress = () => {
    if (!token || !selectCourseId || !selectWorkoutId || !values) {
    } else {
      const validProgressData = Object.values(values).map((val) => {
        return isNaN(val) ? 0 : val;
      });
      saveWorkoutProgress(
        token,
        selectCourseId,
        selectWorkoutId,
        validProgressData,
      )
        .then((res) => {
          setValues(valuesNull);
          dispatch(setVisibleProgressModal(false));
          return getWorkoutProgress(token, selectCourseId, selectWorkoutId);
        })
        .then((res) => {
          dispatch(setWorkoutProgress(res));
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
        });
    }
  };

  const closeProgressModal = () => {
    dispatch(setVisibleProgressModal(false));
  };

  return (
    <div className={styles.progressModal} onClick={closeProgressModal}>
      <div
        className={styles.progressModal__container}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.progressModal__box}>
          <h3 className={styles.progressModal__title}>Мой прогресс</h3>
          <div className={styles.progressModal__inputs}>
            {selectedWorkout?.exercises.map((exercise, idx) => {
              return (
                <div
                  key={`${exercise._id}`}
                  className={styles.progressModal__unit}
                >
                  <p
                    className={styles.input__text}
                  >{`Сколько раз вы сделали ${getQuestionExercise(exercise.name)}?`}</p>
                  <input
                    className={styles.progressModal__input}
                    type="number"
                    name="quantity"
                    placeholder="0"
                    value={values[idx] ?? ''}
                    onChange={(e) => onChange(idx, e.target.value)}
                  />
                </div>
              );
            })}
            <button
              className={styles.progressModal__button}
              onClick={saveProgress}
            >
              Сохранить
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
