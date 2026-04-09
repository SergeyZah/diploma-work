'use client';

import { useDispatch } from 'react-redux';
import styles from './popUser.module.css';
import { useRouter } from 'next/navigation';
import { clearUser, setUser } from '@/store/features/AuthSlice';
import {
  setIdSelectedCourses,
  setSelectedCourses,
  setVisibleAuthModal,
  setVisiblePopUser,
} from '@/store/features/CourseSlice';
import { useAppSelector } from '@/store/store';
import { getUserInfo } from '@/services/auth/authApi';
import { fetchSelectedCourses } from '@/utils/fetchSelectedCourses';
import { Bounce, toast } from 'react-toastify';
import { AxiosError } from 'axios';
import { catchError } from '@/hooks/funcToast';

export default function PopUser() {
  const dispatch = useDispatch();
  const router = useRouter();

  const { user, userName, token } = useAppSelector((state) => state.auth);
  const { allCourses } = useAppSelector((state) => state.courses);

  const handleExit = () => {
    dispatch(clearUser());
    router.push('/courses/main');
    dispatch(setVisibleAuthModal(false));
    dispatch(setVisiblePopUser(false));
  };

  const handleMyProfile = () => {
    router.push('/courses/profile');
    dispatch(setVisiblePopUser(false));
    getUserInfo(token)
      .then((response) => {
        dispatch(setUser(response));
        dispatch(setIdSelectedCourses(response.selectedCourses));
        dispatch(
          setSelectedCourses(
            fetchSelectedCourses(allCourses, response.selectedCourses),
          ),
        );
      })
      .catch((error) => {
        if (error instanceof AxiosError) {
          if (error.response) {
            catchError(error.response.data.message);
          } else if (error.request) {
            catchError('Отсутствует интернет. Попробуйте позже');
          } else {
            catchError('Неизвестная ошибка');
          }
        }
      });
  };

  return (
    <div className={styles.popUser}>
      <div className={styles.container}>
        <div className={styles.userInfo}>
          <div className={styles.userName}>{userName}</div>
          <div className={styles.userMail}>
            {user ? user.email : 'email@mail.com'}
          </div>
        </div>
        <div className={styles.buttons}>
          <button className={styles.btnProfile} onClick={handleMyProfile}>
            Мой профиль
          </button>
          <button className={styles.btnExit} onClick={handleExit}>
            Выйти
          </button>
        </div>
      </div>
    </div>
  );
}
