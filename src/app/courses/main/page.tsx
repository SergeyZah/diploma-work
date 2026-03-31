'use client';

import styles from './page.module.css';

import Centerblock from '@/components/Centerblock/Centerblock';
import { useAppSelector } from '@/store/store';

export default function MainPage() {
  const { allCourses } = useAppSelector((state) => state.courses);

  return (
    <div className={styles.scroll}>
      <Centerblock courseList={allCourses} />
    </div>
  );
}
