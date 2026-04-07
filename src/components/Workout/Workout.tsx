'use client';

import { calculatingProgress } from '@/hooks/calculatingProgress';
import styles from './workout.module.css';
import { WorkoutProgressType, WorksType } from '@/sharedTypes/types';
import { useAppSelector } from '@/store/store';
import { getNameExercise } from '@/hooks/croppingLines';
import { useEffect, useState } from 'react';
import ProgressModal from '../ProgressModal/ProgressModal';
import { useDispatch } from 'react-redux';
import {
  setFetchIsLoading,
  setVisibleProgressModal,
  setWorkoutProgress,
} from '@/store/features/CourseSlice';
import {
  getWorkoutProgress,
  removeWorkoutProgress,
} from '@/services/progress/progressApi';
import { AxiosError } from 'axios';

type WorkoutTypeProp = {
  workout: WorksType;
  workProgress: WorkoutProgressType;
};

export default function Workout() {
  const dispatch = useDispatch();
  const { token } = useAppSelector((state) => state.auth);
  const {
    selectedWorkout,
    selectCoursName,
    workoutProgress,
    visibleProgressModal,
    selectCourseId,
    selectWorkoutId,
  } = useAppSelector((state) => state.courses);

  const [progressData, setProgressData] = useState<number[]>([]);
  const [progressExercise, setProgressExercise] = useState(false);
  const [finish, setFinish] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!workoutProgress || !workoutProgress.progressData) {
      const length = selectedWorkout?.exercises.length ?? 0;
      const arr = Array.from({ length: length }, () => 0);
      setProgressData(arr);
      setFinish(false);
      setProgressExercise(false);
    } else {
      setProgressData(workoutProgress.progressData);
      setProgressExercise(true);
      if (workoutProgress.workoutCompleted === true) {
        setFinish(true);
      } else {
        setFinish(false);
      }
    }
  }, [workoutProgress, selectedWorkout]);

  const openProgressModal = () => {
    dispatch(setVisibleProgressModal(true));
  };

  const removeProgress = () => {
    removeWorkoutProgress(token, selectCourseId, selectWorkoutId)
      .then(() => {
        console.log('Выполнился запрос на удаление');
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
        dispatch(setFetchIsLoading(false));
      });
  };

  return (
    <div className={styles.workout}>
      <h2 className={styles.workout__name}>{selectCoursName}</h2>
      {selectedWorkout ? (
        <iframe
          className={styles.workout__video}
          src={`${selectedWorkout?.video}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          width={1160}
          height={639}
        ></iframe>
      ) : (
        <div className={styles.workout__video}></div>
      )}
      <div className={styles.workout__box}>
        <h3 className={styles.workout__title}>Упражнения тренировки </h3>
        <div className={styles.workout__exercises}>
          {selectedWorkout?.exercises.map((exercise, idx) => {
            const progressExercise = calculatingProgress(
              progressData[idx],
              exercise.quantity,
            );

            return (
              <div key={`${exercise._id}`} className={styles.workout__exercise}>
                <p
                  className={styles.exercise__name}
                >{`${getNameExercise(exercise.name)} ${progressExercise}%`}</p>
                <div className={styles.exercise__progress}>
                  <div
                    className={styles.progress}
                    style={{
                      width: `${calculatingProgress(progressData[idx], exercise.quantity)}%`,
                    }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
        {finish ? (
          <button className={styles.workout__button} onClick={removeProgress}>
            Сбросить прогресс тренировки
          </button>
        ) : (
          <button
            className={styles.workout__button}
            onClick={openProgressModal}
          >
            {progressExercise
              ? 'Обновить свой прогресс'
              : 'Заполнить свой прогресс'}
          </button>
        )}
      </div>
      {visibleProgressModal ? (
        <ProgressModal valuesNull={progressData} />
      ) : (
        <></>
      )}
    </div>
  );
}
