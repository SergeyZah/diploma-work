import Link from 'next/link';
import styles from './header.module.css';
import Image from 'next/image';

export default function Header() {
  return (
    <div className={styles.header}>
      <div>
        <div className={styles.header_logo}>
          <Link className={styles.logo__link} href="#">
            <Image
              width={220}
              height={35}
              className={styles.logo__image}
              src="/img/logo.png"
              alt={'logo'}
            />
          </Link>
        </div>
        <h4 className={styles.header_title}>
          Онлайн-тренировки для занятий дома
        </h4>
      </div>
      <div className={styles.header_button}>
        {/* <button className={styles.button_signin}>Войти</button> */}
        <p className={styles.button_text}>Войти</p>
      </div>
    </div>
  );
}
