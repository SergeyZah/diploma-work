'use client';

import { useDispatch } from 'react-redux';
import styles from './removeProgress.module.css';
import {
  setCourseProgress,
  setFetchIsLoading,
  setVisibleRemoveProgress,
  setWorkoutProgress,
} from '@/store/features/CourseSlice';
import {
  getCourseProgress,
  getWorkoutProgress,
  removeCourseProgress,
  removeWorkoutProgress,
} from '@/services/progress/progressApi';
import { useAppSelector } from '@/store/store';
import { AxiosError } from 'axios';
import { catchError, toastInfo } from '@/hooks/funcToast';

type RemoveProgressTypeProp = {
  course: boolean;
};

export default function RemoveProgress({ course }: RemoveProgressTypeProp) {
  const dispatch = useDispatch();

  const { token } = useAppSelector((state) => state.auth);
  const { selectCourseId, selectWorkoutId } = useAppSelector(
    (state) => state.courses,
  );

  const hadleCloseAuthModal = () => {
    dispatch(setVisibleRemoveProgress(false));
  };

  const hadleRemove = () => {
    if (course) {
      removeCourseProgress(token, selectCourseId)
        .then((res) => {
          toastInfo(res.message);
          return getCourseProgress(token, selectCourseId);
        })
        .then((res) => {
          dispatch(setCourseProgress(res));
          dispatch(setVisibleRemoveProgress(false));
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
          setFetchIsLoading(false);
        });
    } else {
      removeWorkoutProgress(token, selectCourseId, selectWorkoutId)
        .then((res) => {
          toastInfo(res.message);
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
    }
  };

  return (
    <div className={styles.removeProgress} onClick={hadleCloseAuthModal}>
      <div className={styles.removeProgress__container}>
        <p className={styles.removeProgress__text}>
          Вы уверены, что хотите сбросить прогресс?
        </p>
        <div className={styles.removeProgress__buttons}>
          <button
            className={styles.removeProgress__btnNo}
            onClick={hadleCloseAuthModal}
          >
            Нет
          </button>
          <button
            className={styles.removeProgress__btnYes}
            onClick={hadleRemove}
          >
            Сбросить
          </button>
        </div>
      </div>
    </div>
  );
}
