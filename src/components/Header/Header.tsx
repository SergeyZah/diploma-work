'use client';

import Link from 'next/link';
import styles from './header.module.css';
import Image from 'next/image';
import PopUser from '../PopUser/PopUser';
import AuthModal from '../AuthModal/AuthModal';
import { useDispatch } from 'react-redux';
import {
  setVisibleAuthModal,
  setVisiblePopUser,
} from '@/store/features/CourseSlice';
import { useAppSelector } from '@/store/store';
import { getUserNameByEmail } from '@/hooks/getUserNameByEmail';
import { useEffect, useState } from 'react';
import { setUserName } from '@/store/features/AuthSlice';

export default function Header() {
  const dispatch = useDispatch();

  const { user, token } = useAppSelector((state) => state.auth);

  const { visibleAuthModal, visiblePopUser } = useAppSelector(
    (state) => state.courses,
  );

  const [name, setName] = useState('');

  const hadleAuthModal = () => {
    dispatch(setVisibleAuthModal(true));
  };

  const hadlePopUser = () => {
    dispatch(setVisiblePopUser(!visiblePopUser));
  };

  useEffect(() => {
    if (user) {
      setName(getUserNameByEmail(user.email));
    }
  }, [user]);

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
      {token ? (
        <div className={styles.header__authUser}>
          <Image
            width={50}
            height={50}
            src="/icon/profile.svg"
            alt={'profile'}
            priority
          />
          <div className={styles.authUser__container} onClick={hadlePopUser}>
            <p className={styles.authUser__name}>
              {name ? name : 'Пользователь'}
            </p>
            <Image
              width={8}
              height={8}
              src="/icon/arrowUser.svg"
              alt={'arrowUser'}
              priority
            />
          </div>
        </div>
      ) : (
        <button className={styles.header__button} onClick={hadleAuthModal}>
          <p className={styles.button__text}>Войти</p>
        </button>
      )}
      {visibleAuthModal ? <AuthModal /> : <></>}
      {visiblePopUser ? <PopUser /> : <></>}
    </div>
  );
}
