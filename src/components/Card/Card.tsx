import Image from 'next/image';
import styles from './card.module.css';
import classnames from 'classnames';

export default function Card() {
  return (
    <div className={styles.card}>
      <div className={styles.card__image}>
        <img
          className={styles.card__imageYoga}
          src="/img/yoga.jpg"
          alt="yoga"
        />
      </div>
      <div className={styles.card__info}>
        <div className={styles.card__name}>
          <h4 className={styles.name__title}>Йога</h4>
        </div>
        <div className={styles.card__parameters}>
          <div
            className={classnames(styles.parameters, styles.parameters__days)}
          >
            <Image
              width={18}
              height={18}
              className={styles.logo__image}
              src="/img/calendar.svg"
              alt={'yoga'}
            />
            <div>
              <p className={styles.parameters__description}>25 дней</p>
            </div>
          </div>
          <div
            className={classnames(styles.parameters, styles.parameters__time)}
          >
            <Image
              width={18}
              height={18}
              className={styles.logo__image}
              src="/img/watch.svg"
              alt={'yoga'}
            />
            <div>
              <p className={styles.parameters__description}>20-50 мин/день</p>
            </div>
          </div>
          <div
            className={classnames(styles.parameters, styles.parameters__level)}
          >
            <Image
              width={18}
              height={18}
              className={styles.logo__image}
              src="/img/level.svg"
              alt={'yoga'}
            />
            <div>
              <p className={styles.parameters__description}>Сложность</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
