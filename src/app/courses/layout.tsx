'use client';

import { ReactNode, useEffect } from 'react';
import styles from './layout.module.css';
import Header from '@/components/Header/Header';
import FetchingCourses from '@/components/FetchingCourses/FetchingCourses';
import { useInitAuth } from '@/hooks/useInitAuth';
import { useAppSelector } from '@/store/store';
import { Bounce, ToastContainer } from 'react-toastify';

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
        <Header />
        {fetchIsLoading ? (
          <div className={styles.loader}>Загрузка компонентов...</div>
        ) : (
          <div>{children}</div>
        )}
        <ToastContainer
          className={styles.toastContainer}
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
        />
      </div>
    </div>
  );
}
