'use client';

import { calculatingProgress } from '@/utils/calculatingProgress';
import styles from './workout.module.css';
import { WorkoutProgressType, WorksType } from '@/sharedTypes/types';
import { useAppSelector } from '@/store/store';
import { getNameExercise } from '@/utils/croppingLines';
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
import ChekProgressModal from '../ChekProgressModal/ChekProgressModal';
import { Bounce, toast } from 'react-toastify';
import { catchError } from '@/hooks/funcToast';

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
    visibleChekProgress,
    fetchIsLoading,
  } = useAppSelector((state) => state.courses);

  const [progressData, setProgressData] = useState<number[]>([]);
  const [progressExercise, setProgressExercise] = useState(false);
  const [finish, setFinish] = useState(false);

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
        return getWorkoutProgress(token, selectCourseId, selectWorkoutId);
      })
      .then((res) => {
        dispatch(setWorkoutProgress(res));
      })
      .catch((error) => {
        if (error instanceof AxiosError) {
          if (error.response) {
            catchError(error.response.data.message);
          } else if (error.request) {
            catchError('Отсутствует интернет. Попробуйте позже');
          } else {
            catchError('Неизвестная ошибка');
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
        <>
          <iframe
            className={styles.workout__video}
            src={`${selectedWorkout?.video}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            width={1160}
            height={639}
          ></iframe>
          <iframe
            className={styles.workoutTable__video}
            src={`${selectedWorkout?.video}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            width={710}
            height={410}
          ></iframe>
          <iframe
            className={styles.workoutMobile__video}
            src={`${selectedWorkout?.video}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            width={343}
            height={189}
          ></iframe>
        </>
      ) : (
        <div className={styles.workout__video}></div>
      )}
      <div className={styles.workout__box}>
        <h3 className={styles.workout__title}>Упражнения тренировки </h3>
        <div className={styles.workout__exercises}>
          {fetchIsLoading
            ? 'Загружаем тренировки...'
            : selectedWorkout?.exercises.map((exercise, idx) => {
                const progressExercise = calculatingProgress(
                  progressData[idx],
                  exercise.quantity,
                );

                return (
                  <div
                    key={`${exercise._id}`}
                    className={styles.workout__exercise}
                  >
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
      {visibleChekProgress ? <ChekProgressModal /> : <></>}
    </div>
  );
}
