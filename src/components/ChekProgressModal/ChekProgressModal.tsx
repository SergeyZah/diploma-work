'use client';

import Image from 'next/image';
import styles from './chekProgressModal.module.css';
import { useDispatch } from 'react-redux';
import { setVisibleChekProgress } from '@/store/features/CourseSlice';

export default function ChekProgressModal() {
  const dispatch = useDispatch();
  const closeChek = () => {
    dispatch(setVisibleChekProgress(false));
  };
  return (
    <div className={styles.chekProgressModal} onClick={closeChek}>
      <div className={styles.chekProgressModal__container}>
        <h3 className={styles.chekProgressModal__text}>
          Ваш прогресс засчитан!
        </h3>
        <Image
          width={68}
          height={68}
          className={styles.image}
          src="/icon/Check-in-Circle.svg"
          alt={'logo'}
          priority
        />
      </div>
    </div>
  );
}
