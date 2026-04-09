'use client';

import { useParams } from 'next/navigation';
import FitnessCourse from '@/components/FitnessCourse/FitnessCourse';
import { useEffect, useState } from 'react';
import { useAppSelector } from '@/store/store';
import { getCourseCardInfo } from '@/services/courses/coursesApi';
import { CourseType } from '@/sharedTypes/types';
import { AxiosError } from 'axios';
import styles from './page.module.css';
import { catchError } from '@/hooks/funcToast';

export default function CoursePage() {
  const params = useParams<{ id: string }>();

  const { fetchIsLoading, fetchError } = useAppSelector(
    (state) => state.courses,
  );

  const [courseInfo, setCourseInfo] = useState<CourseType>();
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const courseId = params?.id ?? '';

  useEffect(() => {
    if (!courseId) return;

    getCourseCardInfo(courseId)
      .then((res) => {
        setCourseInfo(res);
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
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      {isLoading ? (
        <div className={styles.loader}>Загрузка профиля...</div>
      ) : courseInfo ? (
        <FitnessCourse course={courseInfo} error={fetchError || error} />
      ) : (
        <div>{error}</div>
      )}
    </>
  );
}
