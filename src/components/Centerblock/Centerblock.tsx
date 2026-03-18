import Image from 'next/image';
import styles from './centerblock.module.css';

export default function Centerblock() {
  return (
    <div className={styles.centerblock}>
      <h1 className={styles.centerblock_title}>
        Начните заниматься спортом и улучшите качество жизни
      </h1>
      <div className={styles.centerblock_slogan}>
        <div className={styles.slogan_top}>
          <p className={styles.slogan_text}>Измени своё тело за полгода!</p>
        </div>
        <div className={styles.slogan_bottom}>
          <Image
            width={30.24}
            height={35.17}
            className={styles.logo__image}
            src="/img/slogan_part.png"
            alt={'logo'}
          />
        </div>
      </div>
    </div>
  );
}
