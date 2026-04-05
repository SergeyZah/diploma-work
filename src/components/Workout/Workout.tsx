'use client';

import styles from './workout.module.css';
import { WorkoutProgressType, WorksType } from '@/sharedTypes/types';
import { useAppSelector } from '@/store/store';

type WorkoutTypeProp = {
  workout: WorksType;
  workProgress: WorkoutProgressType;
};

export default function Workout({ workout, workProgress }: WorkoutTypeProp) {
  const { selectedWorkout, selectCoursName } = useAppSelector(
    (state) => state.courses,
  );

  return (
    <div className={styles.workout}>
      <h2 className={styles.workout__name}>{selectCoursName}</h2>
      {selectedWorkout ? (
        <iframe
          className={styles.workout__video}
          src={`${selectedWorkout?.video}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          width={1160}
          height={639}
        ></iframe>
      ) : (
        <div className={styles.workout__video}></div>
      )}
      <div className={styles.workout__box}>
        <h3 className={styles.workout__title}>Упражнения тренировки </h3>
        <div className={styles.workout__exercises}>
          {}
          {selectedWorkout?.exercises.map((exercise) => {
            return (
              <div key={`${exercise._id}`} className={styles.workout__exercise}>
                <p
                  className={styles.exercise__name}
                >{`${exercise.name} ${10}%`}</p>
                <div className={styles.exercise__progress}>
                  <div className={styles.progress}></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
