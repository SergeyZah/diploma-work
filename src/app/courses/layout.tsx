import { ReactNode } from 'react';
import styles from './layout.module.css';
import Header from '@/components/Header/Header';

interface AuthLayoutProps {
  children: ReactNode;
}

export default function CoursesLayout({ children }: AuthLayoutProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Header />
        <div className={styles.scroll}>{children}</div>
      </div>
    </div>
  );
}
