'use client';

import Workout from '@/components/Workout/Workout';
import { dataWorkouts } from '@/dataWorks';
import { useParams } from 'next/navigation';

export default function WorkoutPage() {
  const params = useParams<{ id: string }>();
  return <Workout />;
}
