import styles from './fitnessCourse.module.css';

export default function FitnessCourse() {
  return (
    <div className={styles.fitnessCourse}>
      <div className={styles.fitnessCourse__header}>
        <h3 className={styles.header__title}>Йога</h3>
        <div className={styles.header__image}>
          <img className={styles.image} src="/img/yoga.jpg" alt="yoga" />
        </div>
      </div>
      <div className={styles.fitnessCourse__description}>
        <h4 className={styles.description__title}>Подойдет для вас, если:</h4>
        <div className={styles.description__points}>
          <div className={styles.point}>
            <div className={styles.point__number}>1</div>
            <p className={styles.point__text}>
              Давно хотели <br /> попробовать йогу, <br /> но не решались начать
            </p>
          </div>
          <div className={styles.point}>
            <div className={styles.point__number}>2</div>
            <p className={styles.point__text}>
              Хотите укрепить <br /> позвоночник, избавиться <br /> от болей в
              спине и суставах
            </p>
          </div>
          <div className={styles.point}>
            <div className={styles.point__number}>3</div>
            <p className={styles.point__text}>
              Ищете активность, <br /> полезную для тела <br /> и души
            </p>
          </div>
        </div>
      </div>
      <div className={styles.fitnessCourse__directions}>
        <h4 className={styles.directions__title}>Направления</h4>
        <div className={styles.directions}>
          <div className={styles.direction}>
            <img
              src="/img/asterisk.svg"
              alt="asterisk"
              className={styles.direction_asterisk}
            />
            <p className={styles.direction__text}>Йога для новичков</p>
          </div>
          <div className={styles.direction}>
            <img
              src="/img/asterisk.svg"
              alt="asterisk"
              className={styles.direction_asterisk}
            />
            <p className={styles.direction__text}>Кундалини-йога</p>
          </div>
          <div className={styles.direction}>
            <img
              src="/img/asterisk.svg"
              alt="asterisk"
              className={styles.direction_asterisk}
            />
            <p className={styles.direction__text}>Хатха-йога</p>
          </div>
          <div className={styles.direction}>
            <img
              src="/img/asterisk.svg"
              alt="asterisk"
              className={styles.direction_asterisk}
            />
            <p className={styles.direction__text}>Классическая йога</p>
          </div>
          <div className={styles.direction}>
            <img
              src="/img/asterisk.svg"
              alt="asterisk"
              className={styles.direction_asterisk}
            />
            <p className={styles.direction__text}>Йогатерапия</p>
          </div>
          <div className={styles.direction}>
            <img
              src="/img/asterisk.svg"
              alt="asterisk"
              className={styles.direction_asterisk}
            />
            <p className={styles.direction__text}>Аштанга-йога</p>
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
        <img
          src="/img/runner.png"
          alt="runner"
          className={styles.image_runner}
        />
        <img
          src="/img/vector_black.svg"
          alt="vector_black"
          className={styles.image_vectorBlack}
        />
        <img
          src="/img/vector_green.svg"
          alt="vector_green"
          className={styles.image_vectorGreen}
        />
      </div>
    </div>
  );
}
