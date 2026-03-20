import Image from 'next/image';
import styles from './card.module.css';
import classnames from 'classnames';

export default function Card() {
  return (
    <div className={styles.card}>
      <div className={styles.card_image}>
        <Image
          width={834}
          height={557}
          className={styles.card__image_yoga}
          src="/img/yoga.png"
          alt={'yoga'}
        />
      </div>
      <div className={styles.card_info}>
        <div className={styles.card_name}>
          <h4 className={styles.name_title}>Йога</h4>
        </div>
        <div className={styles.card_parameters}>
          <div
            className={classnames(styles.parameters, styles.parameters_days)}
          >
            <Image
              width={15}
              height={15}
              className={styles.logo__image}
              src="/img/calendar.svg"
              alt={'yoga'}
            />
            <div>
              <p>25 дней</p>
            </div>
          </div>
          <div
            className={classnames(styles.parameters, styles.parameters_time)}
          >
            <Image
              width={15}
              height={15}
              className={styles.logo__image}
              src="/img/watch.svg"
              alt={'yoga'}
            />
            <div>
              <p>20-50 мин/день</p>
            </div>
          </div>
          <div
            className={classnames(styles.parameters, styles.parameters_level)}
          >
            <Image
              width={18}
              height={18}
              className={styles.logo__image}
              src="/img/level.svg"
              alt={'yoga'}
            />
            <div>
              <p>Сложность</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
