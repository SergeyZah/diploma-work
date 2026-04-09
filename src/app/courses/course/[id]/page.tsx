'use client';

import { useParams } from 'next/navigation';
import FitnessCourse from '@/components/FitnessCourse/FitnessCourse';
import { useEffect, useState } from 'react';
import { useAppSelector } from '@/store/store';
import { getCourseCardInfo } from '@/services/courses/coursesApi';
import { CourseType } from '@/sharedTypes/types';
import { AxiosError } from 'axios';
import { useDispatch } from 'react-redux';
import { Bounce, toast } from 'react-toastify';
import styles from './page.module.css';

export default function CoursePage() {
  const params = useParams<{ id: string }>();
  const dispatch = useDispatch();

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
          console.log(error);
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
            toast.error(error.request, {
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
