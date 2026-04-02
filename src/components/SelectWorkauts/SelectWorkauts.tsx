import { dataWorkauts } from '@/dataWorks';
import styles from './selectWorkauts.module.css';
import { getNameWorkaut, getString } from '@/hooks/croppingLines';

export default function SelectWorkauts() {
  return (
    <div className={styles.selectWorkauts}>
      <div className={styles.selectWorkauts__container}>
        <h2 className={styles.selectWorkauts__title}>Выберите тренировку</h2>
        <div className={styles.selectWorkauts__box}>
          {dataWorkauts.map((workaut) => {
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
                      {getString(workaut.name)}
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
