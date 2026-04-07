'use client';

import Image from 'next/image';
import styles from './card.module.css';
import classnames from 'classnames';
import { CourseProgressType, CourseType } from '@/sharedTypes/types';
import { FetchRightCover } from '@/utils/FetchRightCover';
import { useRouter } from 'next/navigation';
import { addUserCourse, removeUserCourse } from '@/services/courses/coursesApi';
import { useState } from 'react';
import { AxiosError } from 'axios';
import { useAppSelector } from '@/store/store';
import { useDispatch } from 'react-redux';
import { getUserInfo } from '@/services/auth/authApi';
import { setUser } from '@/store/features/AuthSlice';
import {
  setCourseWorkouts,
  setFetchIsLoading,
  setIdSelectedCourses,
  setSelectCourseId,
  setSelectedCourses,
} from '@/store/features/CourseSlice';
import { fetchSelectedCourses } from '@/utils/fetchSelectedCourses';
import { getCourseWorkouts } from '@/services/workouts/workoutsApi';
import { calculatingProgress } from '@/hooks/calculatingProgress';
import { removeCourseProgress } from '@/services/progress/progressApi';

type CardTypeProp = {
  course: CourseType;
  displayInProfile: boolean;
  progressCourse: CourseProgressType;
};

export default function Card({
  course,
  displayInProfile,
  progressCourse,
}: CardTypeProp) {
  const router = useRouter();
  const dispatch = useDispatch();

  const { token } = useAppSelector((state) => state.auth);
  const { allCourses, fetchIsLoading } = useAppSelector(
    (state) => state.courses,
  );

  const [error, setError] = useState('');

  const handleCourseCard = () => {
    router.push(`/courses/course/${course._id}`);
  };

  const theme = FetchRightCover(course.nameEN);

  const hadleAddCourse = (
    e: React.MouseEvent<HTMLImageElement, MouseEvent>,
  ) => {
    e.stopPropagation();
    addUserCourse(token, course._id)
      .then((res) => {
        console.log(res);
        return getUserInfo(token);
      })
      .then((response) => {
        dispatch(setUser(response));
        dispatch(setIdSelectedCourses(response.selectedCourses));
        dispatch(
          setSelectedCourses(
            fetchSelectedCourses(allCourses, response.selectedCourses),
          ),
        );
      })
      .catch((error) => {
        if (error instanceof AxiosError) {
          if (error.response) {
            setError(error.response.data.message);
          } else if (error.request) {
            setError('Отсутствует интернет. Попробуйте позже');
          } else {
            setError('Неизвестная ошибка');
          }
        }
        console.log('error: ', error);
      });
  };

  const hadleRemoveCourse = (
    e: React.MouseEvent<HTMLImageElement, MouseEvent>,
  ) => {
    e.stopPropagation();
    removeUserCourse(token, course._id)
      .then((res) => {
        console.log(res);
        return getUserInfo(token);
      })
      .then((response) => {
        dispatch(setUser(response));
        dispatch(setIdSelectedCourses(response.selectedCourses));
        dispatch(
          setSelectedCourses(
            fetchSelectedCourses(allCourses, response.selectedCourses),
          ),
        );
      })
      .catch((error) => {
        if (error instanceof AxiosError) {
          if (error.response) {
            setError(error.response.data.message);
          } else if (error.request) {
            setError('Отсутствует интернет. Попробуйте позже');
          } else {
            setError('Неизвестная ошибка');
          }
        }
        console.log('error: ', error);
      });
  };

  const hadleSelectWorkouts = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.stopPropagation();
    dispatch(setSelectCourseId(course._id));
    getCourseWorkouts(token, course._id)
      .then((res) => {
        console.log(res);
        dispatch(setCourseWorkouts(res));
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
        router.push(`/courses/workouts/${course._id}`);
      });
  };

  const removeProgressCourse = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.stopPropagation();
    dispatch(setSelectCourseId(course._id));
    removeCourseProgress(token, course._id)
      .then((res) => {
        console.log(res);
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
  };

  return (
    <div className={styles.card} onClick={handleCourseCard}>
      <div className={styles.card__image}>
        <Image
          width={32}
          height={32}
          className={styles.card__plus}
          src={
            displayInProfile
              ? `/icon/minus_in_circle.svg`
              : `/icon/plus_in_circle.svg`
          }
          alt={displayInProfile ? `minus_in_circle` : `plus_in_circle`}
          aria-label="Добавить"
          priority
          onClick={displayInProfile ? hadleRemoveCourse : hadleAddCourse}
        />
        <Image
          width={360}
          height={325}
          className={styles.image}
          src={theme.courseImageSrc}
          alt={course.nameEN}
          priority
        />
        <Image
          width={343}
          height={325}
          className={styles.image__mobile}
          src={theme.courseImageSrc}
          alt={course.nameEN}
          priority
        />
      </div>
      <div className={styles.card__info}>
        <div className={styles.card__name}>
          <h4 className={styles.name__title}>{course.nameRU}</h4>
        </div>
        <div className={styles.card__parameters}>
          <div
            className={classnames(styles.parameters, styles.parameters__days)}
          >
            <Image
              width={18}
              height={18}
              className={styles.logo__image}
              src="/icon/calendar.svg"
              alt={'yoga'}
            />
            <div>
              <p className={styles.parameters__description}>
                {course.durationInDays}
              </p>
            </div>
          </div>
          <div
            className={classnames(styles.parameters, styles.parameters__time)}
          >
            <Image
              width={18}
              height={18}
              className={styles.logo__image}
              src="/icon/watch.svg"
              alt={'yoga'}
            />
            <div>
              <p className={styles.parameters__description}>
                {course.dailyDurationInMinutes.from} -{' '}
                {course.dailyDurationInMinutes.to} мин/день
              </p>
            </div>
          </div>
          <div
            className={classnames(styles.parameters, styles.parameters__level)}
          >
            <Image
              width={18}
              height={18}
              className={styles.logo__image}
              src="/icon/level.svg"
              alt={'yoga'}
            />
            <div>
              <p className={styles.parameters__description}>
                {course.difficulty}
              </p>
            </div>
          </div>
        </div>
        {displayInProfile ? (
          <div className={styles.selectWorkouts__options}>
            <div className={styles.selectWorkouts__info}>
              <p
                className={styles.selectWorkouts__name}
              >{`Прогресс ${progressCourse?.workoutsProgress ? calculatingProgress(progressCourse?.workoutsProgress.length, course.workouts.length) : 0} %`}</p>
              <div className={styles.selectWorkouts__progress}>
                <div
                  className={styles.progress}
                  style={{
                    width: `${progressCourse?.workoutsProgress ? calculatingProgress(progressCourse?.workoutsProgress.length, course.workouts.length) : 0}%`,
                  }}
                ></div>
              </div>
            </div>
            {progressCourse?.courseCompleted ? (
              <button
                className={styles.selectWorkouts__button}
                onClick={removeProgressCourse}
              >
                Начать заново
              </button>
            ) : (
              <button
                className={styles.selectWorkouts__button}
                onClick={hadleSelectWorkouts}
              >
                {progressCourse?.workoutsProgress
                  ? 'Продолжить'
                  : 'Начать тренировки'}
              </button>
            )}
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
