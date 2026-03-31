'use client';

import { useDispatch } from 'react-redux';
import styles from './popUser.module.css';
import { useRouter } from 'next/navigation';
import { clearUser } from '@/store/features/AuthSlice';
import {
  setVisibleAuthModal,
  setVisiblePopUser,
} from '@/store/features/CourseSlice';

export default function PopUser() {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleExit = () => {
    dispatch(clearUser());
    router.push('/courses/main');
    dispatch(setVisibleAuthModal(false));
    dispatch(setVisiblePopUser(false));
  };

  const handleMyProfile = () => {
    router.push('/courses/profile');
    dispatch(setVisiblePopUser(false));
  };

  return (
    <div className={styles.popUser}>
      <div className={styles.container}>
        <div className={styles.userInfo}>
          <div className={styles.userName}>Сергей</div>
          <div className={styles.userMail}>sergey.petrov96@mail.ru</div>
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
