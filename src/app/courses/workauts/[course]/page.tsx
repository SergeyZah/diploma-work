'use client';

import styles from './page.module.css';
import SelectWorkauts from '@/components/SelectWorkauts/SelectWorkauts';
import { useAppSelector } from '@/store/store';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function WorkautsPage() {
  const params = useParams<{ course: string }>();

  const { allCourses } = useAppSelector((state) => state.courses);

  const [courseName, setCourseName] = useState('');

  useEffect(() => {
    if (params?.course) {
      const courseSelect = allCourses.find(
        (course) => course._id === params?.course,
      );

      if (courseSelect) {
        setCourseName(courseSelect?.nameRU);
      }
    }
  }, [params]);

  return (
    <div className={styles.workautsPage}>
      <SelectWorkauts courseName={courseName} />
    </div>
  );
}
