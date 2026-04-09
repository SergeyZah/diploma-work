'use client';

import Image from 'next/image';
import styles from './page.module.css';
import { useAppSelector } from '@/store/store';
import { useEffect, useState } from 'react';
import Card from '@/components/Card/Card';
import { fetchSelectedCourses } from '@/utils/fetchSelectedCourses';
import { useDispatch } from 'react-redux';
import { clearUser, setUser } from '@/store/features/AuthSlice';
import { useRouter } from 'next/navigation';
import {
  setIdSelectedCourses,
  setSelectedCourses,
} from '@/store/features/CourseSlice';
import { getUserInfo } from '@/services/auth/authApi';
import { getCourseProgress } from '@/services/progress/progressApi';
import { CourseProgressType } from '@/sharedTypes/types';
import { catchError } from '@/hooks/funcToast';

type progressMapType = {
  [key: string]: CourseProgressType;
};

export default function ProfilePage() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { user, userName, token } = useAppSelector((state) => state.auth);
  const { allCourses, selectedCourses, fetchIsLoading } = useAppSelector(
    (state) => state.courses,
  );

  const [courseProgress, setCourseProgress] = useState<progressMapType>({});
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (token) {
      getUserInfo(token).then((response) => {
        dispatch(setUser(response));
        dispatch(setIdSelectedCourses(response.selectedCourses));
        dispatch(
          setSelectedCourses(
            fetchSelectedCourses(allCourses, response.selectedCourses),
          ),
        );
        setMessage('');
      });
    } else {
      setMessage('Загружаем курсы');
    }
  }, [token]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (selectedCourses) {
          const progressPromises = selectedCourses.map(async (course) => {
            const progress = await getCourseProgress(token, course._id);
            return { courseID: course._id, progress };
          });

          const progressResults = await Promise.all(progressPromises);
          const progressMap: Record<string, CourseProgressType> = {};
          progressResults.forEach(({ courseID, progress }) => {
            progressMap[courseID] = progress;
          });

          setCourseProgress(progressMap);
        } else {
          catchError('Не прогрузились курсы.');
        }
      } catch {
        catchError('Не смог получить курсы.');
      }
    };

    fetchData();
  }, [selectedCourses]);

  const handleExit = () => {
    dispatch(clearUser());
    router.push('/courses/main');
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.container__title}>Профиль</h2>
      <div id="top" className={styles.profile__box}>
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
          <div className={styles.images__mobile}>
            <Image
              width={141}
              height={141}
              className={styles.image__background}
              src="/icon/profile_background.svg"
              alt={'profile_background'}
              priority
            />
            <Image
              width={52}
              height={52}
              className={styles.image__circle}
              src="/icon/profile_circle.svg"
              alt={'profile_circle'}
              priority
            />
            <Image
              width={151}
              height={52}
              className={styles.image__semicircle}
              src="/icon/profile_semicircle.svg"
              alt={'profile_semicircle'}
              priority
            />
          </div>
        </div>
        <div className={styles.profile__info}>
          <h3 className={styles.profile__name}>{userName || 'Имя'}</h3>
          <p className={styles.profile__login}>
            Логин: {user?.email || 'email@mail.ru'}
          </p>
          <button className={styles.button__exit} onClick={handleExit}>
            Выйти
          </button>
        </div>
      </div>
      <div className={styles.courses__box}>
        <h2 className={styles.courses__title}>Мои курсы</h2>
        {selectedCourses.length ? (
          <div className={styles.courses__container}>
            <div className={styles.courses__me}>
              {fetchIsLoading
                ? Array.from({ length: 6 }).map((_, idx) => (
                    <div
                      key={idx}
                      className={styles.loadingCard}
                      aria-hidden="true"
                    >
                      <div className={styles.loadingImage} />
                      <div className={styles.loadingContent}>
                        <div className={styles.loadingTitle} />
                        <div className={styles.loadingMetaRow} />
                        <div className={styles.loadingMetaRowShort} />
                        <div className={styles.loadingButton} />
                      </div>
                    </div>
                  ))
                : selectedCourses.map((course) => {
                    const progressCourse = courseProgress[course._id];
                    return (
                      <Card
                        key={course._id}
                        course={course}
                        displayInProfile={true}
                        progressCourse={progressCourse}
                      />
                    );
                  })}
            </div>
            <a
              href="#top"
              className={styles.centerblock__buttonUp}
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById('top')
                  ?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Наверх ↑
            </a>
          </div>
        ) : (
          <p className={styles.empty}>
            {message ? message : 'У вас пока нет добавленных курсов'}
          </p>
        )}
      </div>
    </div>
  );
}
