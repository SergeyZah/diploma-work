'use client';

import { ReactNode } from 'react';
import styles from './layout.module.css';
import Header from '@/components/Header/Header';
import FetchingCourses from '@/components/FetchingCourses/FetchingCourses';
import { useInitAuth } from '@/hooks/useInitAuth';

interface AuthLayoutProps {
  children: ReactNode;
}

export default function CoursesLayout({ children }: AuthLayoutProps) {
  useInitAuth();
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <FetchingCourses />
        <Header />
        <div className={styles.scroll}>{children}</div>
      </div>
    </div>
  );
}
