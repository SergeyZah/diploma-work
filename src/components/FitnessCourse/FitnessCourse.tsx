import Image from 'next/image';
import styles from './fitnessCourse.module.css';
import { CourseType } from '@/sharedTypes/types';

type FitnessCourseTypeProp = {
  course: CourseType;
  error: string;
};

export default function FitnessCourse({
  course,
  error,
}: FitnessCourseTypeProp) {
  return (
    <div className={styles.fitnessCourse}>
      <div className={styles.fitnessCourse__header}>
        <h3 className={styles.header__title}>{course.nameRU}</h3>
        <div className={styles.header__image}>
          <Image
            width={440}
            height={400}
            className={styles.image}
            src="/img/yoga.jpg"
            alt="yoga"
          />
        </div>
      </div>
      <div className={styles.fitnessCourse__description}>
        <h4 className={styles.description__title}>Подойдет для вас, если:</h4>
        <div className={styles.description__points}>
          <div className={styles.point}>
            <div className={styles.point__number}>1</div>
            <p className={styles.point__text}>{course.fitting[0]}</p>
          </div>
          <div className={styles.point}>
            <div className={styles.point__number}>2</div>
            <p className={styles.point__text}>{course.fitting[1]}</p>
          </div>
          <div className={styles.point}>
            <div className={styles.point__number}>3</div>
            <p className={styles.point__text}>{course.fitting[2]}</p>
          </div>
        </div>
      </div>
      <div className={styles.fitnessCourse__directions}>
        <h4 className={styles.directions__title}>Направления</h4>
        <div className={styles.directions}>
          <div className={styles.direction}>
            <Image
              width={26}
              height={26}
              src="/icon/asterisk.svg"
              alt="asterisk"
              className={styles.direction_asterisk}
            />
            <p className={styles.direction__text}>{course.directions[0]}</p>
          </div>
          <div className={styles.direction}>
            <Image
              width={26}
              height={26}
              src="/icon/asterisk.svg"
              alt="asterisk"
              className={styles.direction_asterisk}
            />
            <p className={styles.direction__text}>{course.directions[1]}</p>
          </div>
          <div className={styles.direction}>
            <Image
              width={26}
              height={26}
              src="/icon/asterisk.svg"
              alt="asterisk"
              className={styles.direction_asterisk}
            />
            <p className={styles.direction__text}>{course.directions[2]}</p>
          </div>
          <div className={styles.direction}>
            <Image
              width={26}
              height={26}
              src="/icon/asterisk.svg"
              alt="asterisk"
              className={styles.direction_asterisk}
            />
            <p className={styles.direction__text}>{course.directions[3]}</p>
          </div>
          <div className={styles.direction}>
            <Image
              width={26}
              height={26}
              src="/icon/asterisk.svg"
              alt="asterisk"
              className={styles.direction_asterisk}
            />
            <p className={styles.direction__text}>{course.directions[4]}</p>
          </div>
          <div className={styles.direction}>
            <Image
              width={26}
              height={26}
              src="/icon/asterisk.svg"
              alt="asterisk"
              className={styles.direction_asterisk}
            />
            <p className={styles.direction__text}>{course.directions[5]}</p>
          </div>
        </div>
      </div>
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
        <Image
          width={515}
          height={568}
          src="/img/runner.png"
          alt="runner"
          className={styles.image_runner}
        />
        <Image
          width={54}
          height={46}
          src="/icon/vector_black.svg"
          alt="vector_black"
          className={styles.image_vectorBlack}
        />
        <Image
          width={738}
          height={526}
          src="/icon/vector_green.svg"
          alt="vector_green"
          className={styles.image_vectorGreen}
        />
      </div>
    </div>
  );
}
