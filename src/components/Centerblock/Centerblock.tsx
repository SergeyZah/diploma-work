import Image from 'next/image';
import styles from './centerblock.module.css';
import Card from '../Card/Card';
import { CourseType } from '@/sharedTypes/types';

type CenterblockTypeProp = {
  courseList: CourseType[];
  fetchIsLoading: boolean;
  messageCourses?: string;
};

export default function Centerblock({
  courseList,
  fetchIsLoading,
  messageCourses,
}: CenterblockTypeProp) {
  const sortCourseList = courseList
    .slice()
    .sort((a: CourseType, b: CourseType) => a.order - b.order);

  return (
    <div id="top" className={styles.centerblock}>
      <div className={styles.centerblock__header}>
        <h1 className={styles.centerblock__title}>
          Начните заниматься спортом и улучшите качество жизни
        </h1>
        <div className={styles.centerblock__slogan}>
          <div className={styles.slogan__top}>
            <p className={styles.slogan__text}>Измени своё тело за полгода!</p>
          </div>
          <div className={styles.slogan__bottom}>
            <Image
              width={30.24}
              height={35.17}
              className={styles.logo__image}
              src="/img/slogan_part.png"
              alt={'part'}
            />
          </div>
        </div>
      </div>
      {courseList.length ? (
        <div className={styles.centerblock__box}>
          <div className={styles.centerblock__cards}>
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
              : sortCourseList.map((course) => {
                  return (
                    <Card
                      key={course._id}
                      course={course}
                      displayInProfile={false}
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
          {messageCourses ? messageCourses : 'Загружаем курсы...'}
        </p>
      )}
    </div>
  );
}
