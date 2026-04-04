'use client';

import styles from './page.module.css';
import SelectWorkauts from '@/components/SelectWorkauts/SelectWorkauts';
import { WorksType } from '@/sharedTypes/types';
import { useAppSelector } from '@/store/store';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

export default function WorkautsPage() {
  const params = useParams<{ course: string }>();

  const dispatch = useDispatch();

  const { token } = useAppSelector((state) => state.auth);
  const { fetchIsLoading, courseWorkauts } = useAppSelector(
    (state) => state.courses,
  );

  const [workauts, setWorkauts] = useState<WorksType[]>();

  useEffect(() => {
    if (!fetchIsLoading && courseWorkauts) {
      setWorkauts(courseWorkauts);
    }
  }, []);

  console.log(workauts);

  return (
    <div className={styles.workautsPage}>
      <SelectWorkauts />
    </div>
  );
}
