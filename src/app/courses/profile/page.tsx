'use client';

import Image from 'next/image';
import styles from './page.module.css';
import { useAppSelector } from '@/store/store';
import { useEffect, useState } from 'react';
import { getUserNameByEmail } from '@/hooks/getUserNameByEmail';
import Card from '@/components/Card/Card';
import { data } from '@/data';
import { fetchSelectedCourses } from '@/utils/fetchSelectedCourses';
import { useDispatch } from 'react-redux';
import { clearUser } from '@/store/features/AuthSlice';
import { useRouter } from 'next/navigation';
import { setSelectedCourses } from '@/store/features/CourseSlice';

export default function ProfilePage() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { user, userName } = useAppSelector((state) => state.auth);
  const { allCourses, selectedCourses } = useAppSelector(
    (state) => state.courses,
  );

  const [name, setName] = useState(userName);

  useEffect(() => {
    if (user) {
      setName(getUserNameByEmail(user.email));
      setSelectedCourses(
        fetchSelectedCourses(allCourses, user.selectedCourses),
      );
    }
  }, [user]);

  const handleExit = () => {
    dispatch(clearUser());
    router.push('/courses/main');
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.container__title}>Профиль</h2>
      <div className={styles.profile__box}>
        <div className={styles.profile__image}>
          <div className={styles.images}>
            <Image
              width={197}
              height={197}
              className={styles.image__background}
              src="/icon/profile_background.svg"
              alt={'profile_background'}
              priority
            />
            <Image
              width={72}
              height={72}
              className={styles.image__circle}
              src="/icon/profile_circle.svg"
              alt={'profile_circle'}
              priority
            />
            <Image
              width={211}
              height={72}
              className={styles.image__semicircle}
              src="/icon/profile_semicircle.svg"
              alt={'profile_semicircle'}
              priority
            />
          </div>
        </div>
        <div className={styles.profile__info}>
          <h3 className={styles.profile__name}>{name}</h3>
          <p className={styles.profile__login}>Логин:{user?.email}</p>
          <button className={styles.button__exit} onClick={handleExit}>
            Выйти
          </button>
        </div>
      </div>
      <div className={styles.courses__box}>
        <h2 className={styles.courses__title}>Мои курсы</h2>
        <div className={styles.courses__me}>
          {selectedCourses.map((course) => {
            return (
              <Card key={course._id} course={course} displayInProfile={true} />
            );
          })}
        </div>
      </div>
    </div>
  );
}
