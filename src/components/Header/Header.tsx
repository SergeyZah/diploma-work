'use client';

import Link from 'next/link';
import styles from './header.module.css';
import Image from 'next/image';
import PopUser from '../PopUser/PopUser';
import AuthModal from '../AuthModal/AuthModal';
import { useDispatch } from 'react-redux';
import { setVisibleAuthModal } from '@/store/features/CourseSlice';
import { useAppDispatch, useAppSelector } from '@/store/store';

export default function Header() {
  const dispatch = useDispatch();

  const { visibleAuthModal } = useAppSelector((state) => state.courses);

  const hadleAuthModal = () => {
    dispatch(setVisibleAuthModal(true));
  };
  return (
    <div className={styles.header}>
      <div>
        <div className={styles.header__logo}>
          <Link className={styles.logo__link} href="/courses/main">
            <Image
              width={220}
              height={35}
              className={styles.logo__image}
              src="/img/logo.png"
              alt={'logo'}
              priority
            />
          </Link>
        </div>
        <h4 className={styles.header__title}>
          Онлайн-тренировки для занятий дома
        </h4>
      </div>
      <button className={styles.header__button} onClick={hadleAuthModal}>
        <p className={styles.button__text}>Войти</p>
      </button>
      {visibleAuthModal ? <AuthModal /> : <></>}
      {/* <PopUser /> */}
    </div>
  );
}
