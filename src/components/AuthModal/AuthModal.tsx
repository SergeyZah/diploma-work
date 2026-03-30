'use client';

import Image from 'next/image';
import styles from './authModal.module.css';
import Link from 'next/link';
import classnames from 'classnames';
import { useDispatch } from 'react-redux';
import { setVisibleAuthModal } from '@/store/features/CourseSlice';
import { useEffect, useState } from 'react';
import { getUserInfo, signIn, signUp } from '@/services/auth/authApi';
import { useRouter } from 'next/navigation';
import { AxiosError } from 'axios';
import { setToken, setUser } from '@/store/features/AuthSlice';
import { useAppSelector } from '@/store/store';

export default function AuthModal() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [isSignIn, setIsSignIn] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const { token } = useAppSelector((state) => state.auth);

  const hadleCloseAuthModal = () => {
    dispatch(setVisibleAuthModal(false));
  };

  const changeAuthModal = () => {
    setIsSignIn(!isSignIn);
  };

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onChangeRepeatPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRepeatPassword(e.target.value);
  };

  const onSubmitSignIn = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault();
    setError('');

    if (!email.trim() && !password.trim()) {
      return setError('Необходимо заполнить все поля.');
    } else if (!email.trim()) {
      return setError('Введите адрес эл.почты.');
    } else if (!password.trim()) {
      return setError('Введите пароль');
    }

    setIsLoading(true);

    signIn({ email, password })
      .then((res) => {
        dispatch(setToken(res.token));
        router.push('/courses/main');
        dispatch(setVisibleAuthModal(false));
      })
      .catch((error) => {
        setIsLoading(false);
        if (error instanceof AxiosError) {
          if (error.response) {
            setError(error.response.data.message);
          } else if (error.request) {
            setError('Отсутствует интернет. Попробуйте позже');
          } else {
            setError('Неизвестная ошибка');
          }
        }
        console.log('error: ', error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const onSubmitSignUp = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault();

    setError('');

    if (!email.trim() || !password.trim() || !repeatPassword.trim()) {
      return setError('Необходимо заполнить все поля.');
    }

    if (password.trim() !== repeatPassword.trim()) {
      return setError('Пароли не совпадают.');
    }

    setIsLoading(true);

    signUp({ email, password })
      .then((res) => {
        console.log('Ответ после регистрации: ', res.message);
        setIsSignIn(false);
      })
      .catch((error) => {
        setIsLoading(false);
        if (error instanceof AxiosError) {
          if (error.response) {
            setError(error.response.data.message);
          } else if (error.request) {
            setError('Отсутствует интернет. Попробуйте позже');
          } else {
            setError('Неизвестная ошибка');
          }
        }
        console.log('error: ', error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className={styles.authModal} onClick={hadleCloseAuthModal}>
      <div
        className={styles.authModalContainer}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.authModal__logo}>
          <Link
            className={styles.logo__link}
            href="/courses/main"
            onClick={hadleCloseAuthModal}
          >
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
            placeholder={isSignIn ? 'Эл. почта' : 'Логин'}
            onChange={onChangeEmail}
          />
          <input
            className={classnames(styles.authModal__input, styles.password)}
            type={isSignIn ? 'text' : 'password'}
            name="password"
            placeholder="Пароль"
            onChange={onChangePassword}
          />
          {isSignIn ? (
            <input
              className={classnames(styles.authModal__input, styles.password)}
              type="text"
              name="password"
              placeholder="Повторите пароль"
              onChange={onChangeRepeatPassword}
            />
          ) : (
            <></>
          )}
        </div>
        <div className={styles.errorContainer}>{error}</div>
        <div className={styles.authModal__buttons}>
          <button
            className={styles.authModal__btnSignin}
            disabled={isLoading}
            onClick={isSignIn ? onSubmitSignUp : onSubmitSignIn}
          >
            {isSignIn ? 'Зарегистрироваться' : 'Войти'}
          </button>
          <button
            className={styles.authModal__btnSignup}
            onClick={changeAuthModal}
            disabled={isLoading}
          >
            {isSignIn ? 'Войти' : 'Зарегистрироваться'}
          </button>
        </div>
      </div>
    </div>
  );
}
