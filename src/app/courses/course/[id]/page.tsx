'use client';

import { useParams } from 'next/navigation';
import FitnessCourse from '@/components/FitnessCourse/FitnessCourse';
import { useEffect, useState } from 'react';
import { useAppSelector } from '@/store/store';
import { getCourseCardInfo } from '@/services/courses/coursesApi';
import { CourseType } from '@/sharedTypes/types';
import { AxiosError } from 'axios';

export default function CoursePage() {
  const params = useParams<{ id: string }>();

  const { fetchIsLoading, fetchError } = useAppSelector(
    (state) => state.courses,
  );

  const [courseInfo, setCourseInfo] = useState<CourseType>();
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (params?.id) {
      getCourseCardInfo(params?.id)
        .then((res) => {
          setCourseInfo(res);
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
          setIsLoading(false);
        });
    }
  }, []);

  return (
    <>
      {isLoading ? (
        <div>Загрузка</div>
      ) : courseInfo ? (
        <FitnessCourse course={courseInfo} error={fetchError || error} />
      ) : (
        <div>{error}</div>
      )}
    </>
  );
}
