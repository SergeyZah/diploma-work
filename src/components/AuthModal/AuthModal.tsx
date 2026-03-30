'use client';

import Image from 'next/image';
import styles from './authModal.module.css';
import Link from 'next/link';
import classnames from 'classnames';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '@/store/store';
import { setVisibleAuthModal } from '@/store/features/CourseSlice';
import { useState } from 'react';

export default function AuthModal() {
  const dispatch = useDispatch();
  const [signIn, setSignIn] = useState(false);

  const hadleCloseAuthModal = () => {
    dispatch(setVisibleAuthModal(false));
  };

  const changeAuthModal = () => {
    setSignIn(!signIn);
  };

  return (
    <div className={styles.authModal} onClick={hadleCloseAuthModal}>
      <div
        className={styles.authModalContainer}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.authModal__logo}>
          <Link className={styles.logo__link} href="#">
            <Image
              width={220}
              height={35}
              className={styles.logo__image}
              src="/img/logo.png"
              alt={'logo'}
            />
          </Link>
        </div>
        <div className={styles.authModal__inputs}>
          <input
            className={classnames(styles.authModal__input, styles.login)}
            type="text"
            name="login"
            placeholder={signIn ? 'Эл. почта' : 'Логин'}
          />
          <input
            className={classnames(styles.authModal__input, styles.password)}
            type="text"
            name="password"
            placeholder="Пароль"
          />
          {signIn ? (
            <input
              className={classnames(styles.authModal__input, styles.password)}
              type="text"
              name="password"
              placeholder="Повторите пароль"
            />
          ) : (
            <></>
          )}
        </div>
        <div className={styles.authModal__buttons}>
          <button className={styles.authModal__btnSignin}>
            {signIn ? 'Зарегистрироваться' : 'Войти'}
          </button>
          <button
            className={styles.authModal__btnSignup}
            onClick={changeAuthModal}
          >
            {signIn ? 'Войти' : 'Зарегистрироваться'}
          </button>
        </div>
      </div>
    </div>
  );
}
