'use client';

import styles from './page.module.css';
import SelectWorkouts from '@/components/SelectWorkouts/SelectWorkouts';
import { useAppSelector } from '@/store/store';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function WorkoutsPage() {
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
    <div className={styles.workoutsPage}>
      <SelectWorkouts courseName={courseName} />
    </div>
  );
}
