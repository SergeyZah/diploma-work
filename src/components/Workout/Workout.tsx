'use client';

import styles from './workaut.module.css';
import { WorksType } from '@/sharedTypes/types';
import { useAppSelector } from '@/store/store';

type WorkoutTypeProp = {
  workaut: WorksType;
};

export default function Workout() {
  const { selectedWorkout } = useAppSelector((state) => state.courses);
  console.log(selectedWorkout);
  return (
    <div className={styles.workout}>
      <h2 className={styles.workout__name}></h2>
    </div>
  );
}
