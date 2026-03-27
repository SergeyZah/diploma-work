import styles from './popUser.module.css';

export default function PopUser() {
  return (
    <div className={styles.popUser}>
      <div className={styles.container}>
        <div className={styles.userInfo}>
          <div className={styles.userName}>Сергей</div>
          <div className={styles.userMail}>sergey.petrov96@mail.ru</div>
        </div>
        <div className={styles.buttons}>
          <button className={styles.btnProfile}>Мой профиль</button>
          <button className={styles.btnExit}>Выйти</button>
        </div>
      </div>
    </div>
  );
}
