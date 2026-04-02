import Image from 'next/image';
import styles from './fitnessCourseBottom.module.css';

export default function FitnessCourseBottom() {
  return (
    <div className={styles.fitnessCourseBottom}>
      <div className={styles.fitnessCourse__adding}>
        <div className={styles.adding__container}>
          <h3 className={styles.adding__title}>
            Начните путь <br /> к новому телу
          </h3>
          <ul className={styles.adding__advantages}>
            <li className={styles.advantage}>
              <p className={styles.advantage__text}>
                проработка всех групп мышц
              </p>
            </li>
            <li className={styles.advantage}>
              <p className={styles.advantage__text}>тренировка суставов</p>
            </li>
            <li className={styles.advantage}>
              <p className={styles.advantage__text}>
                улучшение циркуляции крови
              </p>
            </li>
            <li className={styles.advantage}>
              <p className={styles.advantage__text}>
                упражнения заряжают бодростью
              </p>
            </li>
            <li className={styles.advantage}>
              <p className={styles.advantage__text}>
                помогают противостоять стрессам
              </p>
            </li>
          </ul>
          <button className={styles.adding__button}>Добавить курс</button>
        </div>
      </div>
      <Image
        width={515}
        height={568}
        src="/img/runner.png"
        alt="runner"
        className={styles.image_runner}
        priority
      />
      <Image
        width={54}
        height={46}
        src="/icon/vector_black.svg"
        alt="vector_black"
        className={styles.image_vectorBlack}
      />
      <div className={styles.container_vectorGreen}>
        <Image
          width={738}
          height={526}
          src="/icon/vector_green.svg"
          alt="vector_green"
          className={styles.image_vectorGreen}
        />
        <Image
          width={475}
          height={370}
          src="/icon/vector_green.svg"
          alt="vector_green"
          className={styles.image_vectorGreen__mobile}
        />
      </div>
    </div>
  );
}
