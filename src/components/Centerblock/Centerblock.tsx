import Image from 'next/image';
import styles from './centerblock.module.css';
import Card from '../Card/Card';
import { CourseType } from '@/sharedTypes/types';

type CenterblockTypeProp = {
  courseList: CourseType[];
};

export default function Centerblock({ courseList }: CenterblockTypeProp) {
  const sortCourseList = courseList
    .slice()
    .sort((a: CourseType, b: CourseType) => a.order - b.order);

  return (
    <div className={styles.centerblock}>
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
      <div className={styles.centerblock__cards}>
        {sortCourseList.map((course) => {
          return (
            <Card key={course._id} course={course} displayInProfile={false} />
          );
        })}
      </div>
    </div>
  );
}
