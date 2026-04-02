import Image from 'next/image';
import styles from './fitnessCourse.module.css';
import { CourseType } from '@/sharedTypes/types';
import FitnessCourseBottom from '../FitnessCourseBotom/FitnessCourseBottom';
import { FetchRightCover } from '@/utils/FetchRightCover';

type FitnessCourseTypeProp = {
  course: CourseType;
  error: string;
};

export default function FitnessCourse({
  course,
  error,
}: FitnessCourseTypeProp) {
  const theme = FetchRightCover(course.nameEN);
  console.log(theme.courseImageSrcMobile);

  const dynamicStyle = {
    backgroundColor: `${theme.color}`,
  };

  return (
    <div className={styles.fitnessCourse}>
      <div className={styles.fitnessCourse__header}>
        <h3 className={styles.header__title}>{course.nameRU}</h3>
        <div className={styles.header__image} style={dynamicStyle}>
          <Image
            width={1160}
            height={310}
            className={styles.image}
            src={theme.courseImageSrcLong}
            alt={course.nameEN}
            priority
          />
          <Image
            width={343}
            height={325}
            className={styles.image__mobile}
            src={theme.courseImageSrcMobile}
            alt={course.nameEN}
            priority
          />
        </div>
      </div>
      <div className={styles.fitnessCourse__description}>
        <h4 className={styles.description__title}>Подойдет для вас, если:</h4>
        <div className={styles.description__points}>
          {course.fitting.slice().map((text, index) => (
            <div key={index} className={styles.point}>
              <div className={styles.point__number}>{index + 1}</div>
              <p className={styles.point__text}>{text}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.fitnessCourse__directions}>
        <h4 className={styles.directions__title}>Направления</h4>
        <div className={styles.directions}>
          {course.directions.slice().map((text, index) => (
            <div key={index} className={styles.direction}>
              <Image
                width={26}
                height={26}
                src="/icon/asterisk.svg"
                alt="asterisk"
                className={styles.direction_asterisk}
              />
              <p className={styles.direction__text}>{text}</p>
            </div>
          ))}
        </div>
      </div>
      <FitnessCourseBottom />
    </div>
  );
}
