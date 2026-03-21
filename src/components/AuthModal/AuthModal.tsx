import Image from 'next/image';
import styles from './authModal.module.css';
import Link from 'next/link';
import classnames from 'classnames';

export default function AuthModal() {
  return (
    <div className={styles.authModal}>
      <div className={styles.authModalContainer}>
        <div className={styles.authModal_logo}>
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
        <div className={styles.authModal__inputs}>
          <input
            className={classnames(styles.authModal__input, styles.login)}
            type="text"
            name="login"
            placeholder="Логин"
          />
          <input
            className={classnames(styles.authModal__input, styles.password)}
            type="text"
            name="password"
            placeholder="Пароль"
          />
        </div>
        <div className={styles.authModal__buttons}>
          <button className={styles.authModal__btnSignin}>Войти</button>
          <button className={styles.authModal__btnSignup}>
            Зарегистрироваться
          </button>
        </div>
      </div>
    </div>
  );
}
