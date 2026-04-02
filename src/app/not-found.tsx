import Link from 'next/link';
import styles from './not-found.module.css';

export default function NotFound() {
  return (
    <div className={styles.notfound__container}>
      <div className={styles.notfound__title}>404</div>
      <div className={styles.notfound__text}>Страница не найдена</div>
      <Link href={'/courses/main'} className={styles.notfound__link}>
        На главную
      </Link>
    </div>
  );
}
