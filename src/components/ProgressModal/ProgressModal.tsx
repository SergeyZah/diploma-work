import { useAppSelector } from '@/store/store';
import styles from './progressModal.module.css';
import { getQuestionExercise } from '@/hooks/croppingLines';

export default function ProgressModal() {
  const { selectedWorkout } = useAppSelector((state) => state.courses);
  return (
    <div className={styles.progressModal}>
      <div className={styles.progressModal__container}>
        <div className={styles.progressModal__box}>
          <h3 className={styles.progressModal__title}>Мой прогресс</h3>
          <div className={styles.progressModal__inputs}>
            {selectedWorkout?.exercises.map((exercise, idx) => {
              return (
                <div
                  key={`${exercise._id}`}
                  className={styles.progressModal__unit}
                >
                  <p
                    className={styles.input__text}
                  >{`Сколько раз вы сделали ${getQuestionExercise(exercise.name)}?`}</p>
                  <input
                    className={styles.progressModal__input}
                    type="number"
                    name="quantity"
                    placeholder="0"
                  />
                </div>
              );
            })}
            <button className={styles.progressModal__button}>Сохранить</button>
          </div>
        </div>
      </div>
    </div>
  );
}
