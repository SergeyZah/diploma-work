'use client';

import { ReactNode, useEffect } from 'react';
import styles from './layout.module.css';
import Header from '@/components/Header/Header';
import FetchingCourses from '@/components/FetchingCourses/FetchingCourses';
import { useInitAuth } from '@/hooks/useInitAuth';
import { useAppSelector } from '@/store/store';

interface CoursesLayoutProps {
  children: ReactNode;
}

export default function CoursesLayout({ children }: CoursesLayoutProps) {
  const { fetchIsLoading } = useAppSelector((state) => state.courses);

  useInitAuth();

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <FetchingCourses />
        <Header fetchIsLoading={fetchIsLoading} />
        {fetchIsLoading ? 'Загрузка' : <div>{children}</div>}
      </div>
    </div>
  );
}
