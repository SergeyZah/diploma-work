'use client';

import styles from './selectWorkauts.module.css';
import { getNameWorkaut, getString } from '@/hooks/croppingLines';
import { useAppSelector } from '@/store/store';

type SelectWorkautsTypeProp = {
  courseName: string;
};

export default function SelectWorkauts({ courseName }: SelectWorkautsTypeProp) {
  const { courseWorkauts } = useAppSelector((state) => state.courses);

  return (
    <div className={styles.selectWorkauts}>
      <div className={styles.selectWorkauts__container}>
        <h2 className={styles.selectWorkauts__title}>Выберите тренировку</h2>
        <div className={styles.selectWorkauts__box}>
          {courseWorkauts.map((workaut, id) => {
            return (
              <label
                key={workaut._id}
                className={styles.selectWorkauts__workaut}
              >
                <input type="radio" name="workout" className={styles.radio} />
                <div className={styles.workaut__info}>
                  <div className={styles.workaut__name}>
                    <p className={styles.name__text}>
                      {getNameWorkaut(workaut.name)}
                    </p>
                  </div>
                  <div className={styles.workaut__subtitle}>
                    <p className={styles.subtitle__text}>
                      {getString(workaut.name, courseName, id)}
                    </p>
                  </div>
                </div>
              </label>
            );
          })}
        </div>
        <button className={styles.selectWorkauts__button}>Начать</button>
      </div>
    </div>
  );
}
