import Image from 'next/image';
import styles from './card.module.css';
import classnames from 'classnames';
import { Course } from '@/sharedTypes/types';
import { FetchRightCover } from '@/utils/FetchRightCover';

type CardTypeProp = {
  courses: Course[];
  course: Course;
};

export default function Card({ courses, course }: CardTypeProp) {
  const theme = FetchRightCover(course.nameEN);

  console.log(theme);

  return (
    <div className={styles.card}>
      <div className={styles.card__image}>
        <Image
          width={360}
          height={325}
          className={styles.card__imageYoga}
          src={theme.courseImageSrc}
          alt="yoga"
        />
      </div>
      <div className={styles.card__info}>
        <div className={styles.card__name}>
          <h4 className={styles.name__title}>{course.nameRU}</h4>
        </div>
        <div className={styles.card__parameters}>
          <div
            className={classnames(styles.parameters, styles.parameters__days)}
          >
            <Image
              width={18}
              height={18}
              className={styles.logo__image}
              src="/icon/calendar.svg"
              alt={'yoga'}
            />
            <div>
              <p className={styles.parameters__description}>
                {course.durationInDays}
              </p>
            </div>
          </div>
          <div
            className={classnames(styles.parameters, styles.parameters__time)}
          >
            <Image
              width={18}
              height={18}
              className={styles.logo__image}
              src="/icon/watch.svg"
              alt={'yoga'}
            />
            <div>
              <p className={styles.parameters__description}>
                {course.dailyDurationInMinutes.from} -{' '}
                {course.dailyDurationInMinutes.to} мин/день
              </p>
            </div>
          </div>
          <div
            className={classnames(styles.parameters, styles.parameters__level)}
          >
            <Image
              width={18}
              height={18}
              className={styles.logo__image}
              src="/icon/level.svg"
              alt={'yoga'}
            />
            <div>
              <p className={styles.parameters__description}>
                {course.difficulty}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
